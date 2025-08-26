import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput } from "@gtui/gt-ui-framework";

export class AddActivityPage_New {
    activitiesPanel = PcfButton('#gw-south-panel-toggleMinMax_float');
    dragPanel = PcfComponent('#gw-south-panel > div.gw-SouthPanelWidget--drag');
    securityLevel = PcfSelectInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-SecurityLevel > div > div > select');
    okButton = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityScreen_UpdateButton > div');
    radioOptionMandatory = PcfComponent('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory span')
    radioOptionRecurring= PcfComponent('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory span')
}