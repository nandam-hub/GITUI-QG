import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewCollectionAgency {
	newCollectionAgencyScreenCancel = PcfButton('#NewCollectionAgency-NewCollectionAgencyScreen-Cancel');
	newCollectionAgencyNewCollectionAgencyScreenCollectionAgencyDetailDVName = PcfTextInput('#NewCollectionAgency-NewCollectionAgencyScreen-CollectionAgencyDetailDV-Name');
	newCollectionAgencyScreenEdit = PcfButton('#NewCollectionAgency-NewCollectionAgencyScreen-Edit');
	newCollectionAgencyScreenUpdate = PcfButton('#NewCollectionAgency-NewCollectionAgencyScreen-Update');
	newCollectionAgencyScreen_msgs = PcfButton('#NewCollectionAgency-NewCollectionAgencyScreen-_msgs');
	newCollectionAgencyNewCollectionAgency_UpLink = PcfButton('#NewCollectionAgency-NewCollectionAgency_UpLink');
	newCollectionAgency_Paging = PcfButton('#NewCollectionAgency-_Paging');
	newCollectionAgency__crumb__ = PcfComponent('#NewCollectionAgency-__crumb__');
}
