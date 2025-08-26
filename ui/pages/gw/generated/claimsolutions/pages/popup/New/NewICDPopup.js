import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewICDPopup {
	newICDPopupICDPopupScreenCancel = PcfButton('#NewICDPopup-ICDPopupScreen-Cancel');
	newICDPopupICDPopupScreenEdit = PcfButton('#NewICDPopup-ICDPopupScreen-Edit');
	newICDPopupICDPopupScreenICDDVPanelICDDVAvailable_Date = PcfDateValueInput('#NewICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Available_Date');
	newICDPopupICDPopupScreenICDDVPanelICDDVBody_System = PcfSelectInput('#NewICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Body_System');
	newICDPopupICDPopupScreenICDDVPanelICDDVChronic = PcfCheckBox('#NewICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Chronic');
	newICDPopupICDPopupScreenICDDVPanelICDDVDescription = PcfTextInput('#NewICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-Description');
	newICDPopupICDPopupScreenICDDVPanelICDDVEnd_Date = PcfDateValueInput('#NewICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-End_Date');
	newICDPopupICDPopupScreenICDDVPanelICDDVICD_Code = PcfButton('#NewICDPopup-ICDPopupScreen-ICDDVPanel-ICDDV-ICD_Code');
	newICDPopupICDPopupScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewICDPopup-ICDPopupScreen-LocalizedValuesDV-LocalizedValuesLV');
	newICDPopupICDPopupScreenUpdate = PcfButton('#NewICDPopup-ICDPopupScreen-Update');
	newICDPopupICDPopupScreen_msgs = PcfButton('#NewICDPopup-ICDPopupScreen-_msgs');
	newICDPopupNewICDPopup_UpLink = PcfButton('#NewICDPopup-NewICDPopup_UpLink');
	newICDPopup_Paging = PcfButton('#NewICDPopup-_Paging');
	newICDPopup__crumb__ = PcfComponent('#NewICDPopup-__crumb__');
}
