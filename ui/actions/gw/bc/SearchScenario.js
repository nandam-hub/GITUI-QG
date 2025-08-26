import { AccountGroupMenuLinks } from '../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks'
import { SearchTabBar } from '../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/SearchTabBar';
import { SearchGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/SearchGroupMenuLinks';
import world from '../../../util/gw/world';
import { t } from 'testcafe';
import { PolicySearch_Ext } from './scenarioPages/PolicySearch_Ext';


const accountGroupMenuLinks = new AccountGroupMenuLinks();
const policySearch_Ext = new PolicySearch_Ext()

export class SearchScenario {
    async searchWithPolicy(policyNumber) {
        await policySearch_Ext.policySearchDVPolicyNumberCriterion.setValue(policyNumber)
        await policySearch_Ext.policySearchPolicySearchScreenPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
        await policySearch_Ext.policySearchResultsLVPolicyNumber.click()
    }
}