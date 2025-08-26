import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class HoldDetailsPopup {
	holdDetailsPopupHoldDetailsPopup_UpLink = PcfButton('#HoldDetailsPopup-HoldDetailsPopup_UpLink');
	holdDetailsScreenCancel = PcfButton('#HoldDetailsPopup-HoldDetailsScreen-Cancel');
	holdDetailsScreenEdit = PcfButton('#HoldDetailsPopup-HoldDetailsScreen-Edit');
	holdDVHoldRelatedEntitiesLV = PcfListView('#HoldDetailsPopup-HoldDetailsScreen-HoldDV-HoldRelatedEntitiesLV');
	holdDetailsScreenHoldDetailsPopup_NoRelatedEntitiesAlertBar = PcfButton('#HoldDetailsPopup-HoldDetailsScreen-HoldDetailsPopup_NoRelatedEntitiesAlertBar');
	holdDetailsPopup_NoRelatedEntitiesAlertBarCloseBtn = PcfButton('#HoldDetailsPopup-HoldDetailsScreen-HoldDetailsPopup_NoRelatedEntitiesAlertBar-CloseBtn');
	holdDetailsScreenUpdate = PcfButton('#HoldDetailsPopup-HoldDetailsScreen-Update');
	holdDetailsScreen_msgs = PcfButton('#HoldDetailsPopup-HoldDetailsScreen-_msgs');
	holdDetailsPopup_Paging = PcfButton('#HoldDetailsPopup-_Paging');
	holdDetailsPopup__crumb__ = PcfComponent('#HoldDetailsPopup-__crumb__');
}
