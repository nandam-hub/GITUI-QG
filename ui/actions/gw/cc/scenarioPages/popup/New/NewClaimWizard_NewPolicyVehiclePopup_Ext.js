import { PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { Selector } from "testcafe";
import { NewClaimWizard_NewPolicyVehiclePopup} from "../../../../../../pages/gw/generated/claimsolutions/pages/popup/New/NewClaimWizard_NewPolicyVehiclePopup";


export class NewClaimWizard_NewPolicyVehiclePopup_Ext extends NewClaimWizard_NewPolicyVehiclePopup{
    newClaimWizardExposureLimit = '[id$="-ExposureLimit"]'
    newClaimWizardCoverageType = '[id$="-CoverageType"]'
    newClaimWizardIncidentLimit = '[id$="-IncidentLimit"]'
}