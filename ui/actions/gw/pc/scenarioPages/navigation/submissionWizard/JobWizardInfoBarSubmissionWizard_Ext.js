import { PcfComponent } from '@gtui/gt-ui-framework';
import { JobWizardInfoBarSubmissionWizard } from "../../../../../../pages/gw/generated/policysolutions/pages/navigation/submissionWizard/JobWizardInfoBarSubmissionWizard"

export class JobWizardInfoBarSubmissionWizard_Ext extends JobWizardInfoBarSubmissionWizard{
	jobWizardInfoBar_PolicyNumber = PcfComponent('#JobComplete-JobWizardInfoBar-PolicyNumber div:nth-child(2)')
	jobWizardInfoBar_IssueStatus= PcfComponent('#JobComplete-JobCompleteScreen-ttlBar > div.gw-TitleBar--titles--container > div')
	jobWizardInfoBar_Viewsubmission = PcfComponent('#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob > div > div > div.gw-action')
}
