import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BPCBatchDetailsPopup {
	bPCBatchDetailCVAccountsBatchLV = PcfListView('#BPCBatchDetailsPopup-BPCBatchDetailCV-AccountsBatchLV');
	bPCRecordDetailCVBatchTitleCardTab = PcfButton('#BPCBatchDetailsPopup-BPCBatchDetailCV-BPCRecordDetailCV-BatchTitleCardTab');
	bPCRecordDetailCVPoliciesBatchLV = PcfListView('#BPCBatchDetailsPopup-BPCBatchDetailCV-BPCRecordDetailCV-PoliciesBatchLV');
	bPCBatchDetailCVBatchTitleCardTab = PcfButton('#BPCBatchDetailsPopup-BPCBatchDetailCV-BatchTitleCardTab');
	bPCBatchDetailsPopupBPCBatchDetailsPopup_UpLink = PcfButton('#BPCBatchDetailsPopup-BPCBatchDetailsPopup_UpLink');
	bPCBatchDetailsPopupCancel = PcfButton('#BPCBatchDetailsPopup-Cancel');
	bPCBatchDetailsPopupEdit = PcfButton('#BPCBatchDetailsPopup-Edit');
	bPCBatchDetailsPopupUpdate = PcfButton('#BPCBatchDetailsPopup-Update');
	bPCBatchDetailsPopup_Paging = PcfButton('#BPCBatchDetailsPopup-_Paging');
	bPCBatchDetailsPopup__crumb__ = PcfComponent('#BPCBatchDetailsPopup-__crumb__');
	bPCBatchDetailsPopup_msgs = PcfButton('#BPCBatchDetailsPopup-_msgs');
}
