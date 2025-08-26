import { PcfComponent, PcfSelectInput, PcfButton } from '@gtui/gt-ui-framework';
import { NewExposure } from '../../../../../pages/gw/generated/claimsolutions/pages/other/NewExposure';

export class NewExposure_Ext extends NewExposure {
    newExposureDVClaimantPickerExt = PcfSelectInput('#NewExposure-NewExposureScreen-NewExposureDV-Claimant_Picker');
    newExposureInjuryIncidentMenuIcon = PcfComponent("#NewExposure-NewExposureScreen-NewExposureDV-BIDamageInputSet-Injury_Incident-Injury_IncidentMenuIcon")
    newExposurePropertyIncidentMenuIcon = PcfComponent("#NewExposure-NewExposureScreen-NewExposureDV-NewClaimPropertyDamageDV-NewClaimIncidentInputSet-Property_Incident-Property_IncidentMenuIcon")
    newExposureClaimant_Picker = PcfSelectInput('#NewExposure-NewExposureScreen-NewExposureDV-NewClaimPropertyDamageDV-Claimant_Picker');
    exposureClaimant = PcfSelectInput('#NewExposure-NewExposureScreen-NewExposureDV-NewClaimVehicleDamageDV-Claimant_Picker > div.gw-vw--value')
}