import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class TroubleTicketInfoPopup {
	troubleTicketInfoPopupTroubleTicketInfoPopup_UpLink = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoPopup_UpLink');
	troubleTicketInfoScreenCancel = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-Cancel');
	troubleTicketInfoScreenEdit = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-Edit');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVAssignTicketOwnerAssignTicketOwner_PickerButton = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-AssignTicketOwner-AssignTicketOwner_PickerButton');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVCreateDate = PcfDateValueInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-CreateDate');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVCreatedBy = PcfTextInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-CreatedBy');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVDetailedDescription = PcfTextInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-DetailedDescription');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVDueDate = PcfDateValueInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-DueDate');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVEscalationDate = PcfDateValueInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-EscalationDate');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVPriority = PcfSelectInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-Priority');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVStatus = PcfTextInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-Status');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVSubject = PcfTextInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-Subject');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVTicketNumber = PcfTextInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-TicketNumber');
	troubleTicketInfoPopupTroubleTicketInfoScreenTroubleTicketInfoDVTicketType = PcfSelectInput('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoDV-TicketType');
	troubleTicketInfoScreenTroubleTicketInfoPopup_UpdateButton = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-TroubleTicketInfoPopup_UpdateButton');
	troubleTicketInfoScreenUpdate = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-Update');
	troubleTicketInfoScreen_msgs = PcfButton('#TroubleTicketInfoPopup-TroubleTicketInfoScreen-_msgs');
	troubleTicketInfoPopup_Paging = PcfButton('#TroubleTicketInfoPopup-_Paging');
	troubleTicketInfoPopup__crumb__ = PcfComponent('#TroubleTicketInfoPopup-__crumb__');
}
