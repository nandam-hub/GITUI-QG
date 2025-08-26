import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DatabaseParameters {
	databaseParametersDatabaseParametersLV = PcfListView('#DatabaseParameters-DatabaseParametersLV');
	databaseParametersDatabaseParameters_UpLink = PcfButton('#DatabaseParameters-DatabaseParameters_UpLink');
	databaseParametersDownloadParms = PcfButton('#DatabaseParameters-DownloadParms');
	databaseParametersRefreshParametersButton = PcfButton('#DatabaseParameters-RefreshParametersButton');
	databaseParameters_Paging = PcfButton('#DatabaseParameters-_Paging');
	databaseParameters__crumb__ = PcfComponent('#DatabaseParameters-__crumb__');
	databaseParameters_msgs = PcfButton('#DatabaseParameters-_msgs');
	databaseParametersparamSetPicker = PcfSelectInput('#DatabaseParameters-paramSetPicker');
}
