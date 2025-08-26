import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DatabaseStorage {
	databaseStorageScreenAnalyzeAllTables = PcfComponent('#DatabaseStorage-DatabaseStorageScreen-AnalyzeAllTables');
	databaseStorageScreenAnalyzeAllTablesForCompression = PcfComponent('#DatabaseStorage-DatabaseStorageScreen-AnalyzeAllTablesForCompression');
	databaseStorageScreenAnalyzeTables = PcfSelectInput('#DatabaseStorage-DatabaseStorageScreen-AnalyzeTables');
	databaseStorageDVDatabaseParametersLV = PcfListView('#DatabaseStorage-DatabaseStorageScreen-DatabaseStorageDV-DatabaseParametersLV');
	databaseStorageDVDatabaseStorageLV = PcfListView('#DatabaseStorage-DatabaseStorageScreen-DatabaseStorageDV-DatabaseStorageLV');
	databaseStorageLV_tbrangeInput = PcfSelectInput('#DatabaseStorage-DatabaseStorageScreen-DatabaseStorageDV-DatabaseStorageLV_tb-rangeInput');
	databaseStorageScreenDisplay = PcfButton('#DatabaseStorage-DatabaseStorageScreen-Display');
	databaseStorageScreenEstimateCompression = PcfComponent('#DatabaseStorage-DatabaseStorageScreen-EstimateCompression');
	databaseStorageScreenEstimateCompressionTables = PcfSelectInput('#DatabaseStorage-DatabaseStorageScreen-EstimateCompressionTables');
	databaseStorageScreenIncludeCompressionReport = PcfComponent('#DatabaseStorage-DatabaseStorageScreen-IncludeCompressionReport');
	databaseStorageScreen_msgs = PcfButton('#DatabaseStorage-DatabaseStorageScreen-_msgs');
	databaseStorageScreendownload = PcfButton('#DatabaseStorage-DatabaseStorageScreen-download');
	databaseStorageScreenmodeSelector = PcfSelectInput('#DatabaseStorage-DatabaseStorageScreen-modeSelector');
	databaseStorageScreenreloadData = PcfButton('#DatabaseStorage-DatabaseStorageScreen-reloadData');
	databaseStorageScreentableAllLV = PcfListView('#DatabaseStorage-DatabaseStorageScreen-tableAllLV');
	databaseStorageDatabaseStorageScreentableAllLV_tbsearchStringTextBox = PcfTextInput('#DatabaseStorage-DatabaseStorageScreen-tableAllLV_tb-searchStringTextBox');
	databaseStorageDatabaseStorageScreentableAllLV_tbuseButton = PcfButton('#DatabaseStorage-DatabaseStorageScreen-tableAllLV_tb-useButton');
	databaseStorageScreentableSelectionLV = PcfListView('#DatabaseStorage-DatabaseStorageScreen-tableSelectionLV');
	databaseStorageDatabaseStorageScreentableSelectionLV_tbuseButton = PcfButton('#DatabaseStorage-DatabaseStorageScreen-tableSelectionLV_tb-useButton');
	databaseStorageDatabaseStorage_UpLink = PcfButton('#DatabaseStorage-DatabaseStorage_UpLink');
	databaseStorage_Paging = PcfButton('#DatabaseStorage-_Paging');
	databaseStorage__crumb__ = PcfComponent('#DatabaseStorage-__crumb__');
}
