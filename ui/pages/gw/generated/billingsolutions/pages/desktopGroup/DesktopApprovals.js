import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopApprovals {
	desktopApprovalsScreenDesktopApprovalsLV = PcfListView('#DesktopApprovals-DesktopApprovalsScreen-DesktopApprovalsLV');
	desktopApprovalsScreen_msgs = PcfButton('#DesktopApprovals-DesktopApprovalsScreen-_msgs');
	desktopApprovalsDesktopApprovals_UpLink = PcfButton('#DesktopApprovals-DesktopApprovals_UpLink');
	desktopApprovals_Paging = PcfButton('#DesktopApprovals-_Paging');
	desktopApprovals__crumb__ = PcfComponent('#DesktopApprovals-__crumb__');
}
