import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';
import { NewAccount } from "../../../../../pages/gw/generated/policysolutions/pages/account/NewAccount"

export class NewAccount_Ext extends NewAccount {
    CreateAccount_FirstName = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-FirstName')
    CreateAccount_LastName = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-LastName')
    CreateAccount_State = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State')
    CreateAccount_AddressLine1 = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1')
    CreateAccount_AddressType = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType')
    CreateAccount_SelectOrganization = PcfButton('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer-SelectOrganization')
    CreateAccount_Update = PcfButton('#CreateAccount-CreateAccountScreen-ForceDupCheckUpdate')
    CreateAccount_LastName_Sel = Selector('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-LastName')
    CreateAccount_CompanyName = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalContactNameInputSet-Name')
    zipCode = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
    city = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
    account_dropdown = PcfButton("#TabBar-AccountTab > div.gw-action--expand-button > div")
    acc_NewAccount = PcfButton("[id$='AccountTab_NewAccount']");
    company_Name = PcfTextInput("[id$='GlobalContactNameInputSet-Name']")
    acc_Search_btn = PcfButton("[id$='SearchLinksInputSet-Search']")
    CreateNewAccount_Btn = PcfButton("[id$='NewAccountButton']")
    newCompanyAccount_Btn = PcfButton("[id$='NewAccount_Company']")
    acc_zipcode_TxtBox = PcfTextInput("[id$='GlobalAddressInputSet-PostalCode']")
    acc_State_Dropdown = PcfSelectInput("[id$='GlobalAddressInputSet-State']")
    acc_AddressLine1_TxtBox = PcfTextInput("[id$='GlobalAddressInputSet-AddressLine1']")
    acc_AddressType_Dropdown = PcfSelectInput("[id$='CreateAccountDV-AddressType']")
    accUpdate_Btn = PcfButton("[id$= 'ForceDupCheckUpdate']")
    company_Name = PcfTextInput("[id$='GlobalContactNameInputSet-Name']");
    producerCode_Dropdown = PcfSelectInput("[id$= 'ProducerCode']");
    newAccountScreenNewAccountButton = PcfButton('#NewAccount-NewAccountScreen-NewAccountButton');
    newAccountButtonNewAccount_Company = PcfButton('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Company');
    newAccountButtonNewAccount_FromAB = PcfButton('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_FromAB');
    createAccountSSN = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-OfficialIDInputSet-OfficialIDDV_Input')
    createAccountDescription = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressDescription')
    createAccountOrganizationType = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-OrgType')
    createAccountFEIN = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-OfficialIDInputSet-OfficialIDDV_Input')
}