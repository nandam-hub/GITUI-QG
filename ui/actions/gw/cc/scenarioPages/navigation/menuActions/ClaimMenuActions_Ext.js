import { PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import { ClaimMenuActions } from '../../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuActions/ClaimMenuActions'

export class ClaimMenuActions_Ext extends ClaimMenuActions {
    claimMenuActions = PcfComponent("#Claim-ClaimMenuActions > div")
    activityAutoPilot = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category > div.gw-action--inner.gw-hasDivider")
    autopilotActionRequired = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category-0-item > div")
    newExposureMenuItemSetByCoverageType = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType")
    newExposureMenuItemSetByCoverageTypeU = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-8-item")
    newExposureMenuItemSetByCoverageTypeUnderinsuredMotoristBodilyInjury = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-8-item-0-item")
    newExposureMenuItemSetByCoverageTypeUninsuredMotoristBodilyInjury = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-8-item-2-item")
    newExposureMenuItemSetByCoverageTypeM = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-4-item")
    newExposureMenuItemSetByCoverageTypeMedicalPayments = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-4-item-1-item")
}