import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DatabaseTableInfo {
	databaseInfoLinksDVDownloadParms = PcfButton('#DatabaseTableInfo-DatabaseInfoScreen-DatabaseInfoLinksDV-DownloadParms');
	notVerifiedDVverified = PcfTextInput('#DatabaseTableInfo-DatabaseInfoScreen-NotVerifiedDV-verified');
	schemaVerifyDVDownloadSchemaVerifierParms = PcfButton('#DatabaseTableInfo-DatabaseInfoScreen-SchemaVerifyDV-DownloadSchemaVerifierParms');
	schemaVerifyDVDownloadSchemaVerifierVerify = PcfButton('#DatabaseTableInfo-DatabaseInfoScreen-SchemaVerifyDV-DownloadSchemaVerifierVerify');
	databaseInfoScreenVerifyErrorsLV = PcfListView('#DatabaseTableInfo-DatabaseInfoScreen-VerifyErrorsLV');
	databaseInfoScreen_msgs = PcfButton('#DatabaseTableInfo-DatabaseInfoScreen-_msgs');
	databaseTableInfoDatabaseTableInfo_UpLink = PcfButton('#DatabaseTableInfo-DatabaseTableInfo_UpLink');
	databaseTableInfo_Paging = PcfButton('#DatabaseTableInfo-_Paging');
	databaseTableInfo__crumb__ = PcfComponent('#DatabaseTableInfo-__crumb__');
}
