import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewReserveMultiCurrencyPopup {
	newReserveMultiCurrencyPopupScreenCancel = PcfButton('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-Cancel');
	newReserveMultiCurrencyPopupScreenEdit = PcfButton('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-Edit');
	newReserveMultiCurrencyPopupScreenEditableMultiCurrencyReservesLV = PcfListView('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-EditableMultiCurrencyReservesLV');
	newReserveMultiCurrencyPopupNewReserveMultiCurrencyPopupScreenTransactionEditWrapperExchangeRateInputSetDate = PcfDateValueInput('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-Date');
	newReserveMultiCurrencyPopupNewReserveMultiCurrencyPopupScreenTransactionEditWrapperExchangeRateInputSetDescription = PcfTextInput('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-Description');
	newReserveMultiCurrencyPopupNewReserveMultiCurrencyPopupScreenTransactionEditWrapperExchangeRateInputSetExchangeRate = PcfTextInput('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-ExchangeRate');
	newReserveMultiCurrencyPopupNewReserveMultiCurrencyPopupScreenTransactionEditWrapperExchangeRateInputSetManualOrAutomatic = PcfComponent('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-ManualOrAutomatic');
	newReserveMultiCurrencyPopupScreenUpdate = PcfButton('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-Update');
	newReserveMultiCurrencyPopupScreen_msgs = PcfButton('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopupScreen-_msgs');
	newReserveMultiCurrencyPopupNewReserveMultiCurrencyPopup_UpLink = PcfButton('#NewReserveMultiCurrencyPopup-NewReserveMultiCurrencyPopup_UpLink');
	newReserveMultiCurrencyPopup_Paging = PcfButton('#NewReserveMultiCurrencyPopup-_Paging');
	newReserveMultiCurrencyPopup__crumb__ = PcfComponent('#NewReserveMultiCurrencyPopup-__crumb__');
}
