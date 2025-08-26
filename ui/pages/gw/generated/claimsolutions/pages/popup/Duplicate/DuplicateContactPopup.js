import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DuplicateContactPopup {
	duplicateContactPopupDuplicateContactLV = PcfListView('#DuplicateContactPopup-DuplicateContactLV');
	duplicateContactPopupDuplicateContactPopup_UpLink = PcfButton('#DuplicateContactPopup-DuplicateContactPopup_UpLink');
	duplicateContactPopupDuplicateContact_CancelButton = PcfButton('#DuplicateContactPopup-DuplicateContact_CancelButton');
	duplicateContactPopup_Paging = PcfButton('#DuplicateContactPopup-_Paging');
	duplicateContactPopup__crumb__ = PcfComponent('#DuplicateContactPopup-__crumb__');
	duplicateContactPopup_msgs = PcfButton('#DuplicateContactPopup-_msgs');
}
