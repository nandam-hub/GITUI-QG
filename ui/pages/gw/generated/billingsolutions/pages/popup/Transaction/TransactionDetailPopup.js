import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TransactionDetailPopup {
	transactionDetailPopupTransactionDetailPopup_UpLink = PcfButton('#TransactionDetailPopup-TransactionDetailPopup_UpLink');
	createUserUserBrowseMenuItem = PcfComponent('#TransactionDetailPopup-TransactionDetailScreen-TransactionDetailDV-CreateUser-UserBrowseMenuItem');
	transactionDetailDVDescription = PcfTextInput('#TransactionDetailPopup-TransactionDetailScreen-TransactionDetailDV-Description');
	transactionDetailDVTransactionDate = PcfDateValueInput('#TransactionDetailPopup-TransactionDetailScreen-TransactionDetailDV-TransactionDate');
	transactionDetailDVTransactionLineItemsLV = PcfListView('#TransactionDetailPopup-TransactionDetailScreen-TransactionDetailDV-TransactionLineItemsLV');
	transactionDetailScreen_msgs = PcfButton('#TransactionDetailPopup-TransactionDetailScreen-_msgs');
	transactionDetailPopup_Paging = PcfButton('#TransactionDetailPopup-_Paging');
	transactionDetailPopup__crumb__ = PcfComponent('#TransactionDetailPopup-__crumb__');
}
