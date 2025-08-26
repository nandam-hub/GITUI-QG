import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UWAuthorityProfiles {
	profilesScreenCloneButton = PcfButton('#UWAuthorityProfiles-ProfilesScreen-CloneButton');
	profilesScreenDeleteButton = PcfButton('#UWAuthorityProfiles-ProfilesScreen-DeleteButton');
	profilesScreenNewButton = PcfButton('#UWAuthorityProfiles-ProfilesScreen-NewButton');
	profilesScreenProfilesLV = PcfListView('#UWAuthorityProfiles-ProfilesScreen-ProfilesLV');
	profilesScreen_msgs = PcfButton('#UWAuthorityProfiles-ProfilesScreen-_msgs');
	uWAuthorityProfilesUWAuthorityProfiles_UpLink = PcfButton('#UWAuthorityProfiles-UWAuthorityProfiles_UpLink');
	uWAuthorityProfiles_Paging = PcfButton('#UWAuthorityProfiles-_Paging');
	uWAuthorityProfiles__crumb__ = PcfComponent('#UWAuthorityProfiles-__crumb__');
}
