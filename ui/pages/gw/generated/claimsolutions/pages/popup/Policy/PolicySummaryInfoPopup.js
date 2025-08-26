import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PolicySummaryInfoPopup {
	policySummaryInfoPopupPolicySummaryInfoPopup_UpLink = PcfButton('#PolicySummaryInfoPopup-PolicySummaryInfoPopup_UpLink');
	policySummaryGeneralDVEffectiveDate = PcfDateValueInput('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryGeneralDV-EffectiveDate');
	policySummaryGeneralDVExpirationDate = PcfDateValueInput('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryGeneralDV-ExpirationDate');
	policySummaryGeneralDVInsured = PcfTextInput('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryGeneralDV-Insured');
	policySummaryGeneralDVPolicyNumber = PcfTextInput('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryGeneralDV-PolicyNumber');
	policySummaryGeneralDVStatus = PcfSelectInput('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryGeneralDV-Status');
	policySummaryGeneralDVType = PcfSelectInput('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryGeneralDV-Type');
	policySummaryInfoScreenPolicySummaryInfoPopup_CloseButton = PcfButton('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryInfoPopup_CloseButton');
	policySummaryPropertyPanelPolicySummaryPropertyLV = PcfListView('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryPropertyPanel-PolicySummaryPropertyLV');
	policySummaryRiskUnitPanelPolicySummaryVehicleLV = PcfListView('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-PolicySummaryRiskUnitPanel-PolicySummaryVehicleLV');
	policySummaryInfoScreen_msgs = PcfButton('#PolicySummaryInfoPopup-PolicySummaryInfoScreen-_msgs');
	policySummaryInfoPopup_Paging = PcfButton('#PolicySummaryInfoPopup-_Paging');
	policySummaryInfoPopup__crumb__ = PcfComponent('#PolicySummaryInfoPopup-__crumb__');
}
