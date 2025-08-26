import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MicrosoftDriverLogging {
	mSDriverLoggingDVSetLoggingLevel = PcfButton('#MicrosoftDriverLogging-MSDriverLoggingDV-SetLoggingLevel');
	mSDriverLoggingDVinstructions0 = PcfTextInput('#MicrosoftDriverLogging-MSDriverLoggingDV-instructions0');
	mSDriverLoggingDVinstructions2 = PcfTextInput('#MicrosoftDriverLogging-MSDriverLoggingDV-instructions2');
	mSDriverLoggingDVinstructions3 = PcfTextInput('#MicrosoftDriverLogging-MSDriverLoggingDV-instructions3');
	mSDriverLoggingDVinstructions4 = PcfTextInput('#MicrosoftDriverLogging-MSDriverLoggingDV-instructions4');
	mSDriverLoggingDVloggingFormat = PcfSelectInput('#MicrosoftDriverLogging-MSDriverLoggingDV-loggingFormat');
	mSDriverLoggingDVloggingLevel = PcfSelectInput('#MicrosoftDriverLogging-MSDriverLoggingDV-loggingLevel');
	mSDriverLoggingDVtopNHotObjects = PcfTextInput('#MicrosoftDriverLogging-MSDriverLoggingDV-topNHotObjects');
	microsoftDriverLoggingMicrosoftDriverLogging_UpLink = PcfButton('#MicrosoftDriverLogging-MicrosoftDriverLogging_UpLink');
	microsoftDriverLogging_Paging = PcfButton('#MicrosoftDriverLogging-_Paging');
	microsoftDriverLogging__crumb__ = PcfComponent('#MicrosoftDriverLogging-__crumb__');
	microsoftDriverLogging_msgs = PcfButton('#MicrosoftDriverLogging-_msgs');
	microsoftDriverLoggingmsgsLV = PcfListView('#MicrosoftDriverLogging-msgsLV');
}
