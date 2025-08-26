import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AddReviseQuotePopup {
	addReviseQuotePopupAddReviseQuotePopup_UpLink = PcfButton('#AddReviseQuotePopup-AddReviseQuotePopup_UpLink');
	addReviseQuotePopupCancel = PcfButton('#AddReviseQuotePopup-Cancel');
	addReviseQuotePopupEdit = PcfButton('#AddReviseQuotePopup-Edit');
	addReviseQuotePopupIDCSDisabledAlert = PcfButton('#AddReviseQuotePopup-IDCSDisabledAlert');
	addReviseQuotePopupIDCSDisabledAlertCloseBtn = PcfButton('#AddReviseQuotePopup-IDCSDisabledAlert-CloseBtn');
	addReviseQuotePopupIDCSUnavailableAlert = PcfButton('#AddReviseQuotePopup-IDCSUnavailableAlert');
	addReviseQuotePopupIDCSUnavailableAlertCloseBtn = PcfButton('#AddReviseQuotePopup-IDCSUnavailableAlert-CloseBtn');
	addReviseQuotePopupIDMSUnavailableAlert = PcfButton('#AddReviseQuotePopup-IDMSUnavailableAlert');
	addReviseQuotePopupIDMSUnavailableAlertCloseBtn = PcfButton('#AddReviseQuotePopup-IDMSUnavailableAlert-CloseBtn');
	addReviseQuotePopupStatementDVDescription = PcfTextInput('#AddReviseQuotePopup-StatementDV-Description');
	addReviseQuotePopupStatementDVInvoiceStatus = PcfSelectInput('#AddReviseQuotePopup-StatementDV-InvoiceStatus');
	addReviseQuotePopupStatementDVReferenceNumber = PcfTextInput('#AddReviseQuotePopup-StatementDV-ReferenceNumber');
	addReviseQuotePopupStatementDVStatementLineItemLV = PcfListView('#AddReviseQuotePopup-StatementDV-StatementLineItemLV');
	addReviseQuotePopupStatementDVStatementLineItemLV_tbAdd = PcfButton('#AddReviseQuotePopup-StatementDV-StatementLineItemLV_tb-Add');
	addReviseQuotePopupStatementDVStatementLineItemLV_tbRemove = PcfButton('#AddReviseQuotePopup-StatementDV-StatementLineItemLV_tb-Remove');
	addReviseQuotePopupStatementDVApprovalDate = PcfDateValueInput('#AddReviseQuotePopup-StatementDV-ApprovalDate');
	addReviseQuotePopupStatementDVApprovedByApprovedByUserSearchMenuItem = PcfComponent('#AddReviseQuotePopup-StatementDV-ApprovedBy-ApprovedByUserSearchMenuItem');
	addReviseQuotePopupStatementDVApprovedByApprovedByUserSelectMenuItem = PcfComponent('#AddReviseQuotePopup-StatementDV-ApprovedBy-ApprovedByUserSelectMenuItem');
	addReviseQuotePopupStatementDVCreationDate = PcfDateValueInput('#AddReviseQuotePopup-StatementDV-CreationDate');
	addReviseQuotePopupStatementDVDaysToPerformService = PcfTextInput('#AddReviseQuotePopup-StatementDV-DaysToPerformService');
	addReviseQuotePopupStatementDVNoQuotesMessage = PcfTextInput('#AddReviseQuotePopup-StatementDV-NoQuotesMessage');
	addReviseQuotePopupStatementDVquoteTotal = PcfTextInput('#AddReviseQuotePopup-StatementDV-quoteTotal');
	addReviseQuotePopupStatementDVPreviousTotal = PcfTextInput('#AddReviseQuotePopup-StatementDV-PreviousTotal');
	addReviseQuotePopupStatementDocumentsLV = PcfListView('#AddReviseQuotePopup-StatementDocumentsLV');
	statementDocumentsLV_tbAttachDocument = PcfButton('#AddReviseQuotePopup-StatementDocumentsLV_tb-AttachDocument');
	statementDocumentsLV_tbLink = PcfButton('#AddReviseQuotePopup-StatementDocumentsLV_tb-Link');
	addReviseQuotePopupUpdate = PcfButton('#AddReviseQuotePopup-Update');
	addReviseQuotePopup_Paging = PcfButton('#AddReviseQuotePopup-_Paging');
	addReviseQuotePopup__crumb__ = PcfComponent('#AddReviseQuotePopup-__crumb__');
	addReviseQuotePopup_msgs = PcfButton('#AddReviseQuotePopup-_msgs');
}
