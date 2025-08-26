import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RelatedAccountPopup {
	relatedAccountPopupAddress = PcfTextInput('#RelatedAccountPopup-Address');
	relatedAccountPopupCancel = PcfButton('#RelatedAccountPopup-Cancel');
	relatedAccountPopupEdit = PcfButton('#RelatedAccountPopup-Edit');
	relatedAccountPopupName = PcfTextInput('#RelatedAccountPopup-Name');
	relatedAccountSelectRelatedAccount = PcfButton('#RelatedAccountPopup-RelatedAccount-SelectRelatedAccount');
	relatedAccountPopupRelatedAccountPopup_UpLink = PcfButton('#RelatedAccountPopup-RelatedAccountPopup_UpLink');
	relatedAccountPopupRelationshipType = PcfSelectInput('#RelatedAccountPopup-RelationshipType');
	relatedAccountPopupUpdate = PcfButton('#RelatedAccountPopup-Update');
	relatedAccountPopup_Paging = PcfButton('#RelatedAccountPopup-_Paging');
	relatedAccountPopup__crumb__ = PcfComponent('#RelatedAccountPopup-__crumb__');
	relatedAccountPopup_msgs = PcfButton('#RelatedAccountPopup-_msgs');
}
