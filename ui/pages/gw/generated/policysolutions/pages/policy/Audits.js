import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Audits {
	auditInformationScreenAuditsLV = PcfListView('#PolicyFile_Audits-AuditInformationScreen-AuditsLV');
	auditInformationScreenCreateAdHocAudit = PcfButton('#PolicyFile_Audits-AuditInformationScreen-CreateAdHocAudit');
	auditInformationScreen_msgs = PcfButton('#PolicyFile_Audits-AuditInformationScreen-_msgs');
	policyFile_AuditsPolicyFile_Audits_UpLink = PcfButton('#PolicyFile_Audits-PolicyFile_Audits_UpLink');
	policyFile_Audits_Paging = PcfButton('#PolicyFile_Audits-_Paging');
	policyFile_Audits__crumb__ = PcfComponent('#PolicyFile_Audits-__crumb__');
}
