import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class EditAuditInformationPopup {
	editAuditInformationPopupCancel = PcfButton('#EditAuditInformationPopup-Cancel');
	editAuditInformationPopupDueDate = PcfDateValueInput('#EditAuditInformationPopup-DueDate');
	editAuditInformationPopupEdit = PcfButton('#EditAuditInformationPopup-Edit');
	editAuditInformationPopupEditAuditInformationPopup_UpLink = PcfButton('#EditAuditInformationPopup-EditAuditInformationPopup_UpLink');
	editAuditInformationPopupFinalAuditOption = PcfSelectInput('#EditAuditInformationPopup-FinalAuditOption');
	editAuditInformationPopupInitDate = PcfDateValueInput('#EditAuditInformationPopup-InitDate');
	editAuditInformationPopupMethod = PcfSelectInput('#EditAuditInformationPopup-Method');
	editAuditInformationPopupUpdate = PcfButton('#EditAuditInformationPopup-Update');
	editAuditInformationPopup_Paging = PcfButton('#EditAuditInformationPopup-_Paging');
	editAuditInformationPopup__crumb__ = PcfComponent('#EditAuditInformationPopup-__crumb__');
	editAuditInformationPopup_msgs = PcfButton('#EditAuditInformationPopup-_msgs');
}
