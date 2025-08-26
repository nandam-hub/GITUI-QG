import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EditNotePopup {
	editNotePopupEditNotePopup_UpLink = PcfButton('#EditNotePopup-EditNotePopup_UpLink');
	editNoteScreenCancel = PcfButton('#EditNotePopup-EditNoteScreen-Cancel');
	editNoteScreenEdit = PcfButton('#EditNotePopup-EditNoteScreen-Edit');
	editNoteDVRelatedTo = PcfTextInput('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedTo');
	editNoteDVRelatedToContingencyJob = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedToContingencyJob');
	editNoteDVRelatedToContingencyPolicy = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedToContingencyPolicy');
	editNoteDVRelatedToJobContingency = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedToJobContingency');
	editNoteDVRelatedToJobNumberContingency = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedToJobNumberContingency');
	editNoteDVRelatedToPolicyContingency = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedToPolicyContingency');
	editNoteDVRelatedToPolicyNumberContingency = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-RelatedToPolicyNumberContingency');
	editNoteDVSecurityLevel = PcfSelectInput('#EditNotePopup-EditNoteScreen-EditNoteDV-SecurityLevel');
	editNoteDVSubject = PcfTextInput('#EditNotePopup-EditNoteScreen-EditNoteDV-Subject');
	editNoteDVText = PcfTextInput('#EditNotePopup-EditNoteScreen-EditNoteDV-Text');
	editNoteDVTitleContingencyJob = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-TitleContingencyJob');
	editNoteDVTitleContingencyPolicy = PcfButton('#EditNotePopup-EditNoteScreen-EditNoteDV-TitleContingencyPolicy');
	editNoteDVTopic = PcfSelectInput('#EditNotePopup-EditNoteScreen-EditNoteDV-Topic');
	editNoteScreenUpdate = PcfButton('#EditNotePopup-EditNoteScreen-Update');
	editNoteScreen_msgs = PcfButton('#EditNotePopup-EditNoteScreen-_msgs');
	editNotePopup_Paging = PcfButton('#EditNotePopup-_Paging');
	editNotePopup__crumb__ = PcfComponent('#EditNotePopup-__crumb__');
}
