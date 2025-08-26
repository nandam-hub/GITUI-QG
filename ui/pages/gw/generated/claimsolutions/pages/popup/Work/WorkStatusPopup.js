import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class WorkStatusPopup {
	workStatusPopupCancel = PcfButton('#WorkStatusPopup-Cancel');
	workStatusPopupEdit = PcfButton('#WorkStatusPopup-Edit');
	workStatusPopupUpdate = PcfButton('#WorkStatusPopup-Update');
	workStatusPopupWorkStatusDVStatus = PcfSelectInput('#WorkStatusPopup-WorkStatusDV-Status');
	workStatusPopupWorkStatusDVStatusComments = PcfTextInput('#WorkStatusPopup-WorkStatusDV-StatusComments');
	workStatusPopupWorkStatusDVStatusDate = PcfDateValueInput('#WorkStatusPopup-WorkStatusDV-StatusDate');
	workStatusPopupWorkStatusDVStatusEndDate = PcfDateValueInput('#WorkStatusPopup-WorkStatusDV-StatusEndDate');
	workStatusPopupWorkStatusDVStatus_InputSetDaysWorked = PcfTextInput('#WorkStatusPopup-WorkStatusDV-Status_InputSet-DaysWorked');
	workStatusPopupWorkStatusDVStatus_InputSetHoursWorked = PcfTextInput('#WorkStatusPopup-WorkStatusDV-Status_InputSet-HoursWorked');
	workStatusPopupWorkStatusDVStatus_InputSetLastWorkedDate = PcfDateValueInput('#WorkStatusPopup-WorkStatusDV-Status_InputSet-LastWorkedDate');
	workStatusPopupWorkStatusDVStatus_InputSetPaidFullForLastWorked = PcfComponent('#WorkStatusPopup-WorkStatusDV-Status_InputSet-PaidFullForLastWorked');
	workStatusPopupWorkStatusDVStatus_InputSetWeeklyWage = PcfTextInput('#WorkStatusPopup-WorkStatusDV-Status_InputSet-WeeklyWage');
	workStatusPopupWorkStatusPopup_UpLink = PcfButton('#WorkStatusPopup-WorkStatusPopup_UpLink');
	workStatusPopup_Paging = PcfButton('#WorkStatusPopup-_Paging');
	workStatusPopup__crumb__ = PcfComponent('#WorkStatusPopup-__crumb__');
	workStatusPopup_msgs = PcfButton('#WorkStatusPopup-_msgs');
}
