import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CollectionAgencyDetailPopup {
	collectionAgencyDetailPopupCollectionAgencyDetailPopup_UpLink = PcfButton('#CollectionAgencyDetailPopup-CollectionAgencyDetailPopup_UpLink');
	collectionAgencyDetailScreenCancel = PcfButton('#CollectionAgencyDetailPopup-CollectionAgencyDetailScreen-Cancel');
	collectionAgencyDetailScreenCollectionAgencyAccountsLV = PcfListView('#CollectionAgencyDetailPopup-CollectionAgencyDetailScreen-CollectionAgencyAccountsLV');
	collectionAgencyDetailDVName = PcfTextInput('#CollectionAgencyDetailPopup-CollectionAgencyDetailScreen-CollectionAgencyDetailDV-Name');
	collectionAgencyDetailScreenEdit = PcfButton('#CollectionAgencyDetailPopup-CollectionAgencyDetailScreen-Edit');
	collectionAgencyDetailScreenUpdate = PcfButton('#CollectionAgencyDetailPopup-CollectionAgencyDetailScreen-Update');
	collectionAgencyDetailScreen_msgs = PcfButton('#CollectionAgencyDetailPopup-CollectionAgencyDetailScreen-_msgs');
	collectionAgencyDetailPopup_Paging = PcfButton('#CollectionAgencyDetailPopup-_Paging');
	collectionAgencyDetailPopup__crumb__ = PcfComponent('#CollectionAgencyDetailPopup-__crumb__');
}
