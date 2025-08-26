import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RenewalWizard_NonRenewPopup {
	renewalWizard_NonRenewPopupRenewalWizard_NonRenewPopup_UpLink = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewPopup_UpLink');
	renewalWizard_NonRenewScreenCancel = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-Cancel');
	renewalWizard_NonRenewScreenEdit = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-Edit');
	renewalWizard_NonRenewScreenNonRenewAddExpl = PcfTextInput('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-NonRenewAddExpl');
	renewalWizard_NonRenewScreenNonRenewReason = PcfSelectInput('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-NonRenewReason');
	renewalWizard_NonRenewScreenSelectedNonRenewalExplanationsLV = PcfListView('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-SelectedNonRenewalExplanationsLV');
	selectedNonRenewalExplanationsLV_tbAdd = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-SelectedNonRenewalExplanationsLV_tb-Add');
	selectedNonRenewalExplanationsLV_tbRemove = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-SelectedNonRenewalExplanationsLV_tb-Remove');
	renewalWizard_NonRenewScreenUpdate = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-Update');
	renewalWizard_NonRenewScreen_msgs = PcfButton('#RenewalWizard_NonRenewPopup-RenewalWizard_NonRenewScreen-_msgs');
	renewalWizard_NonRenewPopup_Paging = PcfButton('#RenewalWizard_NonRenewPopup-_Paging');
	renewalWizard_NonRenewPopup__crumb__ = PcfComponent('#RenewalWizard_NonRenewPopup-__crumb__');
}
