import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class History {
	policyFile_HistoryHistoryScreenDVFromDate = PcfDateValueInput('#PolicyFile_History-HistoryScreenDV-FromDate');
	policyFile_HistoryHistoryScreenDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#PolicyFile_History-HistoryScreenDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	policyFile_HistoryHistoryScreenDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#PolicyFile_History-HistoryScreenDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	policyFile_HistoryHistoryScreenDVToDate = PcfDateValueInput('#PolicyFile_History-HistoryScreenDV-ToDate');
	policyFile_HistoryHistoryScreenDVrelatedto = PcfSelectInput('#PolicyFile_History-HistoryScreenDV-relatedto');
	policyFile_HistoryHistoryScreenDVuserUserBrowseMenuItem = PcfComponent('#PolicyFile_History-HistoryScreenDV-user-UserBrowseMenuItem');
	policyFile_HistoryHistoryScreenResultsLV = PcfListView('#PolicyFile_History-HistoryScreenResultsLV');
	policyFile_HistoryPolicyFile_History_UpLink = PcfButton('#PolicyFile_History-PolicyFile_History_UpLink');
	policyFile_History_Paging = PcfButton('#PolicyFile_History-_Paging');
	policyFile_History__crumb__ = PcfComponent('#PolicyFile_History-__crumb__');
	policyFile_History_msgs = PcfButton('#PolicyFile_History-_msgs');
}
