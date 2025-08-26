import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { OrganizationBranchSearchPopup } from '../../../../../../pages/gw/generated/policysolutions/pages/popup/Organization/OrganizationBranchSearchPopup'

export class OrganizationBranchSearchPopup_Ext extends OrganizationBranchSearchPopup {
	organization_ProducerCode = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode')
	organizationTextBox = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer');
}
