import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ConsistencyChecksChangeNumOfWorkersPopup {
	consistencyChecksChangeNumOfWorkersPopupActualNumThreads = PcfTextInput('#ConsistencyChecksChangeNumOfWorkersPopup-ActualNumThreads');
	consistencyChecksChangeNumOfWorkersPopupApplyButton = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-ApplyButton');
	consistencyChecksChangeNumOfWorkersPopupConsistencyChecksChangeNumOfWorkersPopup_UpLink = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-ConsistencyChecksChangeNumOfWorkersPopup_UpLink');
	consistencyChecksChangeNumOfWorkersPopupDesiredNumThreads = PcfTextInput('#ConsistencyChecksChangeNumOfWorkersPopup-DesiredNumThreads');
	consistencyChecksChangeNumOfWorkersPopupExecutorsLV = PcfListView('#ConsistencyChecksChangeNumOfWorkersPopup-ExecutorsLV');
	consistencyChecksChangeNumOfWorkersPopupOneServerAlert = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-OneServerAlert');
	consistencyChecksChangeNumOfWorkersPopupOneServerAlertCloseBtn = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-OneServerAlert-CloseBtn');
	consistencyChecksChangeNumOfWorkersPopupRefreshButton = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-RefreshButton');
	consistencyChecksChangeNumOfWorkersPopup_Paging = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-_Paging');
	consistencyChecksChangeNumOfWorkersPopup__crumb__ = PcfComponent('#ConsistencyChecksChangeNumOfWorkersPopup-__crumb__');
	consistencyChecksChangeNumOfWorkersPopup_msgs = PcfButton('#ConsistencyChecksChangeNumOfWorkersPopup-_msgs');
}
