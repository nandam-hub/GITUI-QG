import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class CLLLocationPopup_New {
    cllLocationPopupAddBuilding = PcfButton('#CLLLocationPopup-CLLLocationPanelSet-CLLCPBuildingListPanelSet-AddCPBuilding')
    cllCPBuildingPopupOk = PcfButton('#CLLCPBuildingPopup-Update')
    cllLocationPopupOk = PcfButton('#CLLLocationPopup-Update')
    cllLocationPopupAddress = PcfSelectInput('#CLLLocationPopup-CLLLocationPanelSet-AddressOfLocation')
    buildingDescription = PcfTextInput('#CLLCPBuildingPopup-CLLCPBuildingPanelSet-BuildingDesc')
    yearBuilt = PcfTextInput('#CLLCPBuildingPopup-CLLCPBuildingPanelSet-YearBuilt')
    cllLocationPopupAddLocationMenu = PcfButton('#CLLLocationPopup-CLLLocationPanelSet-AddressOfLocation-AddressOfLocationMenuIcon')
    cllLocationPopupNewLocation = PcfComponent('#CLLLocationPopup-CLLLocationPanelSet-AddressOfLocation-NewAddressOfLocation')
    cllLocationPopupAddress1 = PcfTextInput('#LocationPopup-LocationScreen-LocationDetailPanelSet-LocationDetailCV-LocationDetailDV-LocationDetailInputSet-TargetedAddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1')
    cllLocationPopupCity = PcfTextInput('#LocationPopup-LocationScreen-LocationDetailPanelSet-LocationDetailCV-LocationDetailDV-LocationDetailInputSet-TargetedAddressInputSet-globalAddressContainer-GlobalAddressInputSet-City')
    cllLocationPopupZipCode = PcfTextInput('#LocationPopup-LocationScreen-LocationDetailPanelSet-LocationDetailCV-LocationDetailDV-LocationDetailInputSet-TargetedAddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode')
    cllLocationPopupLocationOk = PcfButton('#LocationPopup-LocationScreen-Update')
}