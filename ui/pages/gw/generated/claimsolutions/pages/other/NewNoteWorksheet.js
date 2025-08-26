import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewNoteWorksheet {
	newNoteScreenCancel = PcfButton('#NewNoteWorksheet-NewNoteScreen-Cancel');
	newNoteScreenEdit = PcfButton('#NewNoteWorksheet-NewNoteScreen-Edit');
	newNoteScreenNewNoteWorksheet_AddDocumentButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteWorksheet_AddDocumentButton');
	newNoteScreenNewNoteWorksheet_UseTemplateButton = PcfButton('#NewNoteWorksheet-NewNoteScreen-NewNoteWorksheet_UseTemplateButton');
	newNoteWorksheetNewNoteScreenNoteDetailDVBody = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Body');
	newNoteWorksheetNewNoteScreenNoteDetailDVConfidential = PcfComponent('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Confidential');
	newNoteWorksheetNewNoteScreenNoteDetailDVNoteBody = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-NoteBody');
	newNoteWorksheetNewNoteScreenNoteDetailDVRelatedTo = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-RelatedTo');
	newNoteWorksheetNewNoteScreenNoteDetailDVSecurityType = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-SecurityType');
	newNoteWorksheetNewNoteScreenNoteDetailDVSubject = PcfTextInput('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Subject');
	newNoteWorksheetNewNoteScreenNoteDetailDVTopic = PcfSelectInput('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Topic');
	newNoteScreenUpdate = PcfButton('#NewNoteWorksheet-NewNoteScreen-Update');
	newNoteScreen_msgs = PcfButton('#NewNoteWorksheet-NewNoteScreen-_msgs');
	newNoteWorksheetNewNoteWorksheet_UpLink = PcfButton('#NewNoteWorksheet-NewNoteWorksheet_UpLink');
	newNoteWorksheet_Paging = PcfButton('#NewNoteWorksheet-_Paging');
	newNoteWorksheet__crumb__ = PcfComponent('#NewNoteWorksheet-__crumb__');
	wsTabBarwsTab = PcfButton('#wsTabBar-wsTab');
}
