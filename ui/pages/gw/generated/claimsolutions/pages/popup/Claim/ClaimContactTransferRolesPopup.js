import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimContactTransferRolesPopup {
	claimContactTransferRolesPopupAvailableClaimContactsLV = PcfListView('#ClaimContactTransferRolesPopup-AvailableClaimContactsLV');
	availableClaimContactsLV_tbAddToSourceContacts = PcfButton('#ClaimContactTransferRolesPopup-AvailableClaimContactsLV_tb-AddToSourceContacts');
	claimContactTransferRolesPopupCancelTransferRolesButton = PcfButton('#ClaimContactTransferRolesPopup-CancelTransferRolesButton');
	claimContactTransferRolesPopupClaimContactTransferRolesPopup_UpLink = PcfButton('#ClaimContactTransferRolesPopup-ClaimContactTransferRolesPopup_UpLink');
	claimContactTransferRolesPopupPerformContactRoleTransferButton = PcfButton('#ClaimContactTransferRolesPopup-PerformContactRoleTransferButton');
	claimContactTransferRolesPopupSourceClaimContactsLV = PcfListView('#ClaimContactTransferRolesPopup-SourceClaimContactsLV');
	sourceClaimContactsLV_tbRemoveFromSourceContacts = PcfButton('#ClaimContactTransferRolesPopup-SourceClaimContactsLV_tb-RemoveFromSourceContacts');
	claimContactTransferRolesPopup_Paging = PcfButton('#ClaimContactTransferRolesPopup-_Paging');
	claimContactTransferRolesPopup__crumb__ = PcfComponent('#ClaimContactTransferRolesPopup-__crumb__');
	claimContactTransferRolesPopup_msgs = PcfButton('#ClaimContactTransferRolesPopup-_msgs');
}
