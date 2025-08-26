import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopClaims {
	desktopClaimsScreenDesktopClaimsLV = PcfListView('#DesktopClaims-DesktopClaimsScreen-DesktopClaimsLV');
	desktopClaimsScreenDesktopClaims_AssignButton = PcfButton('#DesktopClaims-DesktopClaimsScreen-DesktopClaims_AssignButton');
	desktopClaimsScreenDesktopClaims_PrintButton = PcfButton('#DesktopClaims-DesktopClaimsScreen-DesktopClaims_PrintButton');
	desktopClaimsScreen_msgs = PcfButton('#DesktopClaims-DesktopClaimsScreen-_msgs');
	desktopClaimsDesktopClaims_UpLink = PcfButton('#DesktopClaims-DesktopClaims_UpLink');
	desktopClaims_Paging = PcfButton('#DesktopClaims-_Paging');
	desktopClaims__crumb__ = PcfComponent('#DesktopClaims-__crumb__');
}
