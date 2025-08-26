import { NewDirectBillPayment_Ext } from './scenarioPages/NewDirectBillPayment_Ext.js';
import { AccountGroupMenuLinks_Ext } from './scenarioPages/AccountGroupMenuLinks_Ext.js';
import { Selector } from 'testcafe';
import { t } from "testcafe";
import world from "../../../util/gw/world.js"
import { clickTableRecord, convertToInt, returnDataFromTable } from "../../../util/gw/helper"

const newDirectBillPayment_Ext = new NewDirectBillPayment_Ext()
const accountGroupMenuLinks_Ext = new AccountGroupMenuLinks_Ext()

export class OverrideDistributionScenario {
    async overrideDistribution(){
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount.setValue(world.dataMap.get('Amount'))
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenOverrideModeButton.click()
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenincludeOnly.selectOptionByLabel(world.dataMap.get('IncludeOnly'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_0.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_1.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_2.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_3.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_4.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_5.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_6.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_7.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.overrideDistributionAmount_8.setValue(world.dataMap.get('DistributionAmount'))
    await newDirectBillPayment_Ext.newDirectBillPaymentEditDBPaymentScreenUpdate.click()
    await t.scrollIntoView(accountGroupMenuLinks_Ext.menuLinks_AccountDetailInvoiceStreams)
    await accountGroupMenuLinks_Ext.menuLinksAccountGroup_AccountDetailInvoices.click()
}
  
async validateOverrideDistribution(){
    await t.expect(await returnDataFromTable(7, 2)).eql(world.dataMap.get('Due'))
}
  }