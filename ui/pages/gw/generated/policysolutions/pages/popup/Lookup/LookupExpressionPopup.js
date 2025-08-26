import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class LookupExpressionPopup {
	lookupExpressionPopupCancel = PcfButton('#LookupExpressionPopup-Cancel');
	lookupExpressionPopupConditionValidationToolbarButtonSetHideValidation = PcfButton('#LookupExpressionPopup-ConditionValidationToolbarButtonSet-HideValidation');
	lookupExpressionPopupConditionValidationToolbarButtonSetShowValidation = PcfButton('#LookupExpressionPopup-ConditionValidationToolbarButtonSet-ShowValidation');
	createNewLookupToolbarCreateNewLookupButton = PcfButton('#LookupExpressionPopup-CreateNewLookupToolbar-CreateNewLookupButton');
	lookupExpressionPopupEdit = PcfButton('#LookupExpressionPopup-Edit');
	lookupExpressionPopupLookupExpressionPopup_UpLink = PcfButton('#LookupExpressionPopup-LookupExpressionPopup_UpLink');
	lookupExpressionPopupLookupMetaRefreshTag = PcfButton('#LookupExpressionPopup-LookupMetaRefreshTag');
	lookupMetaRefreshTagCloseBtn = PcfButton('#LookupExpressionPopup-LookupMetaRefreshTag-CloseBtn');
	lookupRequestDefDVLTDescritionID = PcfTextInput('#LookupExpressionPopup-LookupRequestDefDV-LTDescritionID');
	lookupRequestDefDVLookupContextHelp = PcfButton('#LookupExpressionPopup-LookupRequestDefDV-LookupContextHelp');
	lookupRequestDefDVRuleLookupRequestDefLV = PcfListView('#LookupExpressionPopup-LookupRequestDefDV-RuleLookupRequestDefLV');
	lookupExpressionPopupLookupTablesLV = PcfListView('#LookupExpressionPopup-LookupTablesLV');
	lookupExpressionPopupUpdate = PcfButton('#LookupExpressionPopup-Update');
	lookupExpressionPopup_Paging = PcfButton('#LookupExpressionPopup-_Paging');
	lookupExpressionPopup__crumb__ = PcfComponent('#LookupExpressionPopup-__crumb__');
	lookupExpressionPopup_msgs = PcfButton('#LookupExpressionPopup-_msgs');
}
