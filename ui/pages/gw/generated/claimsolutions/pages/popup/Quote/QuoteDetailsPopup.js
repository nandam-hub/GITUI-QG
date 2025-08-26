import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class QuoteDetailsPopup {
	quoteDetailsPopupApproveQuote = PcfButton('#QuoteDetailsPopup-ApproveQuote');
	quoteDetailsPopupQuoteDetailsPopup_UpLink = PcfButton('#QuoteDetailsPopup-QuoteDetailsPopup_UpLink');
	quoteDetailsPopupRequestRequote = PcfButton('#QuoteDetailsPopup-RequestRequote');
	quoteDetailsPopupReviseQuote = PcfButton('#QuoteDetailsPopup-ReviseQuote');
	quoteDetailsPopupStatementDVDescription = PcfTextInput('#QuoteDetailsPopup-StatementDV-Description');
	quoteDetailsPopupStatementDVInvoiceStatus = PcfSelectInput('#QuoteDetailsPopup-StatementDV-InvoiceStatus');
	quoteDetailsPopupStatementDVReferenceNumber = PcfTextInput('#QuoteDetailsPopup-StatementDV-ReferenceNumber');
	quoteDetailsPopupStatementDVStatementLineItemLV = PcfListView('#QuoteDetailsPopup-StatementDV-StatementLineItemLV');
	quoteDetailsPopupStatementDVStatementLineItemLV_tbAdd = PcfButton('#QuoteDetailsPopup-StatementDV-StatementLineItemLV_tb-Add');
	quoteDetailsPopupStatementDVStatementLineItemLV_tbRemove = PcfButton('#QuoteDetailsPopup-StatementDV-StatementLineItemLV_tb-Remove');
	quoteDetailsPopupStatementDVApprovalDate = PcfDateValueInput('#QuoteDetailsPopup-StatementDV-ApprovalDate');
	quoteDetailsPopupStatementDVApprovedByApprovedByUserSearchMenuItem = PcfComponent('#QuoteDetailsPopup-StatementDV-ApprovedBy-ApprovedByUserSearchMenuItem');
	quoteDetailsPopupStatementDVApprovedByApprovedByUserSelectMenuItem = PcfComponent('#QuoteDetailsPopup-StatementDV-ApprovedBy-ApprovedByUserSelectMenuItem');
	quoteDetailsPopupStatementDVCreationDate = PcfDateValueInput('#QuoteDetailsPopup-StatementDV-CreationDate');
	quoteDetailsPopupStatementDVDaysToPerformService = PcfTextInput('#QuoteDetailsPopup-StatementDV-DaysToPerformService');
	quoteDetailsPopupStatementDVNoQuotesMessage = PcfTextInput('#QuoteDetailsPopup-StatementDV-NoQuotesMessage');
	quoteDetailsPopupStatementDVquoteTotal = PcfTextInput('#QuoteDetailsPopup-StatementDV-quoteTotal');
	quoteDetailsPopupStatementDVPreviousTotal = PcfTextInput('#QuoteDetailsPopup-StatementDV-PreviousTotal');
	quoteDetailsPopupStatementDocumentsLV = PcfListView('#QuoteDetailsPopup-StatementDocumentsLV');
	quoteDetailsPopup_Paging = PcfButton('#QuoteDetailsPopup-_Paging');
	quoteDetailsPopup__crumb__ = PcfComponent('#QuoteDetailsPopup-__crumb__');
	quoteDetailsPopup_msgs = PcfButton('#QuoteDetailsPopup-_msgs');
}
