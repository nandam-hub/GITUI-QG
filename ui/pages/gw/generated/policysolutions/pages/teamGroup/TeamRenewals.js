import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TeamRenewals {
	teamRenewalsScreenTeamRenewalsLV = PcfListView('#TeamRenewals-TeamRenewalsScreen-TeamRenewalsLV');
	teamRenewalsLV_tbReassignmentButton = PcfButton('#TeamRenewals-TeamRenewalsScreen-TeamRenewalsLV_tb-ReassignmentButton');
	teamRenewalsScreen_msgs = PcfButton('#TeamRenewals-TeamRenewalsScreen-_msgs');
	teamRenewalsScreenFederatedTeamRenewalsLV = PcfListView('#TeamRenewals-TeamRenewalsScreen-FederatedTeamRenewalsLV');
	federatedTeamRenewalsLV_tbReassignmentButton = PcfButton('#TeamRenewals-TeamRenewalsScreen-FederatedTeamRenewalsLV_tb-ReassignmentButton');
	teamRenewalsTeamRenewals_UpLink = PcfButton('#TeamRenewals-TeamRenewals_UpLink');
	teamRenewals_Paging = PcfButton('#TeamRenewals-_Paging');
	teamRenewals__crumb__ = PcfComponent('#TeamRenewals-__crumb__');
}
