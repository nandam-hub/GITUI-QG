import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDCoveragePopup {
	aPDCoveragePopupAPDCoverageClaimCostCategoriesLV = PcfListView('#APDCoveragePopup-APDCoverageClaimCostCategoriesLV');
	aPDCoverageClaimCostCategoriesLV_tbAdd = PcfButton('#APDCoveragePopup-APDCoverageClaimCostCategoriesLV_tb-Add');
	aPDCoverageClaimCostCategoriesLV_tbRemove = PcfButton('#APDCoveragePopup-APDCoverageClaimCostCategoriesLV_tb-Remove');
	aPDCoverageInputSetCodeIdentifier = PcfTextInput('#APDCoveragePopup-APDCoverageInputSet-CodeIdentifier');
	aPDCoverageInputSetDescription = PcfTextInput('#APDCoveragePopup-APDCoverageInputSet-Description');
	aPDCoverageInputSetLossPartyType = PcfSelectInput('#APDCoveragePopup-APDCoverageInputSet-LossPartyType');
	aPDCoverageInputSetName = PcfTextInput('#APDCoveragePopup-APDCoverageInputSet-Name');
	aPDCoverageInputSetWrittenByThirdParty = PcfComponent('#APDCoveragePopup-APDCoverageInputSet-WrittenByThirdParty');
	aPDCoveragePopupAPDCoveragePerilsLV = PcfListView('#APDCoveragePopup-APDCoveragePerilsLV');
	aPDCoveragePerilsLV_tbAdd = PcfButton('#APDCoveragePopup-APDCoveragePerilsLV_tb-Add');
	aPDCoveragePerilsLV_tbRemove = PcfButton('#APDCoveragePopup-APDCoveragePerilsLV_tb-Remove');
	aPDCoveragePopupAPDCoveragePopup_UpLink = PcfButton('#APDCoveragePopup-APDCoveragePopup_UpLink');
	aPDCoveragePopupCancel = PcfButton('#APDCoveragePopup-Cancel');
	aPDCoveragePopupEdit = PcfButton('#APDCoveragePopup-Edit');
	aPDCoveragePopupUpdate = PcfButton('#APDCoveragePopup-Update');
	aPDCoveragePopup_Paging = PcfButton('#APDCoveragePopup-_Paging');
	aPDCoveragePopup__crumb__ = PcfComponent('#APDCoveragePopup-__crumb__');
	aPDCoveragePopup_msgs = PcfButton('#APDCoveragePopup-_msgs');
}
