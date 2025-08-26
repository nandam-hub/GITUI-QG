import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class RatingCostDetailPopup {
	ratingCostDetailPopupActualAdjRateHeader = PcfButton('#RatingCostDetailPopup-ActualAdjRateHeader');
	ratingCostDetailPopupActualAmountHeader = PcfButton('#RatingCostDetailPopup-ActualAmountHeader');
	ratingCostDetailPopupActualBaseRateHeader = PcfButton('#RatingCostDetailPopup-ActualBaseRateHeader');
	ratingCostDetailPopupActualTermAmountHeader = PcfButton('#RatingCostDetailPopup-ActualTermAmountHeader');
	ratingCostDetailPopupBasisHeader = PcfButton('#RatingCostDetailPopup-BasisHeader');
	ratingCostDetailPopupBillGroup = PcfTextInput('#RatingCostDetailPopup-BillGroup');
	ratingCostDetailPopupChargeGroup = PcfTextInput('#RatingCostDetailPopup-ChargeGroup');
	ratingCostDetailPopupChargePattern = PcfSelectInput('#RatingCostDetailPopup-ChargePattern');
	ratingCostDetailPopupEffDateHeader = PcfButton('#RatingCostDetailPopup-EffDateHeader');
	ratingCostDetailPopupExpDateHeader = PcfButton('#RatingCostDetailPopup-ExpDateHeader');
	ratingCostDetailPopupOverrideReasonHeader = PcfButton('#RatingCostDetailPopup-OverrideReasonHeader');
	ratingCostDetailPopupProrationHeader = PcfButton('#RatingCostDetailPopup-ProrationHeader');
	ratingCostDetailPopupRateAmountType = PcfSelectInput('#RatingCostDetailPopup-RateAmountType');
	ratingCostDetailPopupRatingCostDetailPopup_UpLink = PcfButton('#RatingCostDetailPopup-RatingCostDetailPopup_UpLink');
	ratingCostDetailPopup_ListPaging = PcfButton('#RatingCostDetailPopup-_ListPaging');
	ratingCostDetailPopup_Paging = PcfButton('#RatingCostDetailPopup-_Paging');
	ratingCostDetailPopup__crumb__ = PcfComponent('#RatingCostDetailPopup-__crumb__');
	ratingCostDetailPopup_msgs = PcfButton('#RatingCostDetailPopup-_msgs');
}
