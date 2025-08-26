import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AgencyExceptionItemCommentsPopup {
	agencyExceptionItemCommentsPopupAgencyBillExceptionsLV = PcfListView('#AgencyExceptionItemCommentsPopup-AgencyBillExceptionsLV');
	agencyExceptionItemCommentsPopupAgencyExceptionItemCommentsPopup_UpLink = PcfButton('#AgencyExceptionItemCommentsPopup-AgencyExceptionItemCommentsPopup_UpLink');
	agencyExceptionItemCommentsPopupCancel = PcfButton('#AgencyExceptionItemCommentsPopup-Cancel');
	agencyExceptionItemCommentsPopupEdit = PcfButton('#AgencyExceptionItemCommentsPopup-Edit');
	agencyExceptionItemCommentsPopupUpdate = PcfButton('#AgencyExceptionItemCommentsPopup-Update');
	agencyExceptionItemCommentsPopup_Paging = PcfButton('#AgencyExceptionItemCommentsPopup-_Paging');
	agencyExceptionItemCommentsPopup__crumb__ = PcfComponent('#AgencyExceptionItemCommentsPopup-__crumb__');
	agencyExceptionItemCommentsPopup_msgs = PcfButton('#AgencyExceptionItemCommentsPopup-_msgs');
	agencyExceptionItemCommentsPopupexceptionComments = PcfTextInput('#AgencyExceptionItemCommentsPopup-exceptionComments');
}
