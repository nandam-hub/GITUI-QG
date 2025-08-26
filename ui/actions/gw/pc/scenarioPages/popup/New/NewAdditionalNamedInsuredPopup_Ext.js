import { PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { NewAdditionalNamedInsuredPopup } from "../../../../../../pages/gw/generated/policysolutions/pages/popup/New/NewAdditionalNamedInsuredPopup";

export class NewAdditionalNamedInsuredPopup_Ext extends NewAdditionalNamedInsuredPopup {
    firstName = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName');
    lastName = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName')
    driverAddress1 = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1')
    driverCity = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City')
    driverState = PcfSelectInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State')
    driverZipCode = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode')
    driverAddressType = PcfSelectInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType')
}