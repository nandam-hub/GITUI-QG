import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyMultiPaymentSplitConfirmationPopup {
	agencyMultiPaymentSplitConfirmationPopupAgencyMultiPaymentSplitConfirmationPopup_UpLink = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyMultiPaymentSplitConfirmationPopup_UpLink');
	agencyPaymentSplitConfirmationScreenAgencyPaymentSplitLV = PcfListView('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-AgencyPaymentSplitLV');
	agencyPaymentSplitLV_tbAdd = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-AgencyPaymentSplitLV_tb-Add');
	agencyPaymentSplitLV_tbRemove = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-AgencyPaymentSplitLV_tb-Remove');
	agencyPaymentSplitConfirmationScreenCancel = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-Cancel');
	agencyPaymentSplitConfirmationScreenEdit = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-Edit');
	agencyPaymentSplitConfirmationScreenMessageAlertBar = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-MessageAlertBar');
	messageAlertBarCloseBtn = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-MessageAlertBar-CloseBtn');
	paymentDetailsDVAmount = PcfTextInput('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-PaymentDetailsDV-Amount');
	paymentDetailsDVCheckRef = PcfTextInput('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-PaymentDetailsDV-CheckRef');
	agencyPaymentSplitConfirmationScreenUpdate = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-Update');
	agencyPaymentSplitConfirmationScreen_msgs = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-AgencyPaymentSplitConfirmationScreen-_msgs');
	agencyMultiPaymentSplitConfirmationPopup_Paging = PcfButton('#AgencyMultiPaymentSplitConfirmationPopup-_Paging');
	agencyMultiPaymentSplitConfirmationPopup__crumb__ = PcfComponent('#AgencyMultiPaymentSplitConfirmationPopup-__crumb__');
}
