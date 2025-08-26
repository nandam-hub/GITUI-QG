import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class IntentionalLogging {
	intentionalLoggingScreenIntentionalLoggingLV = PcfListView('#IntentionalLogging-IntentionalLoggingScreen-IntentionalLoggingLV');
	intentionalLoggingScreen_msgs = PcfButton('#IntentionalLogging-IntentionalLoggingScreen-_msgs');
	intentionalLoggingScreenglobalButtonOff = PcfButton('#IntentionalLogging-IntentionalLoggingScreen-globalButtonOff');
	intentionalLoggingScreenglobalButtonOn = PcfButton('#IntentionalLogging-IntentionalLoggingScreen-globalButtonOn');
	intentionalLoggingIntentionalLogging_UpLink = PcfButton('#IntentionalLogging-IntentionalLogging_UpLink');
	intentionalLogging_Paging = PcfButton('#IntentionalLogging-_Paging');
	intentionalLogging__crumb__ = PcfComponent('#IntentionalLogging-__crumb__');
}
