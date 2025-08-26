import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ArchiveItemListPopup {
	archiveItemListPopupArchiveItemListPopup_UpLink = PcfButton('#ArchiveItemListPopup-ArchiveItemListPopup_UpLink');
	archiveItemListLDVArchiveItemListLV = PcfListView('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV-ArchiveItemListLV');
	archiveItemListLDVArchiveTraceCVTab = PcfButton('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV-ArchiveTraceCVTab');
	archiveItemListLDVFailureDetails = PcfTextInput('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV-FailureDetails');
	archiveItemListLDVFailureDetailsCVTab = PcfButton('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV-FailureDetailsCVTab');
	archiveItemListLDVTraceDetails = PcfTextInput('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV-TraceDetails');
	archiveItemListLDV_tbResetAll = PcfButton('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV_tb-ResetAll');
	archiveItemListLDV_tbResetSelected = PcfButton('#ArchiveItemListPopup-ArchiveItemListScreen-ArchiveItemListLDV_tb-ResetSelected');
	archiveItemListScreen_msgs = PcfButton('#ArchiveItemListPopup-ArchiveItemListScreen-_msgs');
	archiveItemListPopup_Paging = PcfButton('#ArchiveItemListPopup-_Paging');
	archiveItemListPopup__crumb__ = PcfComponent('#ArchiveItemListPopup-__crumb__');
}
