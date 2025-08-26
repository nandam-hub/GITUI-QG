import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WorkloadClassifications {
	weightedAssignmentScreenAddClassificationButton = PcfButton('#WorkloadClassifications-WeightedAssignmentScreen-AddClassificationButton');
	addClassificationButtonNewClaimMenuItem = PcfComponent('#WorkloadClassifications-WeightedAssignmentScreen-AddClassificationButton-NewClaimMenuItem');
	addClassificationButtonNewExposureMenuItem = PcfComponent('#WorkloadClassifications-WeightedAssignmentScreen-AddClassificationButton-NewExposureMenuItem');
	weightedAssignmentScreenDisableClassificationsButton = PcfButton('#WorkloadClassifications-WeightedAssignmentScreen-DisableClassificationsButton');
	weightedAssignmentScreenEnableClassificationsButton = PcfButton('#WorkloadClassifications-WeightedAssignmentScreen-EnableClassificationsButton');
	weightedAssignmentScreenRemoveClassificationsButton = PcfButton('#WorkloadClassifications-WeightedAssignmentScreen-RemoveClassificationsButton');
	weightedAssignmentScreenWorkloadClassificationLV = PcfListView('#WorkloadClassifications-WeightedAssignmentScreen-WorkloadClassificationLV');
	weightedAssignmentScreen_msgs = PcfButton('#WorkloadClassifications-WeightedAssignmentScreen-_msgs');
	workloadClassificationsWorkloadClassifications_UpLink = PcfButton('#WorkloadClassifications-WorkloadClassifications_UpLink');
	workloadClassifications_Paging = PcfButton('#WorkloadClassifications-_Paging');
	workloadClassifications__crumb__ = PcfComponent('#WorkloadClassifications-__crumb__');
}
