import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class LookupPage {
	lookupPageCreateButton = PcfButton('#LookupPage-CreateButton');
	lookupPageDeleteAlert = PcfButton('#LookupPage-DeleteAlert');
	deleteAlertCloseBtn = PcfButton('#LookupPage-DeleteAlert-CloseBtn');
	lookupPageLookupPage_UpLink = PcfButton('#LookupPage-LookupPage_UpLink');
	lookupPageManageLV = PcfListView('#LookupPage-ManageLV');
	lookupPageRemoveButton = PcfButton('#LookupPage-RemoveButton');
	lookupPage_Paging = PcfButton('#LookupPage-_Paging');
	lookupPage__crumb__ = PcfComponent('#LookupPage-__crumb__');
	lookupPage_msgs = PcfButton('#LookupPage-_msgs');
}
