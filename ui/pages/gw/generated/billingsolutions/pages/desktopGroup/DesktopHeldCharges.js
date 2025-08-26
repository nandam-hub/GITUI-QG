import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopHeldCharges {
	desktopHeldChargesScreenChargesLV = PcfListView('#DesktopHeldCharges-DesktopHeldChargesScreen-ChargesLV');
	desktopHeldChargesScreen_msgs = PcfButton('#DesktopHeldCharges-DesktopHeldChargesScreen-_msgs');
	desktopHeldChargesDesktopHeldCharges_UpLink = PcfButton('#DesktopHeldCharges-DesktopHeldCharges_UpLink');
	desktopHeldCharges_Paging = PcfButton('#DesktopHeldCharges-_Paging');
	desktopHeldCharges__crumb__ = PcfComponent('#DesktopHeldCharges-__crumb__');
}
