import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PickNoteTemplatePopup {
	pickNoteTemplatePopupPickNoteTemplatePopup_UpLink = PcfButton('#PickNoteTemplatePopup-PickNoteTemplatePopup_UpLink');
	noteTemplateSearchDVKeywords = PcfTextInput('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-Keywords');
	noteTemplateSearchDVLanguage = PcfSelectInput('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-Language');
	noteTemplateSearchDVProduct = PcfSelectInput('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-Product');
	pickNoteTemplatePopupPickNoteTemplateScreenNoteTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	pickNoteTemplatePopupPickNoteTemplateScreenNoteTemplateSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	noteTemplateSearchDVTopic = PcfSelectInput('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-Topic');
	noteTemplateSearchDVType = PcfSelectInput('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchDV-Type');
	pickNoteTemplateScreenNoteTemplateSearchResultLV = PcfListView('#PickNoteTemplatePopup-PickNoteTemplateScreen-NoteTemplateSearchResultLV');
	pickNoteTemplateScreenPickNoteTemplatePopup_CancelButton = PcfButton('#PickNoteTemplatePopup-PickNoteTemplateScreen-PickNoteTemplatePopup_CancelButton');
	pickNoteTemplateScreen_msgs = PcfButton('#PickNoteTemplatePopup-PickNoteTemplateScreen-_msgs');
	pickNoteTemplatePopup_Paging = PcfButton('#PickNoteTemplatePopup-_Paging');
	pickNoteTemplatePopup__crumb__ = PcfComponent('#PickNoteTemplatePopup-__crumb__');
}
