import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewClaimNewDocumentExistsWorksheet {
	newClaimNewDocumentExistsWorksheetNewClaimNewDocumentExistsWorksheet_UpLink = PcfButton('#NewClaimNewDocumentExistsWorksheet-NewClaimNewDocumentExistsWorksheet_UpLink');
	newDocumentExistsScreenCancel = PcfButton('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-Cancel');
	documentExistenceDetailsInputSetAuthor = PcfTextInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Author');
	documentExistenceDetailsInputSetDescription = PcfTextInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Description');
	documentExistenceDetailsInputSetInBound = PcfComponent('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-InBound');
	documentExistenceDetailsInputSetName = PcfTextInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Name');
	documentExistenceDetailsInputSetRecipient = PcfTextInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Recipient');
	documentExistenceDetailsInputSetRelatedServiceRequestsLV = PcfListView('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-RelatedServiceRequestsLV');
	documentExistenceDetailsInputSetRelatedTo = PcfSelectInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-RelatedTo');
	documentExistenceDetailsInputSetSection = PcfSelectInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Section');
	documentExistenceDetailsInputSetSecurityType = PcfSelectInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-SecurityType');
	documentExistenceDetailsInputSetStatus = PcfSelectInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Status');
	documentExistenceDetailsInputSetType = PcfSelectInput('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-DocumentExistenceDetailsInputSet-Type');
	newDocumentExistsScreenEdit = PcfButton('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-Edit');
	newDocumentExistsScreenUpdate = PcfButton('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-Update');
	newDocumentExistsScreen_msgs = PcfButton('#NewClaimNewDocumentExistsWorksheet-NewDocumentExistsScreen-_msgs');
	newClaimNewDocumentExistsWorksheet_Paging = PcfButton('#NewClaimNewDocumentExistsWorksheet-_Paging');
	newClaimNewDocumentExistsWorksheet__crumb__ = PcfComponent('#NewClaimNewDocumentExistsWorksheet-__crumb__');
	wsTabBarwsTab = PcfButton('#wsTabBar-wsTab');
}
