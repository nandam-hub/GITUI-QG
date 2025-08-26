import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PolicyDetailTroubleTickets {
	policyDetailTroubleTicketsScreenTroubleTicketsLV = PcfListView('#PolicyDetailTroubleTickets-PolicyDetailTroubleTicketsScreen-TroubleTicketsLV');
	troubleTicketsLV_tbAll = PcfButton('#PolicyDetailTroubleTickets-PolicyDetailTroubleTicketsScreen-TroubleTicketsLV_tb-All');
	troubleTicketsLV_tbNewTroubleTicket = PcfButton('#PolicyDetailTroubleTickets-PolicyDetailTroubleTicketsScreen-TroubleTicketsLV_tb-NewTroubleTicket');
	troubleTicketsLV_tbRelatedToPeriodOnly = PcfButton('#PolicyDetailTroubleTickets-PolicyDetailTroubleTicketsScreen-TroubleTicketsLV_tb-RelatedToPeriodOnly');
	troubleTicketsLV_tbRelatedToPolicyOnly = PcfButton('#PolicyDetailTroubleTickets-PolicyDetailTroubleTicketsScreen-TroubleTicketsLV_tb-RelatedToPolicyOnly');
	policyDetailTroubleTicketsScreen_msgs = PcfButton('#PolicyDetailTroubleTickets-PolicyDetailTroubleTicketsScreen-_msgs');
	policyDetailTroubleTicketsPolicyDetailTroubleTickets_UpLink = PcfButton('#PolicyDetailTroubleTickets-PolicyDetailTroubleTickets_UpLink');
	policyDetailTroubleTickets_Paging = PcfButton('#PolicyDetailTroubleTickets-_Paging');
	policyDetailTroubleTickets__crumb__ = PcfComponent('#PolicyDetailTroubleTickets-__crumb__');
}
