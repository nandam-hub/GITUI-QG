import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailDisbursements {
	accountDetailDisbursementsScreenDisbursementsLV = PcfListView('#AccountDetailDisbursements-AccountDetailDisbursementsScreen-DisbursementsLV');
	accountDetailDisbursementsScreen_msgs = PcfButton('#AccountDetailDisbursements-AccountDetailDisbursementsScreen-_msgs');
	accountDetailDisbursementsAccountDetailDisbursements_UpLink = PcfButton('#AccountDetailDisbursements-AccountDetailDisbursements_UpLink');
	accountDetailDisbursements_Paging = PcfButton('#AccountDetailDisbursements-_Paging');
	accountDetailDisbursements__crumb__ = PcfComponent('#AccountDetailDisbursements-__crumb__');
}
