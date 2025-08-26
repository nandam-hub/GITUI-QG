import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EditPCSettingsPopup {
	editPCSettingsPopupCancel = PcfButton('#EditPCSettingsPopup-Cancel');
	editPCSettingsPopupEdit = PcfButton('#EditPCSettingsPopup-Edit');
	editPCSettingsPopupEditPCSettingsPopup_UpLink = PcfButton('#EditPCSettingsPopup-EditPCSettingsPopup_UpLink');
	editPCSettingsPopupEnabledForRestAPI = PcfComponent('#EditPCSettingsPopup-EnabledForRestAPI');
	editPCSettingsPopupEventAware = PcfComponent('#EditPCSettingsPopup-EventAware');
	editPCSettingsPopupUpdate = PcfButton('#EditPCSettingsPopup-Update');
	editPCSettingsPopup_Paging = PcfButton('#EditPCSettingsPopup-_Paging');
	editPCSettingsPopup__crumb__ = PcfComponent('#EditPCSettingsPopup-__crumb__');
	editPCSettingsPopup_msgs = PcfButton('#EditPCSettingsPopup-_msgs');
}
