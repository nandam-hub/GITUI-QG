import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerDetailHistory {
	producerDetailHistoryScreenProducerDetailHistoryLV = PcfListView('#ProducerDetailHistory-ProducerDetailHistoryScreen-ProducerDetailHistoryLV');
	producerDetailHistoryScreen_msgs = PcfButton('#ProducerDetailHistory-ProducerDetailHistoryScreen-_msgs');
	producerDetailHistoryProducerDetailHistory_UpLink = PcfButton('#ProducerDetailHistory-ProducerDetailHistory_UpLink');
	producerDetailHistory_Paging = PcfButton('#ProducerDetailHistory-_Paging');
	producerDetailHistory__crumb__ = PcfComponent('#ProducerDetailHistory-__crumb__');
}
