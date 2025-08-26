import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class EditSuspensePaymentPopup {
	editSuspensePaymentPopupEditSuspensePaymentPopup_UpLink = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentPopup_UpLink');
	editSuspensePaymentScreenCancel = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-Cancel');
	editSuspensePaymentScreenEdit = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-Edit');
	editSuspensePaymentDVAccountChoice_Choice = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-AccountChoice_Choice');
	editSuspensePaymentPopupEditSuspensePaymentScreenEditSuspensePaymentDVAccountNumberAccountPicker = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-AccountNumber-AccountPicker');
	editSuspensePaymentDVAmount = PcfTextInput('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-Amount');
	editSuspensePaymentDVDescription = PcfTextInput('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-Description');
	editSuspensePaymentDVPolicyChoice_Choice = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-PolicyChoice_Choice');
	editSuspensePaymentPopupEditSuspensePaymentScreenEditSuspensePaymentDVPolicyNumberPolicyPicker = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-PolicyNumber-PolicyPicker');
	editSuspensePaymentDVProducerChoice_Choice = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-ProducerChoice_Choice');
	editSuspensePaymentPopupEditSuspensePaymentScreenEditSuspensePaymentDVProducerNameProducerPicker = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-EditSuspensePaymentDV-ProducerName-ProducerPicker');
	editSuspensePaymentScreenSuspensePaymentTransactionsLV = PcfListView('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-SuspensePaymentTransactionsLV');
	editSuspensePaymentScreenUpdate = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-Update');
	editSuspensePaymentScreen_msgs = PcfButton('#EditSuspensePaymentPopup-EditSuspensePaymentScreen-_msgs');
	editSuspensePaymentPopup_Paging = PcfButton('#EditSuspensePaymentPopup-_Paging');
	editSuspensePaymentPopup__crumb__ = PcfComponent('#EditSuspensePaymentPopup-__crumb__');
}
