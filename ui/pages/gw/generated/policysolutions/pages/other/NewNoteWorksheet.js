import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewNoteWorksheet {
	newNoteWorksheetNewNoteScreenNewNoteDVRelatedTo = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-RelatedTo');
	newNoteWorksheetNewNoteScreenNewNoteDVSecurityLevel = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-SecurityLevel');
	newNoteWorksheetNewNoteScreenNewNoteDVSubject = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Subject');
	newNoteWorksheetNewNoteScreenNewNoteDVText = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Text');
	newNoteWorksheetNewNoteScreenNewNoteDVTopic = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Topic');
	newNoteWorksheetNewNoteScreenNewNoteScreen_CancelButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteScreen_CancelButton');
	newNoteWorksheetNewNoteScreenNewNoteScreen_UpdateButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteScreen_UpdateButton');
	newNoteWorksheetNewNoteScreenNewNoteWorksheet_UseTemplateButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteWorksheet_UseTemplateButton');
	newNoteWorksheetNewNoteScreen_msgs = PcfButton('#NewNoteWorksheet-NewNoteScreen-_msgs');
	newNoteWorksheetNewNoteWorksheet_UpLink = PcfButton('#NewNoteWorksheet-NewNoteWorksheet_UpLink');
	newNoteWorksheet_Paging = PcfButton('#NewNoteWorksheet-_Paging');
	newNoteWorksheet__crumb__ = PcfComponent('#NewNoteWorksheet-__crumb__');
	wsTabBarwsTab = PcfButton('#wsTabBar-wsTab');
}
