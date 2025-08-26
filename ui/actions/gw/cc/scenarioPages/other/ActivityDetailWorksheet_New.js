import { PcfButton, PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';

export class ActivityDetailWorksheet_New {
    activityDetailWorksheetStatus = PcfComponent("#ActivityDetailWorksheet-ActivityDetailScreen-ActivityDV-ActivityDetailsInputSet-Activity_Status")
    activityDetailWorksheetSubject = PcfComponent("#ActivityDetailWorksheet-ActivityDetailScreen-ActivityDV-ActivityDetailsInputSet-Activity_Subject")
    activityDetailWorksheetEdit = PcfButton('#ActivityDetailWorksheet-ActivityDetailScreen-Edit')
    activityDetailWorksheetPriority = PcfSelectInput('#ActivityDetailWorksheet-ActivityDetailScreen-ActivityDV-ActivityDetailsInputSet-Activity_Priority')
    activityDetailWorksheetCalenderImportance = PcfSelectInput('#ActivityDetailWorksheet-ActivityDetailScreen-ActivityDV-ActivityDetailsInputSet-Activity_Importance')
    activityDetailWorksheetUpdate = PcfButton('#ActivityDetailWorksheet-ActivityDetailScreen-Update')
}