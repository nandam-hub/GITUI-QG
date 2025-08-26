import { AccountDetailInvoices_Ext } from '../../../../ui/actions/gw/bc/scenarioPages/navigation/AccountDetailInvoices_Ext'
import { dateFunction } from "../../../../ui/util/gw/helper"
import { t } from 'testcafe'
import { AccountGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks';
import { getNumberOfTableRecords } from "../../../util/gw/helper"
const accountDetailInvoices_Ext = new AccountDetailInvoices_Ext();
const accountGroupMenuLinks = new AccountGroupMenuLinks();

export class AccountDetailInvoicesScenario {

    async setInvoiceDate(billDateValue) {
        await accountDetailInvoices_Ext.invoiceDetailDV_tbEdit.click();
        await accountDetailInvoices_Ext.accountInvoiceInformationInputSetInvoiceDate.setValue(dateFunction(billDateValue));
        await accountDetailInvoices_Ext.invoiceDetailDV_tbUpdate.click();
        await t.wait(5000);
    }

    async validateBilledDate(billDateValue) {
        await t.expect(accountDetailInvoices_Ext.accountDetailInvoices_BilledDateUpdated.component.innerText).eql(dateFunction(billDateValue, 'MM/DD/YYYY'));
    }

    async validateInvoiceResentMessageDisplayed() {
        await accountDetailInvoices_Ext.accountDetailInvoicesScreenAccountDetailInvoices_InvoiceSentAlertBar.isAvailable();
    }

    async validateInvoices()
    {
        accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices.click()
        await t.expect((accountDetailInvoices_Ext.invoiceHeader).component.exists).ok();
        const noOfInvoices = await getNumberOfTableRecords('Status', 'Planned')
        console.log("Number of Invoices:" + noOfInvoices)
    }
}