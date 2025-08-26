import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewInvoice {
	newInvoiceCancel = PcfButton('#NewInvoice-Cancel');
	newInvoiceEdit = PcfButton('#NewInvoice-Edit');
	newInvoiceIDCSDisabledAlert = PcfButton('#NewInvoice-IDCSDisabledAlert');
	newInvoiceIDCSDisabledAlertCloseBtn = PcfButton('#NewInvoice-IDCSDisabledAlert-CloseBtn');
	newInvoiceIDCSUnavailableAlert = PcfButton('#NewInvoice-IDCSUnavailableAlert');
	newInvoiceIDCSUnavailableAlertCloseBtn = PcfButton('#NewInvoice-IDCSUnavailableAlert-CloseBtn');
	newInvoiceIDMSUnavailableAlert = PcfButton('#NewInvoice-IDMSUnavailableAlert');
	newInvoiceIDMSUnavailableAlertCloseBtn = PcfButton('#NewInvoice-IDMSUnavailableAlert-CloseBtn');
	newInvoiceNewInvoice_UpLink = PcfButton('#NewInvoice-NewInvoice_UpLink');
	newInvoiceStatementDVDescription = PcfTextInput('#NewInvoice-StatementDV-Description');
	newInvoiceStatementDVInvoiceStatus = PcfSelectInput('#NewInvoice-StatementDV-InvoiceStatus');
	newInvoiceStatementDVReferenceNumber = PcfTextInput('#NewInvoice-StatementDV-ReferenceNumber');
	newInvoiceStatementDVStatementLineItemLV = PcfListView('#NewInvoice-StatementDV-StatementLineItemLV');
	newInvoiceStatementDVStatementLineItemLV_tbAdd = PcfButton('#NewInvoice-StatementDV-StatementLineItemLV_tb-Add');
	newInvoiceStatementDVStatementLineItemLV_tbRemove = PcfButton('#NewInvoice-StatementDV-StatementLineItemLV_tb-Remove');
	newInvoiceStatementDVApprovalDate = PcfDateValueInput('#NewInvoice-StatementDV-ApprovalDate');
	newInvoiceStatementDVApprovedByApprovedByUserSearchMenuItem = PcfComponent('#NewInvoice-StatementDV-ApprovedBy-ApprovedByUserSearchMenuItem');
	newInvoiceStatementDVApprovedByApprovedByUserSelectMenuItem = PcfComponent('#NewInvoice-StatementDV-ApprovedBy-ApprovedByUserSelectMenuItem');
	newInvoiceStatementDVCreationDate = PcfDateValueInput('#NewInvoice-StatementDV-CreationDate');
	newInvoiceStatementDVDaysToPerformService = PcfTextInput('#NewInvoice-StatementDV-DaysToPerformService');
	newInvoiceStatementDVNoQuotesMessage = PcfTextInput('#NewInvoice-StatementDV-NoQuotesMessage');
	newInvoiceStatementDVquoteTotal = PcfTextInput('#NewInvoice-StatementDV-quoteTotal');
	newInvoiceStatementDVPreviousTotal = PcfTextInput('#NewInvoice-StatementDV-PreviousTotal');
	newInvoiceStatementDocumentsLV = PcfListView('#NewInvoice-StatementDocumentsLV');
	newInvoiceStatementDocumentsLV_tbAttachDocument = PcfButton('#NewInvoice-StatementDocumentsLV_tb-AttachDocument');
	newInvoiceStatementDocumentsLV_tbLink = PcfButton('#NewInvoice-StatementDocumentsLV_tb-Link');
	newInvoiceUpdate = PcfButton('#NewInvoice-Update');
	newInvoice_Paging = PcfButton('#NewInvoice-_Paging');
	newInvoice__crumb__ = PcfComponent('#NewInvoice-__crumb__');
	newInvoice_msgs = PcfButton('#NewInvoice-_msgs');
}
