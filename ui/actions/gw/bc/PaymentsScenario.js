import { t } from "testcafe"
import { performClickInTable, returnDataFromTable } from "../../../util/gw/helper"
import world from "../../../util/gw/world"
import { AccountPayments_Ext } from "./scenarioPages/AccountPayments_Ext"
import { DBPaymentReversalConfirmationPopup } from "../../../pages/gw/generated/billingsolutions/pages/popup/DBPayment/DBPaymentReversalConfirmationPopup"

const accountPayments_Ext = new AccountPayments_Ext()
const dBPaymentReversalConfirmationPopup = new DBPaymentReversalConfirmationPopup()

export class PaymentsScenario {
    async validatePaymentDetails() {
        await t.expect(await returnDataFromTable(6)).eql(world.dataMap.get('ExpectedAmount'))
        console.log("Payment details are updated successfully")
    }
    //ToDo - Needs to be updated with performClickInTable()
    async paymentReversal() {
        t.ctx.TableIdentifier = "Payment Date"
        await performClickInTable(accountPayments_Ext.paymentAction)
        await accountPayments_Ext.reversePayment.click()
        await dBPaymentReversalConfirmationPopup.dBPaymentReversalConfirmationPopupReason.selectOptionByLabel(world.dataMap.get('Reason'))
        await dBPaymentReversalConfirmationPopup.dBPaymentReversalConfirmationPopupUpdate.click()
    }
    async validatePaymentReversal() {
        await t.expect(await returnDataFromTable(6)).eql(world.dataMap.get('ExpectedAmount'))
        console.log("Payment reversal is processed successfully")
    }
}