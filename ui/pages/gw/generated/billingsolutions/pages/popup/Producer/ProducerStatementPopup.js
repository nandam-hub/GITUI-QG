import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerStatementPopup {
	producerStatementPopupItemEventLV = PcfListView('#ProducerStatementPopup-ItemEventLV');
	itemEventLV_tbAggregationTypeSelector = PcfSelectInput('#ProducerStatementPopup-ItemEventLV_tb-AggregationTypeSelector');
	producerStatementPopupProducerStatementPopup_UpLink = PcfButton('#ProducerStatementPopup-ProducerStatementPopup_UpLink');
	producerStatementPopup_Paging = PcfButton('#ProducerStatementPopup-_Paging');
	producerStatementPopup__crumb__ = PcfComponent('#ProducerStatementPopup-__crumb__');
	producerStatementPopup_msgs = PcfButton('#ProducerStatementPopup-_msgs');
}
