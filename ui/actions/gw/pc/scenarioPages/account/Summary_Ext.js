import { PcfComponent } from '@gtui/gt-ui-framework';
import {Summary} from '../../../../../../ui/pages/gw/generated/policysolutions/pages/account/Summary'

export class Summary_Ext extends Summary {
	accountDetailsDetailViewTile_DVAccountNumber = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountNumber > div > div');
	accountHolder = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountHolder_button')
	accountStatus = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountStatus > div > div')
	accountSummaryHeader = PcfComponent('#AccountFile_Summary-ttlBar')
	policySummaryHeader = PcfComponent('#PolicyFile_Summary-ttlBar')
	activitiesAdded = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-CurrentActivitiesAccountListViewTile-CurrentActivitiesAccountListViewTile_LV-0-Subject_button')
}


