import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AddressBookDirectionsPopup {
	addressBookDirectionsPopupAddressBookDirectionsPopup_UpLink = PcfButton('#AddressBookDirectionsPopup-AddressBookDirectionsPopup_UpLink');
	addressBookDirectionsDVDirectionsLV = PcfListView('#AddressBookDirectionsPopup-AddressBookDirectionsScreen-AddressBookDirectionsDV-DirectionsLV');
	addressBookDirectionsDVFromLoc = PcfTextInput('#AddressBookDirectionsPopup-AddressBookDirectionsScreen-AddressBookDirectionsDV-FromLoc');
	addressBookDirectionsDVToLoc = PcfTextInput('#AddressBookDirectionsPopup-AddressBookDirectionsScreen-AddressBookDirectionsDV-ToLoc');
	addressBookDirectionsDVTotalDist = PcfTextInput('#AddressBookDirectionsPopup-AddressBookDirectionsScreen-AddressBookDirectionsDV-TotalDist');
	addressBookDirectionsDVTotalTime = PcfTextInput('#AddressBookDirectionsPopup-AddressBookDirectionsScreen-AddressBookDirectionsDV-TotalTime');
	addressBookDirectionsScreen_msgs = PcfButton('#AddressBookDirectionsPopup-AddressBookDirectionsScreen-_msgs');
	addressBookDirectionsPopup_Paging = PcfButton('#AddressBookDirectionsPopup-_Paging');
	addressBookDirectionsPopup__crumb__ = PcfComponent('#AddressBookDirectionsPopup-__crumb__');
}
