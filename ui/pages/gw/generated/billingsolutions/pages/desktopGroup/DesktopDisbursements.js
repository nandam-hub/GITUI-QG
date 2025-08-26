import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopDisbursements {
	desktopDisbursementsScreenDesktopDisbursementsLV = PcfListView('#DesktopDisbursements-DesktopDisbursementsScreen-DesktopDisbursementsLV');
	desktopDisbursementsLV_tbNewDisbursement = PcfButton('#DesktopDisbursements-DesktopDisbursementsScreen-DesktopDisbursementsLV_tb-NewDisbursement');
	desktopDisbursementsLV_tbdisbursementDisplayDateRange = PcfSelectInput('#DesktopDisbursements-DesktopDisbursementsScreen-DesktopDisbursementsLV_tb-disbursementDisplayDateRange');
	desktopDisbursementsLV_tbdisbursementDisplayStatus = PcfSelectInput('#DesktopDisbursements-DesktopDisbursementsScreen-DesktopDisbursementsLV_tb-disbursementDisplayStatus');
	desktopDisbursementsScreen_msgs = PcfButton('#DesktopDisbursements-DesktopDisbursementsScreen-_msgs');
	desktopDisbursementsDesktopDisbursements_UpLink = PcfButton('#DesktopDisbursements-DesktopDisbursements_UpLink');
	desktopDisbursements_Paging = PcfButton('#DesktopDisbursements-_Paging');
	desktopDisbursements__crumb__ = PcfComponent('#DesktopDisbursements-__crumb__');
}
