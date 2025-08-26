import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SetLogLevel {
	setLogLevelScreenCurActualLevel = PcfTextInput('#SetLogLevel-SetLogLevelScreen-CurActualLevel');
	setLogLevelScreenCurConfigLevel = PcfTextInput('#SetLogLevel-SetLogLevelScreen-CurConfigLevel');
	setLogLevelScreenLogger = PcfSelectInput('#SetLogLevel-SetLogLevelScreen-Logger');
	setLogLevelScreenNewLevel = PcfSelectInput('#SetLogLevel-SetLogLevelScreen-NewLevel');
	setLogLevelScreenSetLevel = PcfButton('#SetLogLevel-SetLogLevelScreen-SetLevel');
	setLogLevelScreen_msgs = PcfButton('#SetLogLevel-SetLogLevelScreen-_msgs');
	setLogLevelSetLogLevel_UpLink = PcfButton('#SetLogLevel-SetLogLevel_UpLink');
	setLogLevel_Paging = PcfButton('#SetLogLevel-_Paging');
	setLogLevel__crumb__ = PcfComponent('#SetLogLevel-__crumb__');
}
