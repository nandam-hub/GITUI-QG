import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class SubmissionWizard_New {
	submissionWizard_Quote = PcfButton('[id$="JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote"]');
	submissionWizard_QuoteStatus = PcfComponent('#SubmissionWizard-JobWizardInfoBar-JobLabel ')
	submissionWizard_Bind = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions')
	submissionWizard_IssuePolicy = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue')
	submissionWizard_PolicyNumber = PcfComponent('#JobComplete-JobWizardInfoBar-PolicyNumber')
	submissionWizard_QuoteNumber = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-JobNumber')
	submissionWizard_BindOptions = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly')
	submissionWizard_AddCPBlanket = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCpBlanketScreen-CLLCpBlanketListPanelSet-AddCpBlanket')
	//#region homeowners
	submissionWizardRefusalType = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-RefusalType');
	submissionWizardAdditionalCoverage = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalCoveragesTab')
	submissionWizardSectionIICoverages = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-SectionIICoveragesTab')
	submissionWizardOptionalCoverages = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-OptionalCoveragesTab')
	submissionWizardExclusionsConditions = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-ExclusionsAndconditionsTab')
	submissionWizardGWHomeownersLine = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-detailsTab')
	submissionWizard_Premium = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-RatingCumulDetailsPanelSet-0-0-Type_button')
	submissionWizard_RefusalType_ErrorMsg = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-_msgs-0-0')
	submissionWizardAddExclusionsOrCondition= PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalExclusionsAndConditionsPanelSet-AddExclusionsOrCondition')
	//#endregion
	//#region small business
	submissionWizardSmallBusienssTab = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-detailsTab')
	submissionWizardSmallBusinessLineCoveragesTab = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-SBLLineCoveragesTab')
	submissionWizardSmallBusinessLineAdditionalCoveragesTab = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-SBLAdditionalLineCoveragesTab')
	submissionWizardExclusionsConditionsTabSb = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-ExclusionsAndconditionsTab')
	submissionWizardBusinessType = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-SBLBusinessType')
	//#endregion
	//#region USA personal Auto
	SubmissionWizard_LineStandardCoveragesTab = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-UALWizardStepGroup-UALUsaPersonalAutoScreen-UALUsaPersonalAutoPanelSet-LineStandardCoveragesTab')
	SubmissionWizard_AddPersonalVehicle = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-UALWizardStepGroup-UALPersonalVehicleScreen-UALPersonalVehicleListPanelSet-AddPersonalVehicle')
	submissionWizardUALPolicyDriverMVRListAdd = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-UALWizardStepGroup-UALUsaPersonalAutoScreen-UALUsaPersonalAutoPanelSet-UALPolicyDriverMVRListPanelSet-Add')
	submissionWizardInternetRequestId = "[id*='-MVRID']"
	submissionWizardPolicyDriverMenuIcon = "[id*='PolicyDriver-PolicyDriverMenuIcon']"
	submissionWizardAvailableContacts = "[id*='PolicyDriver-availableContacts']"
	submissionWizardOtherContact = "[id*='-0-OtherContact']"
	//#endregion	

	//#region Go commercial property
	submissionWizardAddLocation = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLLocationScreen-CLLLocationListPanelSet-AddLocation')
	submissionWizardEditPolicy = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-EditPolicy')
	submissionWizardLOBCommercial1 = PcfButton('#SubmissionWizard-LOBWizardStepGroup-CLLWizardStepGroup')
	submissionWizardLOBCommercial = PcfButton('#PolicyFile-PolicyFileAcceleratedMenuActions-PolicyMenuItemSet-PolicyMenuItemSet_GOCommercialPropertyLine')
	submissionWizardCheckBox = PcfCheckBox('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-3-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv')
	submissionQuote = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote')
	//#endregion
}