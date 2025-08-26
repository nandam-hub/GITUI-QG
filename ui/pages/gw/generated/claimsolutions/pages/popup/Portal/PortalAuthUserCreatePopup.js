import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class PortalAuthUserCreatePopup {
	portalAuthUserCreatePopupPortalAuthUserCreatePopup_UpLink = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserCreatePopup_UpLink');
	portalAuthUserDVUserEmail = PcfTextInput('#PortalAuthUserCreatePopup-PortalAuthUserDV-UserEmail');
	portalAuthUserDVUserFirstName = PcfTextInput('#PortalAuthUserCreatePopup-PortalAuthUserDV-UserFirstName');
	portalAuthUserDVUserPassword = PcfTextInput('#PortalAuthUserCreatePopup-PortalAuthUserDV-UserPassword');
	portalAuthUserDVUserSurname = PcfTextInput('#PortalAuthUserCreatePopup-PortalAuthUserDV-UserSurname');
	portalAuthUserDV_tbCancel = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserDV_tb-Cancel');
	portalAuthUserDV_tbEdit = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserDV_tb-Edit');
	portalAuthUserDV_tbUpdate = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserDV_tb-Update');
	portalAuthUserCreatePopupPortalAuthUserGrantedAuthoritiesLV = PcfListView('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV');
	portalAuthUserGrantedAuthoritiesLV_tbAddAuthorityButton = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-AddAuthorityButton');
	addAuthorityButtonPortalAuthUserGrantedAuthoritiesMenuItemSet = PcfComponent('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-AddAuthorityButton-PortalAuthUserGrantedAuthoritiesMenuItemSet');
	portalAuthUserGrantedAuthoritiesMenuItemSetAddNewAuthorityAccountHolderOption = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-AddAuthorityButton-PortalAuthUserGrantedAuthoritiesMenuItemSet-AddNewAuthorityAccountHolderOption');
	portalAuthUserGrantedAuthoritiesMenuItemSetAddNewAuthorityPolicyholderOption = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-AddAuthorityButton-PortalAuthUserGrantedAuthoritiesMenuItemSet-AddNewAuthorityPolicyholderOption');
	portalAuthUserGrantedAuthoritiesMenuItemSetAddNewAuthorityProducerOption = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-AddAuthorityButton-PortalAuthUserGrantedAuthoritiesMenuItemSet-AddNewAuthorityProducerOption');
	portalAuthUserGrantedAuthoritiesMenuItemSetAddNewAuthorityVendorOption = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-AddAuthorityButton-PortalAuthUserGrantedAuthoritiesMenuItemSet-AddNewAuthorityVendorOption');
	portalAuthUserGrantedAuthoritiesLV_tbdeleteAuthoritiesButton = PcfButton('#PortalAuthUserCreatePopup-PortalAuthUserGrantedAuthoritiesLV_tb-deleteAuthoritiesButton');
	portalAuthUserCreatePopup_Paging = PcfButton('#PortalAuthUserCreatePopup-_Paging');
	portalAuthUserCreatePopup__crumb__ = PcfComponent('#PortalAuthUserCreatePopup-__crumb__');
	portalAuthUserCreatePopup_msgs = PcfButton('#PortalAuthUserCreatePopup-_msgs');
}
