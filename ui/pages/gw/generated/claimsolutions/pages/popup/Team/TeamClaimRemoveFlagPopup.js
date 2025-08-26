import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class TeamClaimRemoveFlagPopup {
	removeFlagScreenCancel = PcfButton('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-Cancel');
	removeFlagScreenEdit = PcfButton('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-Edit');
	removeFlagInfoDVClaim = PcfTextInput('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-RemoveFlagInfoDV-Claim');
	removeFlagInfoDVFlaggedDate = PcfDateValueInput('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-RemoveFlagInfoDV-FlaggedDate');
	removeFlagInfoDVFlaggedReason = PcfTextInput('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-RemoveFlagInfoDV-FlaggedReason');
	removeFlagInfoDVInsured = PcfTextInput('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-RemoveFlagInfoDV-Insured');
	removeFlagInfoDVNote = PcfTextInput('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-RemoveFlagInfoDV-Note');
	removeFlagScreenUpdate = PcfButton('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-Update');
	removeFlagScreen_msgs = PcfButton('#TeamClaimRemoveFlagPopup-RemoveFlagScreen-_msgs');
	teamClaimRemoveFlagPopupTeamClaimRemoveFlagPopup_UpLink = PcfButton('#TeamClaimRemoveFlagPopup-TeamClaimRemoveFlagPopup_UpLink');
	teamClaimRemoveFlagPopup_Paging = PcfButton('#TeamClaimRemoveFlagPopup-_Paging');
	teamClaimRemoveFlagPopup__crumb__ = PcfComponent('#TeamClaimRemoveFlagPopup-__crumb__');
}
