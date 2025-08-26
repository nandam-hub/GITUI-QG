import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class SIDetails {
	sIDetailsScreenCancel = PcfButton('#SIDetails-SIDetailsScreen-Cancel');
	sIDetailsScreenEdit = PcfButton('#SIDetails-SIDetailsScreen-Edit');
	sIUTotalScoreSIinfo_SIEscalateSIUNote = PcfTextInput('#SIDetails-SIDetailsScreen-SIUTotalScore-SIinfo_SIEscalateSIUNote');
	sIUTotalScoreSIinfo_SITotalScore = PcfTextInput('#SIDetails-SIDetailsScreen-SIUTotalScore-SIinfo_SITotalScore');
	sIUTotalScoreSIinfo_SIescalateSIU = PcfSelectInput('#SIDetails-SIDetailsScreen-SIUTotalScore-SIinfo_SIescalateSIU');
	sIUTotalScoreSIinfo_SIescalateSIUdate = PcfDateValueInput('#SIDetails-SIDetailsScreen-SIUTotalScore-SIinfo_SIescalateSIUdate');
	sectionOneSIinfo_SIscore = PcfTextInput('#SIDetails-SIDetailsScreen-SectionOne-SIinfo_SIscore');
	sectionOneSItriggersLV = PcfListView('#SIDetails-SIDetailsScreen-SectionOne-SItriggersLV');
	sectionTwoSIUQuestionSetTotalScore = PcfTextInput('#SIDetails-SIDetailsScreen-SectionTwo-SIUQuestionSetTotalScore');
	sIDetailsScreenUpdate = PcfButton('#SIDetails-SIDetailsScreen-Update');
	sIDetailsScreen_msgs = PcfButton('#SIDetails-SIDetailsScreen-_msgs');
	sIDetailsSIDetails_UpLink = PcfButton('#SIDetails-SIDetails_UpLink');
	sIDetails_Paging = PcfButton('#SIDetails-_Paging');
	sIDetails__crumb__ = PcfComponent('#SIDetails-__crumb__');
}
