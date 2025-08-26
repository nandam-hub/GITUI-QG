import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class UnderwritingFiles {
	renewalManagerScreenRenewalManagerLV = PcfListView('#UnderwritingFiles-RenewalManagerScreen-RenewalManagerLV');
	renewalManagerScreen_msgs = PcfButton('#UnderwritingFiles-RenewalManagerScreen-_msgs');
	underwritingFilesUnderwritingFiles_UpLink = PcfButton('#UnderwritingFiles-UnderwritingFiles_UpLink');
	underwritingFiles_Paging = PcfButton('#UnderwritingFiles-_Paging');
	underwritingFiles__crumb__ = PcfComponent('#UnderwritingFiles-__crumb__');
}
