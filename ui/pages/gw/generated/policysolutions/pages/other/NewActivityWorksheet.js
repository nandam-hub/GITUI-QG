import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewActivityWorksheet {
	newActivityWorksheetNewActivityScreenActivityDetailNoteDVNoteSubject = PcfTextInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-NoteSubject');
	newActivityWorksheetNewActivityScreenActivityDetailNoteDVRelatedTo = PcfSelectInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-RelatedTo');
	newActivityWorksheetNewActivityScreenActivityDetailNoteDVSecurityLevel = PcfSelectInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-SecurityLevel');
	newActivityWorksheetNewActivityScreenActivityDetailNoteDVText = PcfTextInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-Text');
	newActivityWorksheetNewActivityScreenActivityDetailNoteDVTopic = PcfSelectInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-Topic');
	newActivityWorksheetNewActivityScreenNewActivityDVDescription = PcfTextInput('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Description');
	newActivityWorksheetNewActivityScreenNewActivityDVDocumentTemplateSelectDocumentTemplate = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-DocumentTemplate-SelectDocumentTemplate');
	newActivityWorksheetNewActivityScreenNewActivityDVEmailTemplateSelectEmailTemplate = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-EmailTemplate-SelectEmailTemplate');
	newActivityWorksheetNewActivityScreenNewActivityDVEscalationDate = PcfDateValueInput('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-EscalationDate');
	newActivityWorksheetNewActivityScreenNewActivityDVMandatory = PcfComponent('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory');
	newActivityWorksheetNewActivityScreenNewActivityDVPriority = PcfSelectInput('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Priority');
	newActivityWorksheetNewActivityScreenNewActivityDVRecurring = PcfComponent('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Recurring');
	newActivityWorksheetNewActivityScreenNewActivityDVSelectFromListAssigneePicker = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-SelectFromList-AssigneePicker');
	newActivityWorksheetNewActivityScreenNewActivityDVSubject = PcfTextInput('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Subject');
	newActivityWorksheetNewActivityScreenNewActivityDVTargetDate = PcfDateValueInput('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-TargetDate');
	newActivityScreenNewActivityScreen_CancelButton = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityScreen_CancelButton');
	newActivityScreenNewActivityScreen_UpdateButton = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityScreen_UpdateButton');
	newActivityScreen_msgs = PcfButton('#NewActivityWorksheet-NewActivityScreen-_msgs');
	newActivityWorksheetNewActivityWorksheet_UpLink = PcfButton('#NewActivityWorksheet-NewActivityWorksheet_UpLink');
	newActivityWorksheet_Paging = PcfButton('#NewActivityWorksheet-_Paging');
	newActivityWorksheet__crumb__ = PcfComponent('#NewActivityWorksheet-__crumb__');
	wsTabBarwsTab = PcfButton('#wsTabBar-wsTab');
}
