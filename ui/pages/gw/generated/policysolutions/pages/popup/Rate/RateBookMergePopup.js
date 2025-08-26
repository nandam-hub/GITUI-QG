import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RateBookMergePopup {
	rateBookMergePopupCancel = PcfButton('#RateBookMergePopup-Cancel');
	rateBookMergePopupConflictToolTipText = PcfButton('#RateBookMergePopup-ConflictToolTipText');
	rateBookMergePopupEdit = PcfButton('#RateBookMergePopup-Edit');
	rateBookMergePopupFirstRateBook = PcfTextInput('#RateBookMergePopup-FirstRateBook');
	rateBookMergePopupPropertyBookEdition = PcfTextInput('#RateBookMergePopup-PropertyBookEdition');
	rateBookMergePopupRateBookMergePopup_UpLink = PcfButton('#RateBookMergePopup-RateBookMergePopup_UpLink');
	rateBookMergePopupRateBookPropertiesLV = PcfListView('#RateBookMergePopup-RateBookPropertiesLV');
	rateBookMergePopupRateRoutinesLV = PcfListView('#RateBookMergePopup-RateRoutinesLV');
	rateBookMergePopupRateTablesLV = PcfListView('#RateBookMergePopup-RateTablesLV');
	rateBookMergePopupSecondRateBook = PcfTextInput('#RateBookMergePopup-SecondRateBook');
	rateBookMergePopupShowAllRows = PcfComponent('#RateBookMergePopup-ShowAllRows');
	rateBookMergePopupUpdate = PcfButton('#RateBookMergePopup-Update');
	rateBookMergePopup_Paging = PcfButton('#RateBookMergePopup-_Paging');
	rateBookMergePopup_ViewDetail = PcfButton('#RateBookMergePopup-_ViewDetail');
	rateBookMergePopup__crumb__ = PcfComponent('#RateBookMergePopup-__crumb__');
	rateBookMergePopup_msgs = PcfButton('#RateBookMergePopup-_msgs');
}
