import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewActivityPopup {
	newActivityPopupNewActivityPopup_UpLink = PcfButton('#NewActivityPopup-NewActivityPopup_UpLink');
	activityDetailDV_AssignActivityActivityDetailDV_AssignActivity_PickerButton = PcfButton('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_AssignActivity-ActivityDetailDV_AssignActivity_PickerButton');
	activityDetailDVActivityDetailDV_Description = PcfTextInput('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_Description');
	activityDetailDVActivityDetailDV_EscalationDate = PcfDateValueInput('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_EscalationDate');
	activityDetailDVActivityDetailDV_Priority = PcfSelectInput('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_Priority');
	activityDetailDVActivityDetailDV_Status = PcfSelectInput('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_Status');
	activityDetailDVActivityDetailDV_Subject = PcfTextInput('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_Subject');
	activityDetailDVActivityDetailDV_TargetDate = PcfDateValueInput('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_TargetDate');
	documentTemplateSelectDocumentTemplate = PcfButton('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-DocumentTemplate-SelectDocumentTemplate');
	emailTemplateSelectEmailTemplate = PcfButton('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-EmailTemplate-SelectEmailTemplate');
	activityDetailDVActivityDetailDV_Disbursement = PcfButton('#NewActivityPopup-NewActivityScreen-ActivityDetailDV-ActivityDetailDV_Disbursement');
	newActivityScreenCancel = PcfButton('#NewActivityPopup-NewActivityScreen-Cancel');
	newActivityScreenEdit = PcfButton('#NewActivityPopup-NewActivityScreen-Edit');
	newActivityScreenUpdate = PcfButton('#NewActivityPopup-NewActivityScreen-Update');
	newActivityScreen_msgs = PcfButton('#NewActivityPopup-NewActivityScreen-_msgs');
	newActivityPopup_Paging = PcfButton('#NewActivityPopup-_Paging');
	newActivityPopup__crumb__ = PcfComponent('#NewActivityPopup-__crumb__');
}
