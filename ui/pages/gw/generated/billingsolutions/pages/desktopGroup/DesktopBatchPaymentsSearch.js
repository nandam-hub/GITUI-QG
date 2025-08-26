import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopBatchPaymentsSearch {
	desktopBatchPaymentsLVRefDesktopBatchPaymentsLV = PcfListView('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsLVRef-DesktopBatchPaymentsLV');
	desktopBatchPaymentsLV_tbCreateBatch = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsLVRef-DesktopBatchPaymentsLV_tb-CreateBatch');
	desktopBatchPaymentsLV_tbDelete = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsLVRef-DesktopBatchPaymentsLV_tb-Delete');
	desktopBatchPaymentsLV_tbNewBatchPaymentCurrency = PcfSelectInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsLVRef-DesktopBatchPaymentsLV_tb-NewBatchPaymentCurrency');
	desktopBatchPaymentsLV_tbPost = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsLVRef-DesktopBatchPaymentsLV_tb-Post');
	desktopBatchPaymentsLV_tbReverse = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsLVRef-DesktopBatchPaymentsLV_tb-Reverse');
	desktopBatchPaymentsSearchDVBatchNumber = PcfTextInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-BatchNumber');
	desktopBatchPaymentsSearchDVBatchStatus = PcfSelectInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-BatchStatus');
	createdBySelectCreatedBy = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-CreatedBy-SelectCreatedBy');
	desktopBatchPaymentsSearchDVCurrency = PcfSelectInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-Currency');
	desktopBatchPaymentsSearchDVEarliestPostedDate = PcfDateValueInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-EarliestPostedDate');
	desktopBatchPaymentsSearchDVEarliestReversedDate = PcfDateValueInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-EarliestReversedDate');
	lastEditedBySelectLastEditedBy = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-LastEditedBy-SelectLastEditedBy');
	desktopBatchPaymentsSearchDVLatestPostedDate = PcfDateValueInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-LatestPostedDate');
	desktopBatchPaymentsSearchDVLatestReversedDate = PcfDateValueInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-LatestReversedDate');
	desktopBatchPaymentsSearchDVMaxAmount = PcfTextInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-MaxAmount');
	desktopBatchPaymentsSearchDVMinAmount = PcfTextInput('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-MinAmount');
	postedBySelectPostedBy = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-PostedBy-SelectPostedBy');
	reversedBySelectReversedBy = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-ReversedBy-SelectReversedBy');
	desktopBatchPaymentsSearchDesktopBatchPaymentsScreenDesktopBatchPaymentsSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	desktopBatchPaymentsSearchDesktopBatchPaymentsScreenDesktopBatchPaymentsSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-DesktopBatchPaymentsSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	desktopBatchPaymentsScreen_msgs = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsScreen-_msgs');
	desktopBatchPaymentsSearchDesktopBatchPaymentsSearch_UpLink = PcfButton('#DesktopBatchPaymentsSearch-DesktopBatchPaymentsSearch_UpLink');
	desktopBatchPaymentsSearch_Paging = PcfButton('#DesktopBatchPaymentsSearch-_Paging');
	desktopBatchPaymentsSearch__crumb__ = PcfComponent('#DesktopBatchPaymentsSearch-__crumb__');
}
