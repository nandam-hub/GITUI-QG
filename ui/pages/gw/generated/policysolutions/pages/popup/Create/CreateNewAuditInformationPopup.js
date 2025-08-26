import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CreateNewAuditInformationPopup {
	createNewAuditInformationPopupAuditEndDate = PcfDateValueInput('#CreateNewAuditInformationPopup-AuditEndDate');
	createNewAuditInformationPopupAuditMethodList = PcfSelectInput('#CreateNewAuditInformationPopup-AuditMethodList');
	createNewAuditInformationPopupAuditStartDate = PcfDateValueInput('#CreateNewAuditInformationPopup-AuditStartDate');
	createNewAuditInformationPopupAuditTypeList = PcfSelectInput('#CreateNewAuditInformationPopup-AuditTypeList');
	createNewAuditInformationPopupAuditTypeReadOnly = PcfSelectInput('#CreateNewAuditInformationPopup-AuditTypeReadOnly');
	createNewAuditInformationPopupCancel = PcfButton('#CreateNewAuditInformationPopup-Cancel');
	createNewAuditInformationPopupCreateNewAuditInformationPopup_UpLink = PcfButton('#CreateNewAuditInformationPopup-CreateNewAuditInformationPopup_UpLink');
	createNewAuditInformationPopupDueDate = PcfDateValueInput('#CreateNewAuditInformationPopup-DueDate');
	createNewAuditInformationPopupEdit = PcfButton('#CreateNewAuditInformationPopup-Edit');
	createNewAuditInformationPopupProcessStartDate = PcfDateValueInput('#CreateNewAuditInformationPopup-ProcessStartDate');
	createNewAuditInformationPopupUpdate = PcfButton('#CreateNewAuditInformationPopup-Update');
	createNewAuditInformationPopupUpdateButton = PcfButton('#CreateNewAuditInformationPopup-UpdateButton');
	createNewAuditInformationPopup_Paging = PcfButton('#CreateNewAuditInformationPopup-_Paging');
	createNewAuditInformationPopup__crumb__ = PcfComponent('#CreateNewAuditInformationPopup-__crumb__');
	createNewAuditInformationPopup_msgs = PcfButton('#CreateNewAuditInformationPopup-_msgs');
}
