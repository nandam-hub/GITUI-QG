import { AccountPaymentRequests_Ext } from './scenarioPages/accountGroup/accountDetailPayments/AccountPaymentRequests_Ext.js';
import { NewPaymentInstrumentPopup } from '../../../pages/gw/generated/billingsolutions/pages/popup/New/NewPaymentInstrumentPopup.js';
import { AccountGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks.js';
import { AccountGroupMenuActions } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions.js';
import { t } from "testcafe";
import world from "../../../util/gw/world.js"
import { searchTableRecord, validateTableRecord } from "../../../util/gw/helper"

const accountPaymentRequests_Ext = new AccountPaymentRequests_Ext()
const newPaymentInstrumentPopup = new NewPaymentInstrumentPopup()
const accountGroupMenuLinks = new AccountGroupMenuLinks()
const accountGroupMenuActions = new AccountGroupMenuActions()

export class PaymentRequestScenario {
    async paymentRequest(){
    await accountPaymentRequests_Ext.accountDetailNewPayment_Amount.setValue(world.dataMap.get('PaymentAmount'))
    await accountPaymentRequests_Ext.accountDetailNewPayment_PaymentInstrument.click()
    await newPaymentInstrumentPopup.newPaymentInstrumentPopupPaymentMethod.selectOptionByLabel(world.dataMap.get('PaymentMethod'));
    await newPaymentInstrumentPopup.newPaymentInstrumentPopupUpdate.click()
    await accountPaymentRequests_Ext.accountDetailNewPayment_Next.click()
    await accountPaymentRequests_Ext.accountDetailNewPayment_Finish.click()
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailPayments.click()
    await accountGroupMenuLinks.accountGroup_AccountDetailPaymentsAccountDetailPayments_AccountPaymentRequests.click()
}
  
async validatePaymentRequest(){
    await t.expect (await validateTableRecord("Status",(world.dataMap.get('Status')),8)).eql(world.dataMap.get('Amount'))
}
  }
