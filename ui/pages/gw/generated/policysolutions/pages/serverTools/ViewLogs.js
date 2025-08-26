import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ViewLogs {
	viewLogsScreenLogDisplay = PcfTextInput('#ViewLogs-ViewLogsScreen-LogDisplay');
	viewLogsScreenLogFile = PcfSelectInput('#ViewLogs-ViewLogsScreen-LogFile');
	viewLogsScreenLogFilter = PcfTextInput('#ViewLogs-ViewLogsScreen-LogFilter');
	viewLogsScreenMaxLines = PcfTextInput('#ViewLogs-ViewLogsScreen-MaxLines');
	viewLogsScreenStreamLogs = PcfButton('#ViewLogs-ViewLogsScreen-StreamLogs');
	viewLogsScreenViewLogs = PcfButton('#ViewLogs-ViewLogsScreen-ViewLogs');
	viewLogsScreen_msgs = PcfButton('#ViewLogs-ViewLogsScreen-_msgs');
	viewLogsViewLogs_UpLink = PcfButton('#ViewLogs-ViewLogs_UpLink');
	viewLogs_Paging = PcfButton('#ViewLogs-_Paging');
	viewLogs__crumb__ = PcfComponent('#ViewLogs-__crumb__');
}
