import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ICDPopup {
	iCDPopupScreenCancel = PcfButton('#ICDPopup-ICDPopupScreen-Cancel');
	iCDPopupScreenEdit = PcfButton('#ICDPopup-ICDPopupScreen-Edit');
	iCDDVAvailable_Date = PcfDateValueInput('#ICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Available_Date');
	iCDDVBody_System = PcfSelectInput('#ICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Body_System');
	iCDDVChronic = PcfCheckBox('#ICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Chronic');
	iCDDVDescription = PcfTextInput('#ICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Description');
	iCDDVEnd_Date = PcfDateValueInput('#ICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-End_Date');
	iCDDVICD_Code = PcfButton('#ICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-ICD_Code');
	localizedValuesDVLocalizedValuesLV = PcfListView('#ICDPopup-ICDPopupScreen-LocalizedValuesDV-LocalizedValuesLV');
	iCDPopupScreenUpdate = PcfButton('#ICDPopup-ICDPopupScreen-Update');
	iCDPopupScreen_msgs = PcfButton('#ICDPopup-ICDPopupScreen-_msgs');
	iCDPopupICDPopup_UpLink = PcfButton('#ICDPopup-ICDPopup_UpLink');
	iCDPopup_Paging = PcfButton('#ICDPopup-_Paging');
	iCDPopup__crumb__ = PcfComponent('#ICDPopup-__crumb__');
}
