import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountingConfig {
	accountingConfigCVChargesCardTab = PcfButton('#AccountingConfig-AccountingConfigScreen-AccountingConfigCV-ChargesCardTab');
	accountingConfigCVChargesLV = PcfListView('#AccountingConfig-AccountingConfigScreen-AccountingConfigCV-ChargesLV');
	accountingConfigCVTAccountsCardTab = PcfButton('#AccountingConfig-AccountingConfigScreen-AccountingConfigCV-TAccountsCardTab');
	accountingConfigCVTAccountsLV = PcfListView('#AccountingConfig-AccountingConfigScreen-AccountingConfigCV-TAccountsLV');
	accountingConfigCVTransactionsCardTab = PcfButton('#AccountingConfig-AccountingConfigScreen-AccountingConfigCV-TransactionsCardTab');
	accountingConfigCVTransactionsLV = PcfListView('#AccountingConfig-AccountingConfigScreen-AccountingConfigCV-TransactionsLV');
	accountingConfigScreen_msgs = PcfButton('#AccountingConfig-AccountingConfigScreen-_msgs');
	accountingConfigAccountingConfig_UpLink = PcfButton('#AccountingConfig-AccountingConfig_UpLink');
	accountingConfig_Paging = PcfButton('#AccountingConfig-_Paging');
	accountingConfig__crumb__ = PcfComponent('#AccountingConfig-__crumb__');
}
