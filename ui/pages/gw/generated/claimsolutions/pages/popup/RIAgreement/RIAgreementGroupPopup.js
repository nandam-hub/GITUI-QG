import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RIAgreementGroupPopup {
	rIAgreementGroupPopupAgreementGroupName = PcfTextInput('#RIAgreementGroupPopup-AgreementGroupName');
	rIAgreementGroupPopupCancel = PcfButton('#RIAgreementGroupPopup-Cancel');
	rIAgreementGroupPopupEdit = PcfButton('#RIAgreementGroupPopup-Edit');
	rIAgreementGroupPopupRIAgreementGroupPopup_UpLink = PcfButton('#RIAgreementGroupPopup-RIAgreementGroupPopup_UpLink');
	rIAgreementGroupPopupRelatedExposuresPopupLV = PcfListView('#RIAgreementGroupPopup-RelatedExposuresPopupLV');
	rIAgreementGroupPopupUpdate = PcfButton('#RIAgreementGroupPopup-Update');
	rIAgreementGroupPopup_Paging = PcfButton('#RIAgreementGroupPopup-_Paging');
	rIAgreementGroupPopup__crumb__ = PcfComponent('#RIAgreementGroupPopup-__crumb__');
	rIAgreementGroupPopup_msgs = PcfButton('#RIAgreementGroupPopup-_msgs');
}
