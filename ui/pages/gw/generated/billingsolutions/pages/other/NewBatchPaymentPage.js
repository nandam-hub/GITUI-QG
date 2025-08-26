import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewBatchPaymentPage {
	batchInfoDVBatchAmount = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-BatchAmount');
	batchInfoDVBatchNumber = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-BatchNumber');
	batchInfoDVBatchStatus = PcfSelectInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-BatchStatus');
	batchInfoDVCreated = PcfDateValueInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-Created');
	batchInfoDVCreatedBy = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-CreatedBy');
	batchInfoDVLastEdited = PcfDateValueInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-LastEdited');
	batchInfoDVLastEditedBy = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-LastEditedBy');
	batchInfoDVPostedBy = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-PostedBy');
	batchInfoDVPostedDate = PcfDateValueInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-PostedDate');
	batchInfoDVRemainingAmount = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-RemainingAmount');
	batchInfoDVReversalDate = PcfDateValueInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-ReversalDate');
	batchInfoDVReversedBy = PcfTextInput('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchInfoRef-BatchInfoDV-ReversedBy');
	batchPaymentEntriesRefBatchPaymentEntriesLV = PcfListView('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchPaymentEntriesRef-BatchPaymentEntriesLV');
	batchPaymentEntriesLV_tbAddBatchEntry = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchPaymentEntriesRef-BatchPaymentEntriesLV_tb-AddBatchEntry');
	batchPaymentEntriesLV_tbRemoveBatchEntry = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-BatchPaymentEntriesRef-BatchPaymentEntriesLV_tb-RemoveBatchEntry');
	batchPaymentDetailsScreenCancel = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-Cancel');
	batchPaymentDetailsScreenDoesNotIncludeActionsTakenAfterPostingWarning = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-DoesNotIncludeActionsTakenAfterPostingWarning');
	doesNotIncludeActionsTakenAfterPostingWarningCloseBtn = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-DoesNotIncludeActionsTakenAfterPostingWarning-CloseBtn');
	batchPaymentDetailsScreenEdit = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-Edit');
	batchPaymentDetailsScreenEmptyBatchWarning = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-EmptyBatchWarning');
	emptyBatchWarningCloseBtn = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-EmptyBatchWarning-CloseBtn');
	batchPaymentDetailsScreenPostBatchButton = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-PostBatchButton');
	batchPaymentDetailsScreenReverseBatchButton = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-ReverseBatchButton');
	batchPaymentDetailsScreenSuspensePaymentsDisbursedWarning = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-SuspensePaymentsDisbursedWarning');
	suspensePaymentsDisbursedWarningCloseBtn = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-SuspensePaymentsDisbursedWarning-CloseBtn');
	batchPaymentDetailsScreenUpdate = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-Update');
	batchPaymentDetailsScreen_msgs = PcfButton('#NewBatchPaymentPage-BatchPaymentDetailsScreen-_msgs');
	newBatchPaymentPageNewBatchPaymentPage_UpLink = PcfButton('#NewBatchPaymentPage-NewBatchPaymentPage_UpLink');
	newBatchPaymentPage_Paging = PcfButton('#NewBatchPaymentPage-_Paging');
	newBatchPaymentPage__crumb__ = PcfComponent('#NewBatchPaymentPage-__crumb__');
}
