import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UnusedServerRolesPopup {
	unusedServerRolesPopupUnusedServerRolesLV = PcfListView('#UnusedServerRolesPopup-UnusedServerRolesLV');
	unusedServerRolesPopupUnusedServerRolesPopup_UpLink = PcfButton('#UnusedServerRolesPopup-UnusedServerRolesPopup_UpLink');
	unusedServerRolesPopup_Paging = PcfButton('#UnusedServerRolesPopup-_Paging');
	unusedServerRolesPopup__crumb__ = PcfComponent('#UnusedServerRolesPopup-__crumb__');
	unusedServerRolesPopup_msgs = PcfButton('#UnusedServerRolesPopup-_msgs');
}
