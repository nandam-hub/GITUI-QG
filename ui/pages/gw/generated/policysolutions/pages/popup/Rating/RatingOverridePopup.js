import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RatingOverridePopup {
	ratingOverridePopupCancel = PcfButton('#RatingOverridePopup-Cancel');
	ratingOverridePopupClearAllButton = PcfButton('#RatingOverridePopup-ClearAllButton');
	ratingOverridePopupEdit = PcfButton('#RatingOverridePopup-Edit');
	ratingOverridePanelSetAPDRatingOverrideCostLV = PcfListView('#RatingOverridePopup-RatingOverridePanelSet-APDRatingOverrideCostLV');
	ratingOverridePopupRatingOverridePopup_UpLink = PcfButton('#RatingOverridePopup-RatingOverridePopup_UpLink');
	ratingOverridePopupUpdate = PcfButton('#RatingOverridePopup-Update');
	ratingOverridePopup_Paging = PcfButton('#RatingOverridePopup-_Paging');
	ratingOverridePopup__crumb__ = PcfComponent('#RatingOverridePopup-__crumb__');
	ratingOverridePopup_msgs = PcfButton('#RatingOverridePopup-_msgs');
}
