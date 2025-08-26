import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class OutgoingProducerPaymentReversalConfirmationPopup {
	nSFConfirmationScreenCancel = PcfButton('#OutgoingProducerPaymentReversalConfirmationPopup-NSFConfirmationScreen-Cancel');
	nSFConfirmationScreenEdit = PcfButton('#OutgoingProducerPaymentReversalConfirmationPopup-NSFConfirmationScreen-Edit');
	nSFConfirmationScreenPaidCommissionReversalType = PcfSelectInput('#OutgoingProducerPaymentReversalConfirmationPopup-NSFConfirmationScreen-PaidCommissionReversalType');
	nSFConfirmationScreenReason = PcfSelectInput('#OutgoingProducerPaymentReversalConfirmationPopup-NSFConfirmationScreen-Reason');
	nSFConfirmationScreenUpdate = PcfButton('#OutgoingProducerPaymentReversalConfirmationPopup-NSFConfirmationScreen-Update');
	nSFConfirmationScreen_msgs = PcfButton('#OutgoingProducerPaymentReversalConfirmationPopup-NSFConfirmationScreen-_msgs');
	outgoingProducerPaymentReversalConfirmationPopupOutgoingProducerPaymentReversalConfirmationPopup_UpLink = PcfButton('#OutgoingProducerPaymentReversalConfirmationPopup-OutgoingProducerPaymentReversalConfirmationPopup_UpLink');
	outgoingProducerPaymentReversalConfirmationPopup_Paging = PcfButton('#OutgoingProducerPaymentReversalConfirmationPopup-_Paging');
	outgoingProducerPaymentReversalConfirmationPopup__crumb__ = PcfComponent('#OutgoingProducerPaymentReversalConfirmationPopup-__crumb__');
}
