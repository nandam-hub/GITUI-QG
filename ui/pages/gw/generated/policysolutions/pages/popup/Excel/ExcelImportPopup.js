import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ExcelImportPopup {
	excelImportPopupCancel = PcfButton('#ExcelImportPopup-Cancel');
	excelImportPopupEdit = PcfButton('#ExcelImportPopup-Edit');
	excelImportPopupExcelImportPopup_UpLink = PcfButton('#ExcelImportPopup-ExcelImportPopup_UpLink');
	excelImportPopupHiddenTestInput = PcfTextInput('#ExcelImportPopup-HiddenTestInput');
	excelImportPopupUpdate = PcfButton('#ExcelImportPopup-Update');
	excelImportPopup_Paging = PcfButton('#ExcelImportPopup-_Paging');
	excelImportPopup__crumb__ = PcfComponent('#ExcelImportPopup-__crumb__');
	excelImportPopup_msgs = PcfButton('#ExcelImportPopup-_msgs');
	excelImportPopupinputFile = PcfButton('#ExcelImportPopup-inputFile');
}
