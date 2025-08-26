import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerDisbursements {
	producerDisbursementsScreenDisbursementsLV = PcfListView('#ProducerDisbursements-ProducerDisbursementsScreen-DisbursementsLV');
	producerDisbursementsScreen_msgs = PcfButton('#ProducerDisbursements-ProducerDisbursementsScreen-_msgs');
	producerDisbursementsProducerDisbursements_UpLink = PcfButton('#ProducerDisbursements-ProducerDisbursements_UpLink');
	producerDisbursements_Paging = PcfButton('#ProducerDisbursements-_Paging');
	producerDisbursements__crumb__ = PcfComponent('#ProducerDisbursements-__crumb__');
}
