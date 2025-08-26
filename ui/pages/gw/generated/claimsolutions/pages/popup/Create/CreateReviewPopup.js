import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CreateReviewPopup {
	createReviewPopupCancelButton = PcfButton('#CreateReviewPopup-CancelButton');
	createReviewPopupCreateReviewPopup_UpLink = PcfButton('#CreateReviewPopup-CreateReviewPopup_UpLink');
	createReviewPopupReviewDVCategoryScoresLV = PcfListView('#CreateReviewPopup-ReviewDV-CategoryScoresLV');
	createReviewPopupReviewDVReviewClaimSelectReviewClaim = PcfButton('#CreateReviewPopup-ReviewDV-ReviewClaim-SelectReviewClaim');
	createReviewPopupReviewDVReviewComments = PcfTextInput('#CreateReviewPopup-ReviewDV-ReviewComments');
	createReviewPopupReviewDVReviewContact = PcfTextInput('#CreateReviewPopup-ReviewDV-ReviewContact');
	createReviewPopupReviewDVReviewRelatedTo = PcfSelectInput('#CreateReviewPopup-ReviewDV-ReviewRelatedTo');
	createReviewPopupReviewDVReviewScore = PcfTextInput('#CreateReviewPopup-ReviewDV-ReviewScore');
	createReviewPopupReviewDVReviewServiceDate = PcfDateValueInput('#CreateReviewPopup-ReviewDV-ReviewServiceDate');
	createReviewPopupReviewDVReviewServiceType = PcfSelectInput('#CreateReviewPopup-ReviewDV-ReviewServiceType');
	createReviewPopupReviewDVReviewStatus = PcfTextInput('#CreateReviewPopup-ReviewDV-ReviewStatus');
	createReviewPopupReviewDVReviewType = PcfTextInput('#CreateReviewPopup-ReviewDV-ReviewType');
	createReviewPopupReviewDVReviewedBy = PcfTextInput('#CreateReviewPopup-ReviewDV-ReviewedBy');
	createReviewPopupReviewDVTextInput0 = PcfTextInput('#CreateReviewPopup-ReviewDV-TextInput0');
	createReviewPopupReviewScreen_CompleteButton = PcfButton('#CreateReviewPopup-ReviewScreen_CompleteButton');
	createReviewPopupReviewScreen_DeleteButton = PcfButton('#CreateReviewPopup-ReviewScreen_DeleteButton');
	createReviewPopupUpdateButton = PcfButton('#CreateReviewPopup-UpdateButton');
	createReviewPopup_Paging = PcfButton('#CreateReviewPopup-_Paging');
	createReviewPopup__crumb__ = PcfComponent('#CreateReviewPopup-__crumb__');
	createReviewPopup_msgs = PcfButton('#CreateReviewPopup-_msgs');
}
