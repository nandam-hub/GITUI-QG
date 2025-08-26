import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ExportData {
	exportDataDVExportDataSetLV = PcfListView('#ExportData-ExportDataScreen-ExportDataDV-ExportDataSetLV');
	exportDataSetLV_tbExportButton = PcfButton('#ExportData-ExportDataScreen-ExportDataDV-ExportDataSetLV_tb-ExportButton');
	securityDictionaryDVDownloadButton = PcfButton('#ExportData-ExportDataScreen-SecurityDictionaryDV-DownloadButton');
	securityDictionaryDVOutputFormat = PcfSelectInput('#ExportData-ExportDataScreen-SecurityDictionaryDV-OutputFormat');
	exportDataScreen_msgs = PcfButton('#ExportData-ExportDataScreen-_msgs');
	exportDataExportData_UpLink = PcfButton('#ExportData-ExportData_UpLink');
	exportData_Paging = PcfButton('#ExportData-_Paging');
	exportData__crumb__ = PcfComponent('#ExportData-__crumb__');
}
