import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewChargeReversalConfirmationPopup {
	newChargeReversalConfirmationPopupApprovalActivityAlertBar = PcfButton('#NewChargeReversalConfirmationPopup-ApprovalActivityAlertBar');
	newChargeReversalConfirmationPopupApprovalActivityAlertBarCloseBtn = PcfButton('#NewChargeReversalConfirmationPopup-ApprovalActivityAlertBar-CloseBtn');
	approvalActivityDVAssignedTo = PcfTextInput('#NewChargeReversalConfirmationPopup-ApprovalActivityDV-AssignedTo');
	approvalActivityDVDescription = PcfTextInput('#NewChargeReversalConfirmationPopup-ApprovalActivityDV-Description');
	approvalActivityDVEscalationDate = PcfDateValueInput('#NewChargeReversalConfirmationPopup-ApprovalActivityDV-EscalationDate');
	approvalActivityDVPriority = PcfSelectInput('#NewChargeReversalConfirmationPopup-ApprovalActivityDV-Priority');
	approvalActivityDVSubject = PcfTextInput('#NewChargeReversalConfirmationPopup-ApprovalActivityDV-Subject');
	approvalActivityDVTargetDate = PcfDateValueInput('#NewChargeReversalConfirmationPopup-ApprovalActivityDV-TargetDate');
	newChargeReversalConfirmationPopupCancel = PcfButton('#NewChargeReversalConfirmationPopup-Cancel');
	newChargeReversalConfirmationPopupEdit = PcfButton('#NewChargeReversalConfirmationPopup-Edit');
	newChargeReversalConfirmationDVDescription = PcfTextInput('#NewChargeReversalConfirmationPopup-NewChargeReversalConfirmationDV-Description');
	newChargeReversalConfirmationDVNewCharge = PcfTextInput('#NewChargeReversalConfirmationPopup-NewChargeReversalConfirmationDV-NewCharge');
	newChargeReversalConfirmationDVReason = PcfSelectInput('#NewChargeReversalConfirmationPopup-NewChargeReversalConfirmationDV-Reason');
	newChargeReversalConfirmationDVTransactionDate = PcfDateValueInput('#NewChargeReversalConfirmationPopup-NewChargeReversalConfirmationDV-TransactionDate');
	newChargeReversalConfirmationDVTransactionLineItemsLV = PcfListView('#NewChargeReversalConfirmationPopup-NewChargeReversalConfirmationDV-TransactionLineItemsLV');
	newChargeReversalConfirmationPopupNewChargeReversalConfirmationPopup_UpLink = PcfButton('#NewChargeReversalConfirmationPopup-NewChargeReversalConfirmationPopup_UpLink');
	newChargeReversalConfirmationPopupUpdate = PcfButton('#NewChargeReversalConfirmationPopup-Update');
	newChargeReversalConfirmationPopup_Paging = PcfButton('#NewChargeReversalConfirmationPopup-_Paging');
	newChargeReversalConfirmationPopup__crumb__ = PcfComponent('#NewChargeReversalConfirmationPopup-__crumb__');
	newChargeReversalConfirmationPopup_msgs = PcfButton('#NewChargeReversalConfirmationPopup-_msgs');
}
