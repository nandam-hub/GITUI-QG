import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SampleData {
	sampleDataScreenSampleDataSetsLV = PcfListView('#SampleData-SampleDataScreen-SampleDataSetsLV');
	sampleDataScreen_msgs = PcfButton('#SampleData-SampleDataScreen-_msgs');
	sampleDataScreensampleDataSetGroupRangeInput = PcfSelectInput('#SampleData-SampleDataScreen-sampleDataSetGroupRangeInput');
	sampleDataScreensampleDataSetSubGroupRangeInput = PcfSelectInput('#SampleData-SampleDataScreen-sampleDataSetSubGroupRangeInput');
	sampleDataSampleData_UpLink = PcfButton('#SampleData-SampleData_UpLink');
	sampleData_Paging = PcfButton('#SampleData-_Paging');
	sampleData__crumb__ = PcfComponent('#SampleData-__crumb__');
}
