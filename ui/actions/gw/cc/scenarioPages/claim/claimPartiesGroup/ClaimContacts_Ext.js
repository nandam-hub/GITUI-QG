import { PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import { ClaimContacts } from '../../../../../../pages/gw/generated/claimsolutions/pages/claim/claimPartiesGroup/ClaimContacts';

export class ClaimContacts_Ext extends ClaimContacts {
	personLastName = PcfComponent('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PersonNameInputSet-GlobalPersonNameInputSet-LastName');
	personFirstName = PcfComponent('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PersonNameInputSet-GlobalPersonNameInputSet-FirstName > div')
	addressLine1 = PcfTextInput('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PrimaryAddressInputSet-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressLine1')
	city = PcfTextInput('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PrimaryAddressInputSet-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-City > div.gw-vw--value')
	state = PcfSelectInput('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PrimaryAddressInputSet-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-State')
	zipcode = PcfTextInput('#ClaimContacts-ClaimContactsScreen-PeopleInvolvedDetailedListDetail-ContactBasicsDV-PrimaryAddressInputSet-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-PostalCode > div.gw-vw--value')
}