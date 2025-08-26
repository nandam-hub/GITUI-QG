import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class RatingWorksheetPopup {
	ratingWorksheetPopupCollapse = PcfButton('#RatingWorksheetPopup-Collapse');
	ratingWorksheetPopupDownloadButton = PcfButton('#RatingWorksheetPopup-DownloadButton');
	downloadButtonDownloadCSVMenuItem = PcfComponent('#RatingWorksheetPopup-DownloadButton-DownloadCSVMenuItem');
	downloadButtonDownloadHTMLMenuItem = PcfComponent('#RatingWorksheetPopup-DownloadButton-DownloadHTMLMenuItem');
	ratingWorksheetPopupExpand = PcfButton('#RatingWorksheetPopup-Expand');
	ratingWorksheetPopupRatingWorksheetPopup_UpLink = PcfButton('#RatingWorksheetPopup-RatingWorksheetPopup_UpLink');
	ratingWorksheetPopupShowHideConditionalsButton = PcfButton('#RatingWorksheetPopup-ShowHideConditionalsButton');
	ratingWorksheetPopupWorksheetLV = PcfListView('#RatingWorksheetPopup-WorksheetLV');
	ratingWorksheetPopup_Paging = PcfButton('#RatingWorksheetPopup-_Paging');
	ratingWorksheetPopup__crumb__ = PcfComponent('#RatingWorksheetPopup-__crumb__');
	ratingWorksheetPopup_msgs = PcfButton('#RatingWorksheetPopup-_msgs');
}
