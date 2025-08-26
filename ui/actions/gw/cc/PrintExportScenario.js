import { t} from "testcafe"
import world from "../../../util/gw/world.js"
import { PrintOptionPopup } from "../../../pages/gw/generated/billingsolutions/pages/popup/Print/PrintOptionPopup";
import { NavigationScenario } from "./NavigationScenario";
import { downloadAndMovePdf} from "../../../util/gw/PdfDownloadHelper";
import xlsx from 'xlsx'

const printOptionPopup = new PrintOptionPopup();
const navigationScenario = new NavigationScenario();

export class PrintExportScenario {
    async downloadExposureDocument() {
        await navigationScenario.navigateToPrintExportScreen();
        await this.selectPrintExportOptions(world.dataMap.get("Choice"));
        await downloadAndMovePdf(printOptionPopup.printOptionPopupScreenOk)
    }

    async selectPrintExportOptions(Radio) {
        await t.click(`#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-${Radio}_Choice_radio`)
        if ((world.dataMap.get("Choice") == "CustomExportChoice")) {
            await t.click(`#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-CustomCsvColumnsLV-${world.dataMap.get("option")}-Select_checkboxDiv`);
        }
    }
    
    async updateExcelData(){
        // Read the Excel file
    const workbook = xlsx.readFile(t.ctx.dataFilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Update a cell value (e.g., B2)
    worksheet['B2'] = { v: t.ctx.claimNo };
    worksheet['C2'] = { v: t.ctx.claimNo };
    worksheet['B3'] = { v: `${world.dataMap.get('PolicyNumber')}Ins:` };
    worksheet['C3'] = { v: `${world.dataMap.get('PolicyNumber')}Ins:` };

    // Write the updated workbook back to the file
    xlsx.writeFile(workbook, t.ctx.dataFilePath);

    console.log('Excel file updated!');
    }
}
