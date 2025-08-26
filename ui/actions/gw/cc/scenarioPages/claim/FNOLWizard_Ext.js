import { PcfComponent, PcfSelectInput, PcfButton, PcfCheckBox, PcfTextInput } from '@gtui/gt-ui-framework';
import { FNOLWizard } from '../../../../../pages/gw/generated/claimsolutions/pages/claim/FNOLWizard';

export class FNOLWizard_Ext extends FNOLWizard {
    fnolWizardCreateUnverifiedPolicy = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-ScreenMode_1');
    fnolWizardNameMenuSelection = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-NewClaimPolicyGeneralPanelSet-NewClaimPolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
    fNOLWizardNameMenuIcon = PcfButton('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-NewClaimPolicyGeneralPanelSet-NewClaimPolicyGeneralDV-Insured_Name-Insured_NameMenuIcon');
    fnolWizardNameDropdown = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
    fnolWizardRentalCheckbox = PcfCheckBox('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-_checkbox_checkboxDiv')
    fnolWizardRentalBeginDate = PcfTextInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-RentalBeginDate')
    fnolWizardRentalEndDate = PcfTextInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-RentalEndDate')
    fnolWizardRentalDailyRate = PcfTextInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-RentalRate')
    fnolWizardRentalAgency = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-RentalAgency')
    fnolWizardRentalAgencyMenu = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-RentalAgency-RentalAgencyMenuIcon')
    fnolWizardNewVendor = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-RentalAgency-ClaimNewVendorOnlyPickerMenuItemSet-NewContactPickerMenuItemSet_CompanyVendor')
    fnolWizardPickUpLocation = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-0-VehicleIncidentPanelSet-RentalServiceDV-RentalServiceInputSet-RentalServiceInputSet-RentalInputGroup-OtherServiceRequestInfo-NewServiceRequestInstructionInputSet-ServiceAddressPicker')
	fNOLWizardFindPolicyScreenmsgs = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-_msgs-0-0');
}