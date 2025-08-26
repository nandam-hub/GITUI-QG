import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewAccountNoteWorksheet {
	newAccountNoteWorksheetNewAccountNoteWorksheet_UpLink = PcfButton('#NewAccountNoteWorksheet-NewAccountNoteWorksheet_UpLink');
	newNoteDVRelatedTo = PcfSelectInput('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-RelatedTo');
	newNoteDVSecurityLevel = PcfSelectInput('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-SecurityLevel');
	newNoteDVSubject = PcfTextInput('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-Subject');
	newNoteDVText = PcfTextInput('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-Text');
	newNoteDVTopic = PcfSelectInput('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-Topic');
	newNoteScreenNewNoteScreen_CancelButton = PcfButton('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteScreen_CancelButton');
	newNoteScreenNewNoteScreen_UpdateButton = PcfButton('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteScreen_UpdateButton');
	newNoteScreenNewNoteWorksheet_UseTemplateButton = PcfButton('#NewAccountNoteWorksheet-NewNoteScreen-NewNoteWorksheet_UseTemplateButton');
	newNoteScreen_msgs = PcfButton('#NewAccountNoteWorksheet-NewNoteScreen-_msgs');
	newAccountNoteWorksheet_Paging = PcfButton('#NewAccountNoteWorksheet-_Paging');
	newAccountNoteWorksheet__crumb__ = PcfComponent('#NewAccountNoteWorksheet-__crumb__');
	wsTabBarwsTab = PcfButton('#wsTabBar-wsTab');
}
