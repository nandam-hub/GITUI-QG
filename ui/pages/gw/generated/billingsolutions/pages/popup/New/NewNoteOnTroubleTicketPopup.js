import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewNoteOnTroubleTicketPopup {
	newNoteOnTroubleTicketPopupNewNoteOnTroubleTicketPopup_UpLink = PcfButton('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketPopup_UpLink');
	newNoteOnTroubleTicketScreenCancel = PcfButton('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-Cancel');
	newNoteOnTroubleTicketScreenEdit = PcfButton('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-Edit');
	newNoteDVAuthor = PcfTextInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-Author');
	newNoteDVAuthoringDate = PcfDateValueInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-AuthoringDate');
	newNoteDVConfidential = PcfSelectInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-Confidential');
	newNoteDVLanguage = PcfSelectInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-Language');
	newNoteDVRelatedTo = PcfSelectInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-RelatedTo');
	newNoteDVSubject = PcfTextInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-Subject');
	newNoteDVText = PcfTextInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-Text');
	newNoteDVTopic = PcfSelectInput('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-NewNoteDV-Topic');
	newNoteOnTroubleTicketScreenUpdate = PcfButton('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-Update');
	newNoteOnTroubleTicketScreen_msgs = PcfButton('#NewNoteOnTroubleTicketPopup-NewNoteOnTroubleTicketScreen-_msgs');
	newNoteOnTroubleTicketPopup_Paging = PcfButton('#NewNoteOnTroubleTicketPopup-_Paging');
	newNoteOnTroubleTicketPopup__crumb__ = PcfComponent('#NewNoteOnTroubleTicketPopup-__crumb__');
}
