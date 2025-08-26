import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RatingCostBreakdownPopup {
	ratingCostBreakdownPopupAmount = PcfTextInput('#RatingCostBreakdownPopup-Amount');
	ratingCostBreakdownPopupAmountHeading = PcfTextInput('#RatingCostBreakdownPopup-AmountHeading');
	ratingCostBreakdownPopupCurrentTerm = PcfTextInput('#RatingCostBreakdownPopup-CurrentTerm');
	ratingCostBreakdownPopupCurrentTermHeading = PcfTextInput('#RatingCostBreakdownPopup-CurrentTermHeading');
	ratingCostBreakdownPopupDescription = PcfTextInput('#RatingCostBreakdownPopup-Description');
	ratingCostBreakdownPopupGroupHeading = PcfTextInput('#RatingCostBreakdownPopup-GroupHeading');
	ratingCostBreakdownPopupRatingCostBreakdownPopup_UpLink = PcfButton('#RatingCostBreakdownPopup-RatingCostBreakdownPopup_UpLink');
	ratingCostBreakdownPopupSettlementAmount = PcfTextInput('#RatingCostBreakdownPopup-SettlementAmount');
	ratingCostBreakdownPopupSettlementAmountHeading = PcfTextInput('#RatingCostBreakdownPopup-SettlementAmountHeading');
	ratingCostBreakdownPopupTotal = PcfTextInput('#RatingCostBreakdownPopup-Total');
	ratingCostBreakdownPopupType = PcfTextInput('#RatingCostBreakdownPopup-Type');
	ratingCostBreakdownPopup_ListPaging = PcfButton('#RatingCostBreakdownPopup-_ListPaging');
	ratingCostBreakdownPopup_Paging = PcfButton('#RatingCostBreakdownPopup-_Paging');
	ratingCostBreakdownPopup_ViewDetail = PcfButton('#RatingCostBreakdownPopup-_ViewDetail');
	ratingCostBreakdownPopup__crumb__ = PcfComponent('#RatingCostBreakdownPopup-__crumb__');
	ratingCostBreakdownPopup_msgs = PcfButton('#RatingCostBreakdownPopup-_msgs');
}
