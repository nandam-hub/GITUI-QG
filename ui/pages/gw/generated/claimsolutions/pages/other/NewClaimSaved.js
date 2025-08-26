import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewClaimSaved {
	newClaimDVAssignedHeader = PcfComponent('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-Header');
	newClaimSavedDVAssignedGroup = PcfTextInput('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-AssignedGroup');
	newClaimSavedDVAssignedUser = PcfTextInput('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-AssignedUser');
	newClaimSavedDVCreateNewClaim = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-CreateNewClaim');
	newClaimSavedDVCreatePayment = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-CreatePayment');
	newClaimSavedDVCreateReserve = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-CreateReserve');
	newClaimSavedDVGoToClaim = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-GoToClaim');
	newClaimSavedDVKindHeader = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-KindHeader');
	newClaimSavedDVPendingAssignment = PcfTextInput('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-PendingAssignment');
	newClaimSavedDVRelatedToHeader = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-RelatedToHeader');
	newClaimSavedDVRequestedCompletionDateHeader = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-RequestedCompletionDateHeader');
	newClaimSavedDVServiceRequestNumberHeader = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-ServiceRequestNumberHeader');
	newClaimSavedDVServicesHeader = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-ServicesHeader');
	newClaimSavedDVSpecialistHeader = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-SpecialistHeader');
	newClaimSavedDV_ListPaging = PcfButton('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-_ListPaging');
	newClaimSavedScreen_msgs = PcfButton('#NewClaimSaved-NewClaimSavedScreen-_msgs');
	newClaimSavedNewClaimSaved_UpLink = PcfButton('#NewClaimSaved-NewClaimSaved_UpLink');
	newClaimSaved_Paging = PcfButton('#NewClaimSaved-_Paging');
	newClaimSaved__crumb__ = PcfComponent('#NewClaimSaved-__crumb__');
}
