import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewContingencyPopup {
	newContingencyPopupBaseContingencyInfoDVClosedDate = PcfDateValueInput('#NewContingencyPopup-BaseContingencyInfoDV-ClosedDate');
	newContingencyPopupBaseContingencyInfoDVClosedUser = PcfTextInput('#NewContingencyPopup-BaseContingencyInfoDV-ClosedUser');
	newContingencyPopupBaseContingencyInfoDVContingencyAction = PcfSelectInput('#NewContingencyPopup-BaseContingencyInfoDV-ContingencyAction');
	newContingencyPopupBaseContingencyInfoDVContingencyDescription = PcfTextInput('#NewContingencyPopup-BaseContingencyInfoDV-ContingencyDescription');
	newContingencyPopupBaseContingencyInfoDVContingencyDueDate = PcfDateValueInput('#NewContingencyPopup-BaseContingencyInfoDV-ContingencyDueDate');
	newContingencyPopupBaseContingencyInfoDVContingencyStatus = PcfSelectInput('#NewContingencyPopup-BaseContingencyInfoDV-ContingencyStatus');
	newContingencyPopupBaseContingencyInfoDVContingencyTitle = PcfTextInput('#NewContingencyPopup-BaseContingencyInfoDV-ContingencyTitle');
	newContingencyPopupBaseContingencyInfoDVCreatedDate = PcfDateValueInput('#NewContingencyPopup-BaseContingencyInfoDV-CreatedDate');
	newContingencyPopupBaseContingencyInfoDVCreatedUser = PcfTextInput('#NewContingencyPopup-BaseContingencyInfoDV-CreatedUser');
	newContingencyPopupBaseContingencyInfoDVResolve = PcfButton('#NewContingencyPopup-BaseContingencyInfoDV-Resolve');
	newContingencyPopupBaseContingencyInfoDVWaive = PcfButton('#NewContingencyPopup-BaseContingencyInfoDV-Waive');
	newContingencyPopupCancel = PcfButton('#NewContingencyPopup-Cancel');
	newContingencyPopupEdit = PcfButton('#NewContingencyPopup-Edit');
	newContingencyPopupNewContingencyPopup_UpLink = PcfButton('#NewContingencyPopup-NewContingencyPopup_UpLink');
	newContingencyPopupUpdate = PcfButton('#NewContingencyPopup-Update');
	newContingencyPopup_Paging = PcfButton('#NewContingencyPopup-_Paging');
	newContingencyPopup__crumb__ = PcfComponent('#NewContingencyPopup-__crumb__');
	newContingencyPopup_msgs = PcfButton('#NewContingencyPopup-_msgs');
}
