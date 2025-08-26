import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountCollateral {
	accountCollateralDVcashBalance = PcfTextInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-cashBalance');
	accountCollateralDVcompliant = PcfSelectInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-compliant');
	accountCollateralDVlocBalance = PcfTextInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-locBalance');
	accountCollateralDVrequirementsCashHeld = PcfTextInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-requirementsCashHeld');
	accountCollateralDVtotalBalance = PcfTextInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-totalBalance');
	accountCollateralDVtotalRequirement = PcfTextInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-totalRequirement');
	accountCollateralDVtrueExcess = PcfTextInput('#AccountCollateral-AccountCollateralScreen-AccountCollateralDV-trueExcess');
	accountCollateralScreenChargedAmountsLV = PcfListView('#AccountCollateral-AccountCollateralScreen-ChargedAmountsLV');
	chargedAmountsLV_tbaddCharge = PcfButton('#AccountCollateral-AccountCollateralScreen-ChargedAmountsLV_tb-addCharge');
	accountCollateralScreenCollateralRequirementsLV = PcfListView('#AccountCollateral-AccountCollateralScreen-CollateralRequirementsLV');
	collateralRequirementsLV_tbaddButton = PcfButton('#AccountCollateral-AccountCollateralScreen-CollateralRequirementsLV_tb-addButton');
	collateralRequirementsLV_tbcloseButton = PcfButton('#AccountCollateral-AccountCollateralScreen-CollateralRequirementsLV_tb-closeButton');
	collateralRequirementsLV_tbeditReqButton = PcfButton('#AccountCollateral-AccountCollateralScreen-CollateralRequirementsLV_tb-editReqButton');
	collateralRequirementsLV_tbsegregateButton = PcfButton('#AccountCollateral-AccountCollateralScreen-CollateralRequirementsLV_tb-segregateButton');
	collateralRequirementsLV_tbunSegregateButton = PcfButton('#AccountCollateral-AccountCollateralScreen-CollateralRequirementsLV_tb-unSegregateButton');
	accountCollateralScreenLOCCardTab = PcfButton('#AccountCollateral-AccountCollateralScreen-LOCCardTab');
	accountCollateralScreenLetterOfCreditLV = PcfListView('#AccountCollateral-AccountCollateralScreen-LetterOfCreditLV');
	letterOfCreditLV_tbaddButton = PcfButton('#AccountCollateral-AccountCollateralScreen-LetterOfCreditLV_tb-addButton');
	letterOfCreditLV_tbeditButton = PcfButton('#AccountCollateral-AccountCollateralScreen-LetterOfCreditLV_tb-editButton');
	letterOfCreditLV_tbremoveButton = PcfButton('#AccountCollateral-AccountCollateralScreen-LetterOfCreditLV_tb-removeButton');
	accountCollateralScreen_msgs = PcfButton('#AccountCollateral-AccountCollateralScreen-_msgs');
	accountCollateralScreencashHeldCardTab = PcfButton('#AccountCollateral-AccountCollateralScreen-cashHeldCardTab');
	accountCollateralScreencashHeldLV = PcfListView('#AccountCollateral-AccountCollateralScreen-cashHeldLV');
	cashHeldLV_tbdisbursementButton = PcfButton('#AccountCollateral-AccountCollateralScreen-cashHeldLV_tb-disbursementButton');
	cashHeldLV_tbdrawdownButton = PcfButton('#AccountCollateral-AccountCollateralScreen-cashHeldLV_tb-drawdownButton');
	accountCollateralScreenchargedAmountsCardTab = PcfButton('#AccountCollateral-AccountCollateralScreen-chargedAmountsCardTab');
	accountCollateralScreenrequirementsCardTab = PcfButton('#AccountCollateral-AccountCollateralScreen-requirementsCardTab');
	accountCollateralAccountCollateral_UpLink = PcfButton('#AccountCollateral-AccountCollateral_UpLink');
	accountCollateral_Paging = PcfButton('#AccountCollateral-_Paging');
	accountCollateral__crumb__ = PcfComponent('#AccountCollateral-__crumb__');
}
