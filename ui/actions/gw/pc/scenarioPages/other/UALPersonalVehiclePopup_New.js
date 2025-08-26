import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework"

export class UALPersonalVehiclePopup_New {
    bodyType = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-BodyType')
    vinNumber = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-VIN')
    year = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Year')
    make = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Make')
    model = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Model')
    annualMileage = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-AnnMile')
    personalUse = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-PrimaryUse')
    licenseState = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-LicenseState')
    personalAutoStandardCoveargeTab = PcfComponent('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UPAVehicleStandardCoveragesTab')
    comprehensive = PcfCheckBox('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UPAVehicleStandardCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv')
    vehicleComprehensive =PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UPAVehicleStandardCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-OptionTermInput')
    collision = PcfCheckBox('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UPAVehicleStandardCoveragesCovPatterns-CoverageCategoryInputSet-2-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv')
    vehicleCollision = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UPAVehicleStandardCoveragesCovPatterns-CoverageCategoryInputSet-2-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-OptionTermInput')
    UALPersonalVehiclePopup_AddDriver = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-Add')
    UALPersonalVehiclePopup_PolicyDriverMenuIcon = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-0-PolicyDriver-PolicyDriverMenuIcon')
    UALPersonalVehiclePopup_NewPerson = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-0-PolicyDriver-1-ContactType')
    UALPersonalVehiclePopup_VehicleDriverExposureCardTab = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-VehicleDriverExposureCardTab')
    UALPersonalVehiclePopup_Ok = PcfButton('#UALPersonalVehiclePopup-Update')
}