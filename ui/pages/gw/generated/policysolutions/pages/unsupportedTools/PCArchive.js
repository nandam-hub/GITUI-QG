import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class PCArchive {
	pCArchiveToolsScreenArchiveByBatchProcessButton = PcfButton('#PCArchive-PCArchiveToolsScreen-ArchiveByBatchProcessButton');
	pCArchiveToolsScreenArchiveJob = PcfTextInput('#PCArchive-PCArchiveToolsScreen-ArchiveJob');
	pCArchiveToolsScreenArchiveJobButton = PcfButton('#PCArchive-PCArchiveToolsScreen-ArchiveJobButton');
	pCArchiveToolsScreenArchivePolicy = PcfTextInput('#PCArchive-PCArchiveToolsScreen-ArchivePolicy');
	pCArchiveToolsScreenArchivePolicyButton = PcfButton('#PCArchive-PCArchiveToolsScreen-ArchivePolicyButton');
	pCArchiveToolsScreenArchiveTerm = PcfTextInput('#PCArchive-PCArchiveToolsScreen-ArchiveTerm');
	pCArchiveToolsScreenFlushWorkQueuesButton = PcfButton('#PCArchive-PCArchiveToolsScreen-FlushWorkQueuesButton');
	pCArchiveToolsScreenSkipValidationWhenArchivingByJobID = PcfCheckBox('#PCArchive-PCArchiveToolsScreen-SkipValidationWhenArchivingByJobID');
	pCArchiveToolsScreenSkipValidationWhenArchivingByPolicyNumber = PcfCheckBox('#PCArchive-PCArchiveToolsScreen-SkipValidationWhenArchivingByPolicyNumber');
	pCArchiveToolsScreen_msgs = PcfButton('#PCArchive-PCArchiveToolsScreen-_msgs');
	pCArchiveToolsScreenarchiveSucceeded = PcfButton('#PCArchive-PCArchiveToolsScreen-archiveSucceeded');
	archiveSucceededCloseBtn = PcfButton('#PCArchive-PCArchiveToolsScreen-archiveSucceeded-CloseBtn');
	pCArchivePCArchive_UpLink = PcfButton('#PCArchive-PCArchive_UpLink');
	pCArchive_Paging = PcfButton('#PCArchive-_Paging');
	pCArchive__crumb__ = PcfComponent('#PCArchive-__crumb__');
}
