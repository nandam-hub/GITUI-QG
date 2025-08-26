import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class PlannedShutdownPopup {
	plannedShutdownPopupCustomMessage = PcfTextInput('#PlannedShutdownPopup-CustomMessage');
	plannedShutdownPopupCustomMessageChoice_Choice = PcfButton('#PlannedShutdownPopup-CustomMessageChoice_Choice');
	plannedShutdownPopupCustomMessageText = PcfTextInput('#PlannedShutdownPopup-CustomMessageText');
	plannedShutdownPopupPlannedShutdownPopup_UpLink = PcfButton('#PlannedShutdownPopup-PlannedShutdownPopup_UpLink');
	plannedShutdownPopupRollingUpgradeShutdown = PcfTextInput('#PlannedShutdownPopup-RollingUpgradeShutdown');
	plannedShutdownPopupRollingUpgradeShutdownChoice_Choice = PcfButton('#PlannedShutdownPopup-RollingUpgradeShutdownChoice_Choice');
	plannedShutdownPopupScaleInShutdown = PcfTextInput('#PlannedShutdownPopup-ScaleInShutdown');
	plannedShutdownPopupScaleInShutdownChoice_Choice = PcfButton('#PlannedShutdownPopup-ScaleInShutdownChoice_Choice');
	plannedShutdownPopupScheduleShutdown = PcfButton('#PlannedShutdownPopup-ScheduleShutdown');
	plannedShutdownPopupShutdownTime = PcfDateValueInput('#PlannedShutdownPopup-ShutdownTime');
	plannedShutdownPopupTerminateBatchProcesses = PcfCheckBox('#PlannedShutdownPopup-TerminateBatchProcesses');
	plannedShutdownPopup_Paging = PcfButton('#PlannedShutdownPopup-_Paging');
	plannedShutdownPopup__crumb__ = PcfComponent('#PlannedShutdownPopup-__crumb__');
	plannedShutdownPopup_msgs = PcfButton('#PlannedShutdownPopup-_msgs');
}
