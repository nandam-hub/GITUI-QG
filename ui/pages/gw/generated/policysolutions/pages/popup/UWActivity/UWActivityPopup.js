import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class UWActivityPopup {
	activityDetailNoteDVNoteSubject = PcfTextInput('#UWActivityPopup-ActivityDetailNoteDV-NoteSubject');
	activityDetailNoteDVRelatedTo = PcfSelectInput('#UWActivityPopup-ActivityDetailNoteDV-RelatedTo');
	activityDetailNoteDVSecurityLevel = PcfSelectInput('#UWActivityPopup-ActivityDetailNoteDV-SecurityLevel');
	activityDetailNoteDVText = PcfTextInput('#UWActivityPopup-ActivityDetailNoteDV-Text');
	activityDetailNoteDVTopic = PcfSelectInput('#UWActivityPopup-ActivityDetailNoteDV-Topic');
	uWActivityPopupCancel = PcfButton('#UWActivityPopup-Cancel');
	uWActivityPopupEdit = PcfButton('#UWActivityPopup-Edit');
	newActivityDVDescription = PcfTextInput('#UWActivityPopup-NewActivityDV-Description');
	documentTemplateSelectDocumentTemplate = PcfButton('#UWActivityPopup-NewActivityDV-DocumentTemplate-SelectDocumentTemplate');
	emailTemplateSelectEmailTemplate = PcfButton('#UWActivityPopup-NewActivityDV-EmailTemplate-SelectEmailTemplate');
	newActivityDVEscalationDate = PcfDateValueInput('#UWActivityPopup-NewActivityDV-EscalationDate');
	newActivityDVMandatory = PcfComponent('#UWActivityPopup-NewActivityDV-Mandatory');
	newActivityDVPriority = PcfSelectInput('#UWActivityPopup-NewActivityDV-Priority');
	newActivityDVRecurring = PcfComponent('#UWActivityPopup-NewActivityDV-Recurring');
	selectFromListAssigneePicker = PcfButton('#UWActivityPopup-NewActivityDV-SelectFromList-AssigneePicker');
	newActivityDVSubject = PcfTextInput('#UWActivityPopup-NewActivityDV-Subject');
	newActivityDVTargetDate = PcfDateValueInput('#UWActivityPopup-NewActivityDV-TargetDate');
	uWActivityPopupUWActivityPopup_UpLink = PcfButton('#UWActivityPopup-UWActivityPopup_UpLink');
	uWActivityPopupUpdate = PcfButton('#UWActivityPopup-Update');
	uWActivityPopup_Paging = PcfButton('#UWActivityPopup-_Paging');
	uWActivityPopup__crumb__ = PcfComponent('#UWActivityPopup-__crumb__');
	uWActivityPopup_msgs = PcfButton('#UWActivityPopup-_msgs');
}
