import { t } from "testcafe";
import { ChangePaymentPlanPopup } from "../../../pages/gw/generated/billingsolutions/pages/popup/Change/ChangePaymentPlanPopup";
import world from "../../../util/gw/world";
import { PolicyDetailPayments_Ext } from "./scenarioPages/PolicyDetailPayments_Ext";

const changePaymentPlanPopup = new ChangePaymentPlanPopup()
const policyDetailPayments_Ext = new PolicyDetailPayments_Ext()

export class ChangePaymentPlanScenario {
    async changePaymentPlan() {
        await changePaymentPlanPopup.changePaymentPlanPopupPaymentPlan.selectOptionByLabel(world.dataMap.get('PaymentPlan'))
        await changePaymentPlanPopup.changePaymentPlanPopupUpdate.click()
    }

    async validatePaymentPlan() {
        await t.expect(await policyDetailPayments_Ext.paymentPlan.component.innerText).eql(world.dataMap.get('PaymentPlan'))
    }
}