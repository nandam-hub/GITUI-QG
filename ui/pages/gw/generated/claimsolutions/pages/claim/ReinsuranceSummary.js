import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ReinsuranceSummary {
	financialsDetailsDVCededReserves = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-CededReserves');
	financialsDetailsDVNetNetOnClaim = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-NetNetOnClaim');
	financialsDetailsDVNetNetReserves = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-NetNetReserves');
	financialsDetailsDVNetPaidOnClaim = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-NetPaidOnClaim');
	financialsDetailsDVOpenReserves = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-OpenReserves');
	financialsDetailsDVTotalIncurred = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-TotalIncurred');
	financialsDetailsDVTotalIncurredWithRI = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-TotalIncurredWithRI');
	financialsDetailsDVTotalRI = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-TotalRI');
	financialsDetailsDVTotalRIRecoverable = PcfTextInput('#ReinsuranceSummary-FinancialsDetailsDV-TotalRIRecoverable');
	reinsuranceSummaryReinsuranceSummaryLV = PcfListView('#ReinsuranceSummary-ReinsuranceSummaryLV');
	reinsuranceSummaryLV_tbAddAgreementButton = PcfButton('#ReinsuranceSummary-ReinsuranceSummaryLV_tb-AddAgreementButton');
	addAgreementButtonAddAgreementMenuItemSet = PcfComponent('#ReinsuranceSummary-ReinsuranceSummaryLV_tb-AddAgreementButton-AddAgreementMenuItemSet');
	addAgreementMenuItemSetFacultativeSubMenu = PcfButton('#ReinsuranceSummary-ReinsuranceSummaryLV_tb-AddAgreementButton-AddAgreementMenuItemSet-FacultativeSubMenu');
	addAgreementMenuItemSetTreatySubMenu = PcfButton('#ReinsuranceSummary-ReinsuranceSummaryLV_tb-AddAgreementButton-AddAgreementMenuItemSet-TreatySubMenu');
	reinsuranceSummaryLV_tbManageExposuresButton = PcfButton('#ReinsuranceSummary-ReinsuranceSummaryLV_tb-ManageExposuresButton');
	reinsuranceSummaryReinsuranceSummary_UpLink = PcfButton('#ReinsuranceSummary-ReinsuranceSummary_UpLink');
	reinsuranceSummary_Paging = PcfButton('#ReinsuranceSummary-_Paging');
	reinsuranceSummary__crumb__ = PcfComponent('#ReinsuranceSummary-__crumb__');
	reinsuranceSummary_msgs = PcfButton('#ReinsuranceSummary-_msgs');
}
