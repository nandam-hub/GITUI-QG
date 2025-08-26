import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AdditionalTripSegmentPopup {
	additionalTripSegmentInputSetAgentFees = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-AgentFees');
	additionalTripSegmentInputSetApprove = PcfButton('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-Approve');
	additionalTripSegmentInputSetAssessment = PcfSelectInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-Assessment');
	additionalTripSegmentInputSetCarrierName = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-CarrierName');
	additionalTripSegmentInputSetCarrierNumber = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-CarrierNumber');
	additionalTripSegmentInputSetClear = PcfButton('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-Clear');
	additionalTripSegmentInputSetDeny = PcfButton('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-Deny');
	additionalTripSegmentInputSetEndedOn = PcfDateValueInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-EndedOn');
	additionalTripSegmentInputSetFinancialImpact = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-FinancialImpact');
	additionalTripSegmentInputSetOtherFees = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-OtherFees');
	additionalTripSegmentInputSetPaidAmount = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-PaidAmount');
	additionalTripSegmentInputSetPortOfDisembarkation = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-PortOfDisembarkation');
	additionalTripSegmentInputSetPortOfEmbarkation = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-PortOfEmbarkation');
	additionalTripSegmentInputSetReasonForDenial = PcfTextInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-ReasonForDenial');
	additionalTripSegmentInputSetReview = PcfButton('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-Review');
	additionalTripSegmentInputSetStartedOn = PcfDateValueInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-StartedOn');
	additionalTripSegmentInputSetTransportType = PcfSelectInput('#AdditionalTripSegmentPopup-AdditionalTripSegmentDetailDV-AdditionalTripSegmentInputSet-TransportType');
	additionalTripSegmentPopupAdditionalTripSegmentPopup_UpLink = PcfButton('#AdditionalTripSegmentPopup-AdditionalTripSegmentPopup_UpLink');
	additionalTripSegmentPopupCancel = PcfButton('#AdditionalTripSegmentPopup-Cancel');
	additionalTripSegmentPopupEdit = PcfButton('#AdditionalTripSegmentPopup-Edit');
	additionalTripSegmentPopupUpdate = PcfButton('#AdditionalTripSegmentPopup-Update');
	additionalTripSegmentPopup_Paging = PcfButton('#AdditionalTripSegmentPopup-_Paging');
	additionalTripSegmentPopup__crumb__ = PcfComponent('#AdditionalTripSegmentPopup-__crumb__');
	additionalTripSegmentPopup_msgs = PcfButton('#AdditionalTripSegmentPopup-_msgs');
}
