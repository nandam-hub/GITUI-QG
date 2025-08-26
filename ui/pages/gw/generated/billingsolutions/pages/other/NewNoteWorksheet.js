import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewNoteWorksheet {
	newNoteWorksheetNewNoteScreenNewNoteDVAuthor = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Author');
	newNoteWorksheetNewNoteScreenNewNoteDVAuthoringDate = PcfDateValueInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-AuthoringDate');
	newNoteWorksheetNewNoteScreenNewNoteDVConfidential = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Confidential');
	newNoteWorksheetNewNoteScreenNewNoteDVLanguage = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Language');
	newNoteWorksheetNewNoteScreenNewNoteDVRelatedTo = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-RelatedTo');
	newNoteWorksheetNewNoteScreenNewNoteDVSubject = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Subject');
	newNoteWorksheetNewNoteScreenNewNoteDVText = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Text');
	newNoteWorksheetNewNoteScreenNewNoteDVTopic = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NewNoteDV-Topic');
	newNoteScreenNewNoteScreen_CancelButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteScreen_CancelButton');
	newNoteScreenNewNoteScreen_UpdateButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteScreen_UpdateButton');
	newNoteScreenNewNoteWorksheet_UseTemplateButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteWorksheet_UseTemplateButton');
	newNoteScreen_msgs = PcfButton('#NewNoteWorksheet-NewNoteScreen-_msgs');
	newNoteWorksheetNewNoteWorksheet_UpLink = PcfButton('#NewNoteWorksheet-NewNoteWorksheet_UpLink');
	newNoteWorksheet_Paging = PcfButton('#NewNoteWorksheet-_Paging');
	newNoteWorksheet__crumb__ = PcfComponent('#NewNoteWorksheet-__crumb__');
	wsTabBarwsTab = PcfButton('#wsTabBar-wsTab');
}
