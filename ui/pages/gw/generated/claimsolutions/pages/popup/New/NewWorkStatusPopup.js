import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewWorkStatusPopup {
	newWorkStatusPopupCancel = PcfButton('#NewWorkStatusPopup-Cancel');
	newWorkStatusPopupEdit = PcfButton('#NewWorkStatusPopup-Edit');
	newWorkStatusPopupNewWorkStatusPopup_UpLink = PcfButton('#NewWorkStatusPopup-NewWorkStatusPopup_UpLink');
	newWorkStatusPopupUpdate = PcfButton('#NewWorkStatusPopup-Update');
	workStatusDVStatus = PcfSelectInput('#NewWorkStatusPopup-WorkStatusDV-Status');
	workStatusDVStatusComments = PcfTextInput('#NewWorkStatusPopup-WorkStatusDV-StatusComments');
	workStatusDVStatusDate = PcfDateValueInput('#NewWorkStatusPopup-WorkStatusDV-StatusDate');
	workStatusDVStatusEndDate = PcfDateValueInput('#NewWorkStatusPopup-WorkStatusDV-StatusEndDate');
	status_InputSetDaysWorked = PcfTextInput('#NewWorkStatusPopup-WorkStatusDV-Status_InputSet-DaysWorked');
	status_InputSetHoursWorked = PcfTextInput('#NewWorkStatusPopup-WorkStatusDV-Status_InputSet-HoursWorked');
	status_InputSetLastWorkedDate = PcfDateValueInput('#NewWorkStatusPopup-WorkStatusDV-Status_InputSet-LastWorkedDate');
	status_InputSetPaidFullForLastWorked = PcfComponent('#NewWorkStatusPopup-WorkStatusDV-Status_InputSet-PaidFullForLastWorked');
	status_InputSetWeeklyWage = PcfTextInput('#NewWorkStatusPopup-WorkStatusDV-Status_InputSet-WeeklyWage');
	newWorkStatusPopup_Paging = PcfButton('#NewWorkStatusPopup-_Paging');
	newWorkStatusPopup__crumb__ = PcfComponent('#NewWorkStatusPopup-__crumb__');
	newWorkStatusPopup_msgs = PcfButton('#NewWorkStatusPopup-_msgs');
}
