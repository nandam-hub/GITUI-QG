import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MessageSearch {
	messageSearchScreenMessageResultsLV = PcfListView('#MessageSearch-MessageSearchScreen-MessageResultsLV');
	messageResultsLV_tbRetryButton = PcfButton('#MessageSearch-MessageSearchScreen-MessageResultsLV_tb-RetryButton');
	messageResultsLV_tbSkipButton = PcfButton('#MessageSearch-MessageSearchScreen-MessageResultsLV_tb-SkipButton');
	messageSearchDVAccountNumber = PcfTextInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-AccountNumber');
	messageSearchDVDestination = PcfSelectInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-Destination');
	messageSearchDVJobNumber = PcfTextInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-JobNumber');
	messageSearchDVJobType = PcfSelectInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-JobType');
	messageSearchDVMessageStatus = PcfSelectInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-MessageStatus');
	messageSearchDVPolicyNumber = PcfTextInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-PolicyNumber');
	messageSearchDVProductCode = PcfSelectInput('#MessageSearch-MessageSearchScreen-MessageSearchDV-ProductCode');
	messageSearchMessageSearchScreenMessageSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#MessageSearch-MessageSearchScreen-MessageSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	messageSearchMessageSearchScreenMessageSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#MessageSearch-MessageSearchScreen-MessageSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	messageSearchScreen_msgs = PcfButton('#MessageSearch-MessageSearchScreen-_msgs');
	messageSearchMessageSearch_UpLink = PcfButton('#MessageSearch-MessageSearch_UpLink');
	messageSearch_Paging = PcfButton('#MessageSearch-_Paging');
	messageSearch__crumb__ = PcfComponent('#MessageSearch-__crumb__');
}
