import { PcfButton, PcfComponent } from '@gtui/gt-ui-framework';
import fs from 'fs';
import path from 'path';
import { t } from 'testcafe';
import world from "./world"


const downloadsFolder = process.env.DownloadPath
const desiredPath = path.join(__dirname, process.env.PdfDesiredPath)

// Function to check if a file exists
const fileExists = filePath => fs.existsSync(filePath);

// Helper function to format the timestamp from mtime
function formatTimestamp(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}

/**
 * To delete downlaoded pdf from this framework path
 */
export async function deleteFileAfterUse() {
    const actualFile = world.dataMap.get('ActualFile');
    if (actualFile) {
        const filePath = path.join(desiredPath, `${actualFile}.pdf`);
        try {
            // Check if file exists
            await fs.promises.access(filePath, fs.constants.F_OK);
            
            // If file exists, delete it
            await fs.promises.unlink(filePath);
            console.log('File Deleted Successfully on path:', filePath);
        } catch (err) {
            // Log error without checking for 'ENOENT'
            console.log('File Delete Unsuccessful:', err.message);
        }
    }
}

/**
 * To download pdf from UI and store it in desired path within this framework
 * @param {PcfButton|PcfComponent} cssComponent 
 */
export async function downloadAndMovePdf(cssComponent) {
    let originalFileName = world.dataMap.get('PdfFileName')
    const pdfFilePath = path.join(downloadsFolder, originalFileName);

    // Click the component to trigger download
    await cssComponent.click();

    // Wait for a few seconds to allow the file to download
    await t.wait(5000);

    // Verify if the file exists in the downloads folder
    if (fileExists(pdfFilePath)) {
        const fileStats = fs.statSync(pdfFilePath);
        const modifiedTime = fileStats.mtime;

        // Format the modified time into a timestamp
        const timestamp = formatTimestamp(modifiedTime)

        // Create the new file name by appending the modified timestamp to "print"
        world.dataMap.set('ActualFile', `${world.dataMap.get('ActualFile')}_${timestamp}`);
        const newFilePath = path.join(desiredPath, world.dataMap.get('ActualFile') + '.pdf');

        // Rename and move the file to the desired path
        fs.renameSync(pdfFilePath, newFilePath);
        console.log(`File renamed to: ${world.dataMap.get('ActualFile')} and moved to: ${newFilePath}`);
    } else {
        throw new Error(`PDF file not found in ${downloadsFolder}`);
    }
}

/** 
 * To move pdf from one place to another
 */
export async function relocatePdf() {
    let originalResultPath = process.env.PdfResultPath
    let filePrefix = world.dataMap.get('ActualFile')
    // Get all files in the original result path
    const files = fs.readdirSync(originalResultPath);

    // Find the file that starts with the specified prefix
    const originalFileName = files.find(file => file.startsWith(filePrefix));
    console.log('originalFileName', originalFileName)

    if (originalFileName) {
        const pdfFilePath = path.join(originalResultPath, originalFileName);
        console.log('pdfFilePath', pdfFilePath)

        // Verify if the file exists in the folder
        if (fileExists(pdfFilePath)) {
            const newFilePath = path.join(desiredPath, originalFileName);
            console.log('newFilePath', newFilePath)

            // move the file to the desired path
            fs.renameSync(pdfFilePath, newFilePath);
            console.log(`File moved to: ${newFilePath}`);
        } else {
            throw new Error(`PDF file not found in ${originalResultPath}`);
        }
    } else {
        throw new Error(`No file found in ${originalResultPath} starting with ${filePrefix}`);
    }
}

// Reusable function to move a file from a shared path to a destination
export async function fetchFileFromSharedLocation() {
    const sharedLocation = "";
    
    const fileName = "Policy_Document.pdf";
    const localFilePath = path.join(downloadsFolder, fileName); // Path to store file locally
    const destinationPath = path.join(__dirname, desiredPath) // Path to move the file to

    try {
        // Step 1: Use fetch to download the file from the SharePoint URL
        const response = await fetch(sharedLocation);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.statusText}`);
        }

        // Step 2: Save the file locally using a writable stream
        const fileStream = fs.createWriteStream(localFilePath);
        await new Promise((resolve, reject) => {
            response.body.pipe(fileStream);
            response.body.on('error', reject);
            fileStream.on('finish', resolve);
        });

        console.log('File downloaded successfully.');

        // Step 3: Move the file to the desired location using fs.rename
        return new Promise((resolve, reject) => {
            fs.rename(localFilePath, destinationPath, (err) => {
                if (err) {
                    return reject(new Error(`Error moving file: ${err}`));
                }
                resolve(`File successfully moved to: ${destinationPath}`);
            });
        });

    } catch (err) {
        throw new Error(`Error fetching file from SharePoint: ${err.message}`);
    }
}