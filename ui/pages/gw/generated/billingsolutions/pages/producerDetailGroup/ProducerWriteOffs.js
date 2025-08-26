import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerWriteOffs {
	producerWriteOffsScreenProducerWriteOffsLV = PcfListView('#ProducerWriteOffs-ProducerWriteOffsScreen-ProducerWriteOffsLV');
	producerWriteOffsLV_tbWriteOffAgeRestriction = PcfSelectInput('#ProducerWriteOffs-ProducerWriteOffsScreen-ProducerWriteOffsLV_tb-WriteOffAgeRestriction');
	producerWriteOffsScreen_msgs = PcfButton('#ProducerWriteOffs-ProducerWriteOffsScreen-_msgs');
	producerWriteOffsProducerWriteOffs_UpLink = PcfButton('#ProducerWriteOffs-ProducerWriteOffs_UpLink');
	producerWriteOffs_Paging = PcfButton('#ProducerWriteOffs-_Paging');
	producerWriteOffs__crumb__ = PcfComponent('#ProducerWriteOffs-__crumb__');
}
