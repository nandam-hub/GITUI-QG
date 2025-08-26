import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewAuthorityLimitProfile {
	authorityLimitProfileDVCurrency = PcfSelectInput('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-AuthorityLimitProfileDV-Currency');
	authorityLimitProfileDVDescription = PcfTextInput('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-AuthorityLimitProfileDV-Description');
	authorityLimitProfileDVEditAuthorityLimitsLV = PcfListView('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-AuthorityLimitProfileDV-EditAuthorityLimitsLV');
	editAuthorityLimitsLV_tbAdd = PcfButton('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-AuthorityLimitProfileDV-EditAuthorityLimitsLV_tb-Add');
	editAuthorityLimitsLV_tbRemove = PcfButton('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-AuthorityLimitProfileDV-EditAuthorityLimitsLV_tb-Remove');
	authorityLimitProfileDVName = PcfTextInput('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-AuthorityLimitProfileDV-Name');
	authorityLimitProfileDetailScreenCancel = PcfButton('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-Cancel');
	authorityLimitProfileDetailScreenEdit = PcfButton('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-Edit');
	newAuthorityLimitProfileAuthorityLimitProfileDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	authorityLimitProfileDetailScreenUpdate = PcfButton('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-Update');
	authorityLimitProfileDetailScreen_msgs = PcfButton('#NewAuthorityLimitProfile-AuthorityLimitProfileDetailScreen-_msgs');
	newAuthorityLimitProfileNewAuthorityLimitProfile_UpLink = PcfButton('#NewAuthorityLimitProfile-NewAuthorityLimitProfile_UpLink');
	newAuthorityLimitProfile_Paging = PcfButton('#NewAuthorityLimitProfile-_Paging');
	newAuthorityLimitProfile__crumb__ = PcfComponent('#NewAuthorityLimitProfile-__crumb__');
}
