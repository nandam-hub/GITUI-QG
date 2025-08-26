import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ContactReviewPopup {
	contactReviewPopupCancelButton = PcfButton('#ContactReviewPopup-CancelButton');
	contactReviewPopupContactReviewPopup_UpLink = PcfButton('#ContactReviewPopup-ContactReviewPopup_UpLink');
	contactReviewPopupReviewDVCategoryScoresLV = PcfListView('#ContactReviewPopup-ReviewDV-CategoryScoresLV');
	contactReviewPopupReviewDVReviewClaimSelectReviewClaim = PcfButton('#ContactReviewPopup-ReviewDV-ReviewClaim-SelectReviewClaim');
	contactReviewPopupReviewDVReviewComments = PcfTextInput('#ContactReviewPopup-ReviewDV-ReviewComments');
	contactReviewPopupReviewDVReviewContact = PcfTextInput('#ContactReviewPopup-ReviewDV-ReviewContact');
	contactReviewPopupReviewDVReviewRelatedTo = PcfSelectInput('#ContactReviewPopup-ReviewDV-ReviewRelatedTo');
	contactReviewPopupReviewDVReviewScore = PcfTextInput('#ContactReviewPopup-ReviewDV-ReviewScore');
	contactReviewPopupReviewDVReviewServiceDate = PcfDateValueInput('#ContactReviewPopup-ReviewDV-ReviewServiceDate');
	contactReviewPopupReviewDVReviewServiceType = PcfSelectInput('#ContactReviewPopup-ReviewDV-ReviewServiceType');
	contactReviewPopupReviewDVReviewStatus = PcfTextInput('#ContactReviewPopup-ReviewDV-ReviewStatus');
	contactReviewPopupReviewDVReviewType = PcfTextInput('#ContactReviewPopup-ReviewDV-ReviewType');
	contactReviewPopupReviewDVReviewedBy = PcfTextInput('#ContactReviewPopup-ReviewDV-ReviewedBy');
	contactReviewPopupReviewDVTextInput0 = PcfTextInput('#ContactReviewPopup-ReviewDV-TextInput0');
	contactReviewPopupUpdateButton = PcfButton('#ContactReviewPopup-UpdateButton');
	contactReviewPopup_Paging = PcfButton('#ContactReviewPopup-_Paging');
	contactReviewPopup__crumb__ = PcfComponent('#ContactReviewPopup-__crumb__');
	contactReviewPopup_msgs = PcfButton('#ContactReviewPopup-_msgs');
}
