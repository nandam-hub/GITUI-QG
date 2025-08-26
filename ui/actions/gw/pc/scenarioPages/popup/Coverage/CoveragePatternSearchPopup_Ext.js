import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';
import { CoveragePatternSearchPopup } from "../../../../../../pages/gw/generated/policysolutions/pages/popup/Coverage/CoveragePatternSearchPopup"

export class CoveragePatternSearchPopup_Ext extends CoveragePatternSearchPopup  {
	fireDepartmentSubscription = PcfCheckBox('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchResultsLV-0-_Checkbox_checkboxDiv')
    computerDamageExclusion = PcfCheckBox('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchResultsLV-5-_Checkbox_checkboxDiv')
    addSelectedExclusionsAndConditions = PcfButton('#CoveragePatternSearchPopup-CoveragePatternSearchScreen-CoveragePatternSearchResultsLV_tb-AddCoverageButton')
}
