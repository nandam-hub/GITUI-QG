import { Summary_Ext } from "./scenarioPages/account/Summary_Ext"
import { t } from "testcafe";

const summary_Ext = new Summary_Ext()

export class AccountSummaryScenario {

    async validateAccounSummaryHeader() {
        await t.expect((summary_Ext.accountSummaryHeader).component.exists).ok();
    }

    async viewAccountSummary() {
        console.log('On Account Summary Screen')
        await t.expect(summary_Ext.accountHolder.component.textContent).contains(t.ctx.FirstName)
        await t.expect(summary_Ext.accountStatus.component.textContent).eql('Pending')
    }

}