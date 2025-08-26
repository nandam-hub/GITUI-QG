import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewUWAuthorityProfile {
	newUWAuthorityProfileNewUWAuthorityProfile_UpLink = PcfButton('#NewUWAuthorityProfile-NewUWAuthorityProfile_UpLink');
	uWAuthorityProfileDetailScreenCancel = PcfButton('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-Cancel');
	uWAuthorityProfileDetailScreenEdit = PcfButton('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-Edit');
	newUWAuthorityProfileUWAuthorityProfileDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	profileDetailDVAuthorityGrantsLV = PcfListView('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-ProfileDetailDV-AuthorityGrantsLV');
	authorityGrantsLV_tbAdd = PcfButton('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-ProfileDetailDV-AuthorityGrantsLV_tb-Add');
	authorityGrantsLV_tbRemove = PcfButton('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-ProfileDetailDV-AuthorityGrantsLV_tb-Remove');
	profileDetailDVDescription = PcfTextInput('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-ProfileDetailDV-Description');
	profileDetailDVName = PcfTextInput('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-ProfileDetailDV-Name');
	uWAuthorityProfileDetailScreenUpdate = PcfButton('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-Update');
	uWAuthorityProfileDetailScreen_msgs = PcfButton('#NewUWAuthorityProfile-UWAuthorityProfileDetailScreen-_msgs');
	newUWAuthorityProfile_Paging = PcfButton('#NewUWAuthorityProfile-_Paging');
	newUWAuthorityProfile__crumb__ = PcfComponent('#NewUWAuthorityProfile-__crumb__');
}
