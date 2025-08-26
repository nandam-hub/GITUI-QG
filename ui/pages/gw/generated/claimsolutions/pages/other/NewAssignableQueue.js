import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewAssignableQueue {
	assignableQueueDetailDVDescription = PcfTextInput('#NewAssignableQueue-GroupDetail_QueueDetailScreen-AssignableQueueDetailDV-Description');
	assignableQueueDetailDVName = PcfTextInput('#NewAssignableQueue-GroupDetail_QueueDetailScreen-AssignableQueueDetailDV-Name');
	assignableQueueDetailDVSubGroupVisible = PcfComponent('#NewAssignableQueue-GroupDetail_QueueDetailScreen-AssignableQueueDetailDV-SubGroupVisible');
	groupDetail_QueueDetailScreenCancel = PcfButton('#NewAssignableQueue-GroupDetail_QueueDetailScreen-Cancel');
	groupDetail_QueueDetailScreenEdit = PcfButton('#NewAssignableQueue-GroupDetail_QueueDetailScreen-Edit');
	groupDetail_QueueDetailScreenUpdate = PcfButton('#NewAssignableQueue-GroupDetail_QueueDetailScreen-Update');
	groupDetail_QueueDetailScreen_msgs = PcfButton('#NewAssignableQueue-GroupDetail_QueueDetailScreen-_msgs');
	newAssignableQueueNewAssignableQueue_UpLink = PcfButton('#NewAssignableQueue-NewAssignableQueue_UpLink');
	newAssignableQueue_Paging = PcfButton('#NewAssignableQueue-_Paging');
	newAssignableQueue__crumb__ = PcfComponent('#NewAssignableQueue-__crumb__');
}
