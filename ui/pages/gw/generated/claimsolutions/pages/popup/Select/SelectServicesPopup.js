import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SelectServicesPopup {
	selectServicesPopupAvailableServicesDescription = PcfTextInput('#SelectServicesPopup-AvailableServicesDescription');
	selectServicesPopupCancel = PcfButton('#SelectServicesPopup-Cancel');
	selectServicesPopupEdit = PcfButton('#SelectServicesPopup-Edit');
	selectServicesPopupFilterKeyword = PcfTextInput('#SelectServicesPopup-FilterKeyword');
	selectServicesPopupFilterServices = PcfButton('#SelectServicesPopup-FilterServices');
	selectServicesPopupIncompatibleServicesAlert = PcfTextInput('#SelectServicesPopup-IncompatibleServicesAlert');
	selectServicesPopupNoAvailableServicesMessage = PcfTextInput('#SelectServicesPopup-NoAvailableServicesMessage');
	selectServicesPopupResetFilter = PcfButton('#SelectServicesPopup-ResetFilter');
	selectServicesPopupSelectServicesPopup_UpLink = PcfButton('#SelectServicesPopup-SelectServicesPopup_UpLink');
	selectServicesPopupSpecialistServiceTreeLV = PcfListView('#SelectServicesPopup-SpecialistServiceTreeLV');
	selectServicesPopupUpdate = PcfButton('#SelectServicesPopup-Update');
	selectServicesPopupUpdateServiceRequestServices = PcfButton('#SelectServicesPopup-UpdateServiceRequestServices');
	selectServicesPopup_Paging = PcfButton('#SelectServicesPopup-_Paging');
	selectServicesPopup__crumb__ = PcfComponent('#SelectServicesPopup-__crumb__');
	selectServicesPopup_msgs = PcfButton('#SelectServicesPopup-_msgs');
}
