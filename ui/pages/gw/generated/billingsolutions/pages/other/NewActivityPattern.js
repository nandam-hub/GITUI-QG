import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewActivityPattern {
	activityPatternDVCategory = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Category');
	activityPatternDVCode = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Code');
	activityPatternDVDescription = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Description');
	newActivityPatternActivityPatternDetailScreenActivityPatternDVDocumentTemplateSelectDocumentTemplate = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-DocumentTemplate-SelectDocumentTemplate');
	newActivityPatternActivityPatternDetailScreenActivityPatternDVEmailTemplateSelectEmailTemplate = PcfButton('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-EmailTemplate-SelectEmailTemplate');
	activityPatternDVEscalationDays = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-EscalationDays');
	activityPatternDVEscalationHours = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-EscalationHours');
	activityPatternDVEscalationIncludeDays = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-EscalationIncludeDays');
	activityPatternDVEscalationStartPoint = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-EscalationStartPoint');
	activityPatternDVMandatory = PcfComponent('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Mandatory');
	activityPatternDVPriority = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Priority');
	activityPatternDVShortSubject = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-ShortSubject');
	activityPatternDVSubject = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Subject');
	activityPatternDVTargetDays = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-TargetDays');
	activityPatternDVTargetHours = PcfTextInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-TargetHours');
	activityPatternDVTargetIncludeDays = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-TargetIncludeDays');
	activityPatternDVTargetStartPoint = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-TargetStartPoint');
	activityPatternDVType = PcfSelectInput('#NewActivityPattern-ActivityPatternDetailScreen-ActivityPatternDV-Type');
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
