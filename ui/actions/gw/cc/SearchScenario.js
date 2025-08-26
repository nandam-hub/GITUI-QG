import { SearchTabBar } from "../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar"
import { SimpleClaimSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch"
import { PaymentSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/PaymentSearch"
import { ClaimFinancialsChecksDetail_New } from "./scenarioPages/claim/claimFinancialsGroup/ClaimFinancialsChecksDetail_New.js"
import { AddressBookTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/AddressBookTabBar.js"
import { AddressBookSearch } from "../../../../ui/pages/gw/generated/claimsolutions/pages/addressBook/AddressBookSearch.js"
import { AddressBookTabBar_Ext } from "./scenarioPages/navigation/tabBar/AddressBookTabBar_Ext.js"
import { RecoverySearch } from "../../../../ui/pages/gw/generated/claimsolutions/pages/search/RecoverySearch.js";
import { NewRecoverySet_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/recovery/NewRecoverySet_Ext"
import { ClaimMenuActions_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup.js"
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { t } from "testcafe"
import world from '../../../util/gw/world'
import { ClaimSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/claimSearchesGroup/ClaimSearch"
import { validateTableRecord } from '../../../util/gw/helper'

const searchTabBar = new SearchTabBar()
const simpleClaimSearch = new SimpleClaimSearch()
const paymentSearch = new PaymentSearch();
const claimFinancialsChecksDetail_New = new ClaimFinancialsChecksDetail_New();
const addressBookTabBar = new AddressBookTabBar();
const addressBookSearch = new AddressBookSearch();
const addressBookTabBar_Ext = new AddressBookTabBar_Ext()
const recoverySearch = new RecoverySearch();
const newContactPopup = new NewContactPopup()
const claimMenuActions_Ext = new ClaimMenuActions_Ext();
const newRecoverySet_Ext = new NewRecoverySet_Ext();
const claimSearch = new ClaimSearch();

export class SearchScenario {
    async claimSimpleSearch(claimNumber) {
        console.log("On Search Claims screen")
        await searchTabBar.tabBarSearchTab.click()
        await simpleClaimSearch.simpleClaimSearchDVClaimNumber.setValue(claimNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async searchWithPolicy(policyNumber) {
        await simpleClaimSearch.simpleClaimSearchDVPolicyNumber.setValue(policyNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async searchCheck() {
        await searchTabBar.tabBarSearchChevron.click()
        await searchTabBar.searchTabSearch_PaymentSearch.click()
        await paymentSearch.paymentSearchRequiredInputSetClaimNumber.setValue(world.dataMap.get('ClaimNumber'))
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async validateCheckDetailsHeader() {
        await t.expect(await validateTableRecord("Status", world.dataMap.get('Status'), 2)).eql(world.dataMap.get('Amount'))
        await t.expect((claimFinancialsChecksDetail_New.checkDetailsHeader).component.exists).ok();
    }

    async searchContact() {
        await addressBookTabBar.tabBarAddressBookTab.click()
        await addressBookSearch.addressBookSearchDVContactSubtype.selectOptionByLabel(world.dataMap.get('Type'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVNameInputSetGlobalContactNameInputSetName.setValue(world.dataMap.get('LastName'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async searchValidation() {
        await t.expect(addressBookTabBar_Ext.addressBookTabNameSearch.component.textContent).eql(world.dataMap.get('Name'))
    }

    async searchRecovery(claimNumber) {
        await searchTabBar.tabBarSearchChevron.click()
        await searchTabBar.searchTabSearch_RecoverySearch.click()
        await recoverySearch.recoverySearchRequiredInputSetClaimNumber.setValue(claimNumber);
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async validateRecovery() {
        await searchTableRecord(7, world.dataMap.get('RecoveryCategory'))
    }

    async recoveryCreation() {
        await claimMenuActions_Ext.claimClaimMenuActions.click()
        await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click()
        await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click()
        await t.wait(1000)
        await claimMenuActions_Ext.claimMenuActions_NewOtherTransClaimMenuActions_NewTransaction_RecoverySet.click()
        await newRecoverySet_Ext.payerMenuIcon.click()
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVPayerClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson.click();
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(world.dataMap.get('Payer'));
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        await t.wait(1000)
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetReserveLine.selectOptionByLabel(world.dataMap.get('ReserveLine'))
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostType.selectOptionByLabel(world.dataMap.get('CostType'))
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        await newRecoverySet_Ext.recoveryDetailDVRecoveryCategory.selectOptionByLabel(world.dataMap.get('RecoveryCategory'))
        await newRecoverySet_Ext.recoveryAmount.setValue(world.dataMap.get('Amount'))
        await newRecoverySet_Ext.newRecoveryScreenUpdate.click()
        await t.setNativeDialogHandler(() => true);
    }

    async advanceSearchClaimWithName() {
        await claimSearch.claimSearchRequiredInputSetSearchFor.selectOptionByValue(world.dataMap.get('SearchFor'))
        await claimSearch.claimSearchClaimSearchScreenClaimSearchDVClaimSearchRequiredInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.insuredName);     
        await claimSearch.claimSearchClaimSearchScreenClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }
}