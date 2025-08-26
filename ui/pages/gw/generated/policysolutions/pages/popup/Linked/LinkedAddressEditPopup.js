import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class LinkedAddressEditPopup {
	linkedAddressEditPopupAddressDescription = PcfTextInput('#LinkedAddressEditPopup-AddressDescription');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-Country');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	linkedAddressEditPopupAddressInputSetglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#LinkedAddressEditPopup-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County');
	linkedAddressEditPopupAddressType = PcfSelectInput('#LinkedAddressEditPopup-AddressType');
	linkedAddressEditPopupCancel = PcfButton('#LinkedAddressEditPopup-Cancel');
	linkedAddressEditPopupEdit = PcfButton('#LinkedAddressEditPopup-Edit');
	linkedAddressEditPopupLinkedAddressContactsLV = PcfListView('#LinkedAddressEditPopup-LinkedAddressContactsLV');
	linkedAddressEditPopupLinkedAddressEditPopup_UpLink = PcfButton('#LinkedAddressEditPopup-LinkedAddressEditPopup_UpLink');
	linkedAddressEditPopupUpdate = PcfButton('#LinkedAddressEditPopup-Update');
	linkedAddressEditPopupUpdateAllButton = PcfButton('#LinkedAddressEditPopup-UpdateAllButton');
	linkedAddressEditPopupUpdateAndUnlinkButton = PcfButton('#LinkedAddressEditPopup-UpdateAndUnlinkButton');
	linkedAddressEditPopup_Paging = PcfButton('#LinkedAddressEditPopup-_Paging');
	linkedAddressEditPopup__crumb__ = PcfComponent('#LinkedAddressEditPopup-__crumb__');
	linkedAddressEditPopup_msgs = PcfButton('#LinkedAddressEditPopup-_msgs');
}
