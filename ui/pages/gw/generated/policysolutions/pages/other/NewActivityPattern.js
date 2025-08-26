import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewActivityPattern {
	activityPatternDetailDVActivityClass = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-ActivityClass');
	activityPatternDetailDVAutomatedOnly = PcfComponent('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-AutomatedOnly');
	activityPatternDetailDVCategory = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Category');
	activityPatternDetailDVCode = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Code');
	activityPatternDetailDVDescription = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Description');
	newActivityPatternActivityPatternDetailScreenActivityPatternDetailDVDocumentTemplateSelectDocumentTemplate = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-DocumentTemplate-SelectDocumentTemplate');
	newActivityPatternActivityPatternDetailScreenActivityPatternDetailDVEmailTemplateSelectEmailTemplate = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-EmailTemplate-SelectEmailTemplate');
	activityPatternDetailDVEscalationDays = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-EscalationDays');
	activityPatternDetailDVEscalationHours = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-EscalationHours');
	activityPatternDetailDVEscalationInclDays = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-EscalationInclDays');
	activityPatternDetailDVEscalationStartPt = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-EscalationStartPt');
	activityPatternDetailDVMandatory = PcfComponent('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Mandatory');
	activityPatternDetailDVPatternLevel = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-PatternLevel');
	activityPatternDetailDVPriority = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Priority');
	activityPatternDetailDVRecurring = PcfComponent('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Recurring');
	activityPatternDetailDVShortSubject = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-ShortSubject');
	activityPatternDetailDVSubject = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Subject');
	activityPatternDetailDVTargetDays = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-TargetDays');
	activityPatternDetailDVTargetHours = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-TargetHours');
	activityPatternDetailDVTargetIncludeDays = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-TargetIncludeDays');
	activityPatternDetailDVTargetStartPoint = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-TargetStartPoint');
	activityPatternDetailDVType = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailDV-Type');
	activityPatternDetailScreenActivityPatternDetailScreen_DeleteButton = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDetailScreen_DeleteButton');
	activityPatternDetailScreenCancel = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-Cancel');
	activityPatternDetailScreenEdit = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-Edit');
	newActivityPatternActivityPatternDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewActivityPattern-ActivityPatternDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	activityPatternDetailScreenUpdate = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-Update');
	activityPatternDetailScreen_msgs = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-_msgs');
	newActivityPatternNewActivityPattern_UpLink = PcfButton('#NewActivityPattern-NewActivityPattern_UpLink');
	newActivityPattern_Paging = PcfButton('#NewActivityPattern-_Paging');
	newActivityPattern__crumb__ = PcfComponent('#NewActivityPattern-__crumb__');
}
