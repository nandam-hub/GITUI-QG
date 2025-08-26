const moment = require('moment');
import { t, Selector } from 'testcafe';
const xlsx = require('xlsx');
const fs = require('fs');
import { deleteFileAfterUse, relocatePdf } from './PdfDownloadHelper';

/**
 * To generate date from current date in MMDDYYYY format
 * @param {string} noOfDays - number of days to be added or substracted
 * @param {string} dateFormat - format in which dat ehas to be returned
 * @returns - modified date
 */
export function dateFunction(noOfDays, dateFormat = 'MMDDYYYY') {
    var modifiedDate = moment().add(noOfDays, 'days').format(dateFormat).toString();
    return modifiedDate;
}
/**
 * Splits the string and returns value based on index
 * @param {string} value - Whole string that should be split
 * @param {string} delimiter - Reference character to split string
 * @param {Number} index - Sub string index that should be returned
 * @returns -  Sub string 
 */
export function splitFunction(value, delimiter, index) {
    var stringValue = value.split(delimiter);
    var splitValue = stringValue[index];
    return splitValue;
}
/**
 * Generates and returns random string with length provided
 * @param {Number} length - Length of the string to be generated
 * @returns - a random string with provided length
 */
export function generateRandomStringFunction(length) {
    let randomString = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        const randonIndex = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[randonIndex];
    }
    return randomString;
}

/**
 * Generates and returns random numbers with length provided
 * @param {*} length Length of the number to be generated
 * @returns  a random number with provided length
 */
export function generateRandomNumber(length) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** To convert string to Int
 * @param {string} inputString - String value that should be converted
 * @returns - Interger
*/
export function convertToInt(inputString) { return parseInt(inputString, 10) }

//To click on a specific record in a table.
//This function by default considers first table in a page
export async function searchTableRecord(headerNameOrIndex, stringValue) {
    await t.wait(1000)
    const tableRows = Selector('table').nth(0).find('tr');
    const tablecols = tableRows.nth(0).find('td');
    const rowCount = await tableRows.count;
    //To find "headerNameOrIndex" is string or index
    if (typeof headerNameOrIndex === 'string') {
        const colsCount = await tablecols.count;
        for (let i = 0; i < colsCount; i++) {
            let cellText
            try {
                cellText = await tablecols.nth(i).find('div.gw-label').textContent;
            }
            catch (e) {
                // Skip a loop if no lable found - checkbox/empty title
                continue;
            }
            if (headerNameOrIndex.includes(cellText) && cellText.trim() !== '' && cellText.trim() !== null) {
                headerNameOrIndex = i;
                break;
            }
        }
    }
    for (let i = 1; i < rowCount; i++) {
        const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).textContent;
        if (cellText.includes(stringValue)) {
            await t.click(tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget'));
            await t.wait(2000)
            break;
        }
    }
}
/**To return a specific cell value from a table
 * @param {string|Number} headerNameOrIndex - Column name or column index of reference cell value
 * @param {string} referenceCellValue - Reference cell value
 * @param {Number} targetColumnIndex - Column index where stringValue is present
 * @returns - Table cell value
 */
export async function validateTableRecord(headerNameOrIndex, referenceCellValue, targetColumnIndex) {
    await t.wait(1000)
    const tableRows = Selector('table.gw-ListViewWidget--table').find('tr');
    const tablecols = tableRows.nth(0).find('td');
    const rowCount = await tableRows.count;
    //To find "headerNameOrIndex" is string or index
    if (typeof headerNameOrIndex === 'string') {
        const colsCount = await tablecols.count;
        for (let i = 0; i < colsCount; i++) {
            let cellText
            cellText = await tablecols.nth(i).textContent;
            if (cellText.includes(headerNameOrIndex) && cellText.trim() !== '' && cellText.trim() !== null) {
                headerNameOrIndex = i;
                break;
            }
        }
    }
    let actualValue = "";
    for (let i = 1; i < rowCount; i++) {
        const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).textContent;
        if (cellText.includes(referenceCellValue)) {
            actualValue = await (tableRows.nth(i).find('td').nth(targetColumnIndex).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget, div.gw-label, div.gw-actionable--inner')).textContent;
            break;
        }
    }
    return actualValue
}

/** To convert Pascal case to Camel case
 * @param {string} inputString - String value that should be converted
 * @returns - String in camel case
*/
export function pascalToCamel(inputString) {
    if (typeof inputString == 'string')
        return inputString.charAt(0).toLowerCase() + inputString.slice(1)
}

/** 
 * To click on a record in a table with a specific text.
 * @param {string, Number} referenceCellValueOrIndex -Reference Cell text or column index
 * @param {string} stringValue - Cell text value or css component of the text on which click action should be performed
 */
export async function clickTableRecord(stringValue, referenceCellValueOrIndex) {
    const tableRows = Selector('table.gw-ListViewWidget--table').find('tr');
    if ((typeof referenceCellValueOrIndex) === 'string') {
        let tablePath = tableRows.withText(referenceCellValueOrIndex).find('td')
        try {
            await t.click(tablePath.find('div').nth(-1).withText(stringValue))
        }
        catch (e) {
            console.log('withText did not work. Trying with id')
            await t.click(tablePath.find('div').find(`[id*="${stringValue}"]`))
        }
    }
    else {
        for (let i = 1; i <= await tableRows.count; i++) {
            let currentCell = tableRows.nth(i).find('td').nth(referenceCellValueOrIndex)
            if ((await (currentCell.textContent)).includes(stringValue)) {
                await t.click(currentCell.find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget'))
                break;
            }

        }

    }
}


/**
 * To return specific cell value based on row and column
 * @param {Number} columnIndex - column number of the actual value
 * @param {Number} rowIndex - row number of the actual value. By default considers last row * 
 * @returns - specific cellText
 */
export async function returnDataFromTable(columnIndex, rowIndex = -1) {
    //Locate Table
    const table = Selector('table.gw-ListViewWidget--table');
    return await table.find('tbody').find('tr').nth(rowIndex).find('td').nth(columnIndex).textContent;
}

/**
 * To enter data in input field of a table
 * @param {*} component Pass the component identifier in string format
 * @param {*} inputString String value that needs to be entered
 * @param {*} rowIndex (optional field) - Row index on which component is present. By default takes last row
 */
export async function enterDataInTable(component, inputString, rowIndex = -1) {
    let foundTable = await findTable(t.ctx.TableIdentifier)
    let lastRow = foundTable.find('tbody').find('tr').nth(rowIndex)
    const inputField = lastRow.find(component).find('input')
    await t.typeText(inputField, inputString);
}

/**
 * To click on an component in a table
 * @param {*} component Pass the component identifier in string format
 * @param {*} rowIndex (optional field) - Row index on which component is present. By default takes last row
 */
export async function performClickInTable(component, rowIndex = -1) {
    let foundTable = await findTable(t.ctx.TableIdentifier)
    let lastRow = foundTable.find('tbody').find('tr').nth(rowIndex)
    await t.click(lastRow.find(component));
}

/**
 * To perform hover on a component in a table
 * @param {string} component - Pass the component identifier in string format
 * @param {Number} rowIndex(optional field) - Row index on which component is present. By default takes last row
 */
export async function performHoverInTable(component, rowIndex = -1) {
    // Locate Table
    let foundTable = await findTable(t.ctx.TableIdentifier)
    let lastRow = foundTable.find('tbody').find('tr').nth(rowIndex)
    // Locate the webelement to be hover in last row
    await t.hover(lastRow.find(component));
}

/**
 * Recursive function to navigate through nested submenus and click a specific option
 * @param {Array string} menuPath - list of options in sequence
 * @param {string} finalOptionText - final option to click
 */
export async function navigateAndClickSubmenu(menuPath, finalOptionText = null) {
    let currentSelector = Selector('div.gw-subMenu.gw-open');
    if (await (currentSelector.find(`div[aria-label='New ...']`)).exists)
        await t.hover(currentSelector.find(`div[aria-label='New ...']`));

    // Iterate through the menu path to hover over each submenu
    for (let i = 0; i < menuPath.length; i++) {
        const menuItem = currentSelector.find(`div[aria-label='${menuPath[i]}']`);
        await t.hover(menuItem);

        // If finalOptionText is not provided, click the last item in menuPath
        if ((!finalOptionText) && i === menuPath.length - 1) {
            await t.click(menuItem);
        }
    }

    // Click the desired finalOptionText if provided
    if (finalOptionText) {
        await t.click(currentSelector.find(`div[aria-label='${finalOptionText}']`));
    }
}

/**To return number of records of specific value from a table
 * @param {string|Number} headerNameOrIndex - Column name or column index of reference cell value
 * @param {string} referenceCellValue - Reference cell value
 * @param {Number} targetColumnIndex - Column index where stringValue is present
 * @returns - Number of matched records
 */
export async function getNumberOfTableRecords(headerNameOrIndex, referenceCellValue) {
    await t.wait(1000)
    const tableRows = Selector('table.gw-ListViewWidget--table').find('tr');
    const tablecols = tableRows.nth(0).find('td');
    const rowCount = await tableRows.count;
    //To find "headerNameOrIndex" is string or index
    if (typeof headerNameOrIndex === 'string') {
        const colsCount = await tablecols.count;
        for (let i = 0; i < colsCount; i++) {
            let cellText = await tablecols.nth(i).textContent;
            if (cellText.includes(headerNameOrIndex) && cellText.trim() !== '' && cellText.trim() !== null) {
                headerNameOrIndex = i;
                break;
            }
        }
    }
    let actualValue = 0;
    for (let i = 1; i < rowCount; i++) {
        const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).textContent;
        if (cellText.includes(referenceCellValue)) {
            actualValue++
        }
    }
    return actualValue
}

/**
 * To select dropdown value in a table 
 * @param {string} component - Pass the dropdown identifier in string format
 * @param {string} optionLabel - Label value to be selected from dropdown
 * @param {Number} rowIndex(optional field) - Row index on which component is present. By default takes last row
 */
export async function selectDropdownInTable(component, optionLabel, rowIndex = -1) {
    let foundTable = await findTable(t.ctx.TableIdentifier)
    let lastRow = foundTable.find('tbody').find('tr').nth(rowIndex)
    await t.click(lastRow.find(component))
        .click(lastRow.find(component).find('option').withText(optionLabel))
}

export async function findTable(identifierColumnHeader) {
    const allTable = Selector('table.gw-ListViewWidget--table')
    let foundTable = null;

    for (let i = 0; i < await allTable.count; i++) {
        const columnHeader = allTable.nth(i).find('tr').find('td[role="columnheader"]')
        for (let j = 0; j < await columnHeader.count; j++) {
            const component = columnHeader.nth(j).find('div.gw-label');

            if (await component.exists)
                if ((await (component.textContent)).startsWith(identifierColumnHeader)) {
                    foundTable = allTable.nth(i)
                    break;
                }
        }
        if (foundTable)
            break;
    }
    return foundTable;
}

/**
* Function to check if all cells in the last column are TRUE.
* @param {string} filePath - The path to the Excel file.
* @returns {boolean} - Returns true if all cells in the last column are TRUE, otherwise false.
*/
export async function validateLastColumnTrue() {
    // Read the Excel file
    const workbook = xlsx.readFile(t.ctx.dataFilePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet data to a JSON object
    const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    // Get the last column index (based on the first row)
    const lastColumnIndex = jsonData[0].length - 1;

    // Iterate through the rows and check if the last column is TRUE
    for (let i = 1; i < jsonData.length; i++) {
        const cellValue = jsonData[i][lastColumnIndex];
        if (cellValue !== true) {
            console.log("Match is false")
            await relocatePdf()
            await t.expect(isValid).ok('Not all cells are True');
        }
    }

    await deleteFileAfterUse(); // All cells in the last column are TRUE
}

export async function verifyCompleteMatch(response){
    if (response.completematch) {
        await deleteFileAfterUse()
    }
    else {
        console.log("response.completematch is false")
        await relocatePdf()
        await t.expect(response.completematch).eql(true)
    }
}