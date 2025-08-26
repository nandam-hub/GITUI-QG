import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class DelinquencyPlanEventPopup {
	delinquencyPlanEventPopupAutomatic = PcfComponent('#DelinquencyPlanEventPopup-Automatic');
	delinquencyPlanEventPopupCancel = PcfButton('#DelinquencyPlanEventPopup-Cancel');
	delinquencyPlanEventPopupDelinquencyPlanEventPopup_UpLink = PcfButton('#DelinquencyPlanEventPopup-DelinquencyPlanEventPopup_UpLink');
	delinquencyPlanEventPopupDescription = PcfTextInput('#DelinquencyPlanEventPopup-Description');
	delinquencyPlanEventPopupEdit = PcfButton('#DelinquencyPlanEventPopup-Edit');
	delinquencyPlanEventPopupName = PcfSelectInput('#DelinquencyPlanEventPopup-Name');
	delinquencyPlanEventPopupOffsetDays = PcfTextInput('#DelinquencyPlanEventPopup-OffsetDays');
	delinquencyPlanEventPopupRelativeOrder = PcfTextInput('#DelinquencyPlanEventPopup-RelativeOrder');
	delinquencyPlanEventPopupTriggerBasis = PcfSelectInput('#DelinquencyPlanEventPopup-TriggerBasis');
	delinquencyPlanEventPopupUpdate = PcfButton('#DelinquencyPlanEventPopup-Update');
	delinquencyPlanEventPopup_Paging = PcfButton('#DelinquencyPlanEventPopup-_Paging');
	delinquencyPlanEventPopup__crumb__ = PcfComponent('#DelinquencyPlanEventPopup-__crumb__');
	delinquencyPlanEventPopup_msgs = PcfButton('#DelinquencyPlanEventPopup-_msgs');
}
