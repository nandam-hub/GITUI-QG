import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimFinancialsChecks {
	claimFinancialsChecksScreenChecksLV = PcfListView('#ClaimFinancialsChecks-ClaimFinancialsChecksScreen-ChecksLV');
	claimFinancialsChecksScreen_msgs = PcfButton('#ClaimFinancialsChecks-ClaimFinancialsChecksScreen-_msgs');
	claimFinancialsChecksClaimFinancialsChecks_UpLink = PcfButton('#ClaimFinancialsChecks-ClaimFinancialsChecks_UpLink');
	claimFinancialsChecks_Paging = PcfButton('#ClaimFinancialsChecks-_Paging');
	claimFinancialsChecks__crumb__ = PcfComponent('#ClaimFinancialsChecks-__crumb__');
}
