import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class AccountNewCollateralRequirementPopup {
	accountNewCollateralRequirementPopupAccountNewCollateralRequirementPopup_UpLink = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementPopup_UpLink');
	accountNewCollateralRequirementScreenCancel = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-Cancel');
	collateralRequirementDVPolicy = PcfSelectInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-Policy');
	collateralRequirementDVcreateChargeCheckbox = PcfCheckBox('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-createChargeCheckbox');
	collateralRequirementDVeffectiveDate = PcfDateValueInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-effectiveDate');
	collateralRequirementDVexpirationDate = PcfDateValueInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-expirationDate');
	collateralRequirementDVlevelRange = PcfSelectInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-levelRange');
	collateralRequirementDVname = PcfTextInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-name');
	collateralRequirementDVpolicyPeriod = PcfSelectInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-policyPeriod');
	collateralRequirementDVrequired = PcfTextInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-required');
	collateralRequirementDVsegregate = PcfCheckBox('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-segregate');
	collateralRequirementDVtype = PcfSelectInput('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-CollateralRequirementDV-type');
	accountNewCollateralRequirementScreenEdit = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-Edit');
	accountNewCollateralRequirementScreenUpdate = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-Update');
	accountNewCollateralRequirementScreen_msgs = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-_msgs');
	accountNewCollateralRequirementScreeneffectiveDateAlert = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-effectiveDateAlert');
	effectiveDateAlertCloseBtn = PcfButton('#AccountNewCollateralRequirementPopup-AccountNewCollateralRequirementScreen-effectiveDateAlert-CloseBtn');
	accountNewCollateralRequirementPopup_Paging = PcfButton('#AccountNewCollateralRequirementPopup-_Paging');
	accountNewCollateralRequirementPopup__crumb__ = PcfComponent('#AccountNewCollateralRequirementPopup-__crumb__');
}
