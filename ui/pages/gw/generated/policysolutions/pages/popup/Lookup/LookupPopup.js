import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class LookupPopup {
	lookupPopupLookupPopup_UpLink = PcfButton('#LookupPopup-LookupPopup_UpLink');
	lookupScreenCancel = PcfButton('#LookupPopup-LookupScreen-Cancel');
	lookupScreenDescription = PcfTextInput('#LookupPopup-LookupScreen-Description');
	lookupScreenEdit = PcfButton('#LookupPopup-LookupScreen-Edit');
	lookupScreenExistenceAlert = PcfButton('#LookupPopup-LookupScreen-ExistenceAlert');
	existenceAlertCloseBtn = PcfButton('#LookupPopup-LookupScreen-ExistenceAlert-CloseBtn');
	lookupScreenExistenceButton = PcfComponent('#LookupPopup-LookupScreen-ExistenceButton');
	lookupScreenInUseLookupAlert = PcfButton('#LookupPopup-LookupScreen-InUseLookupAlert');
	inUseLookupAlertCloseBtn = PcfButton('#LookupPopup-LookupScreen-InUseLookupAlert-CloseBtn');
	addRemoveToolbarAddLookupCol = PcfButton('#LookupPopup-LookupScreen-LookupColumnPanelSet-AddRemoveToolbar-AddLookupCol');
	addRemoveToolbarDeleteLookupCol = PcfButton('#LookupPopup-LookupScreen-LookupColumnPanelSet-AddRemoveToolbar-DeleteLookupCol');
	lookupColumnPanelSetLookupColumnsLV = PcfListView('#LookupPopup-LookupScreen-LookupColumnPanelSet-LookupColumnsLV');
	lookupScreenLookupName = PcfTextInput('#LookupPopup-LookupScreen-LookupName');
	lookupScreenLookupTableCode = PcfTextInput('#LookupPopup-LookupScreen-LookupTableCode');
	lookupScreenSourceTable = PcfSelectInput('#LookupPopup-LookupScreen-SourceTable');
	lookupScreenUpdate = PcfButton('#LookupPopup-LookupScreen-Update');
	lookupScreen_msgs = PcfButton('#LookupPopup-LookupScreen-_msgs');
	lookupPopup_Paging = PcfButton('#LookupPopup-_Paging');
	lookupPopup__crumb__ = PcfComponent('#LookupPopup-__crumb__');
}
