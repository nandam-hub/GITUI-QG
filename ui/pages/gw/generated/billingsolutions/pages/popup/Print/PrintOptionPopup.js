import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PrintOptionPopup {
	printOptionPopupScreenDone = PcfButton('#PrintOptionPopup-PrintOptionPopupScreen-Done');
	printOptionPopupScreenOk = PcfButton('#PrintOptionPopup-PrintOptionPopupScreen-Ok');
	printOptionDVCustomCsvColumnsLV = PcfListView('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-CustomCsvColumnsLV');
	printOptionDVCustomExport = PcfTextInput('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-CustomExport');
	printOptionDVCustomExportChoice_Choice = PcfButton('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-CustomExportChoice_Choice');
	printOptionDVDoPrint = PcfTextInput('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-DoPrint');
	printOptionDVExport = PcfTextInput('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-Export');
	printOptionDVExportChoice_Choice = PcfButton('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-ExportChoice_Choice');
	printOptionDVPrintChoice_Choice = PcfButton('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-PrintChoice_Choice');
	printOptionDVcharsetRI = PcfSelectInput('#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-charsetRI');
	printOptionPopupScreen_msgs = PcfButton('#PrintOptionPopup-PrintOptionPopupScreen-_msgs');
	printOptionPopupPrintOptionPopup_UpLink = PcfButton('#PrintOptionPopup-PrintOptionPopup_UpLink');
	printOptionPopup_Paging = PcfButton('#PrintOptionPopup-_Paging');
	printOptionPopup__crumb__ = PcfComponent('#PrintOptionPopup-__crumb__');
}
