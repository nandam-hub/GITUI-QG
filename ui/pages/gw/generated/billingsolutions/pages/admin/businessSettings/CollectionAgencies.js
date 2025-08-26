import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CollectionAgencies {
	collectionAgenciesScreenCollectionAgenciesLV = PcfListView('#CollectionAgencies-CollectionAgenciesScreen-CollectionAgenciesLV');
	collectionAgenciesToolbarremoveCollectionAgenciesButton = PcfButton('#CollectionAgencies-CollectionAgenciesScreen-CollectionAgenciesToolbar-removeCollectionAgenciesButton');
	collectionAgenciesScreen_msgs = PcfButton('#CollectionAgencies-CollectionAgenciesScreen-_msgs');
	collectionAgenciesCollectionAgencies_UpLink = PcfButton('#CollectionAgencies-CollectionAgencies_UpLink');
	collectionAgencies_Paging = PcfButton('#CollectionAgencies-_Paging');
	collectionAgencies__crumb__ = PcfComponent('#CollectionAgencies-__crumb__');
}
