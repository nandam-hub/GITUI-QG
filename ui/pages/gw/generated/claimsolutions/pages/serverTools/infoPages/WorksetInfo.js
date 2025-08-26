import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class WorksetInfo {
	noWorksetDVNoWorkset = PcfTextInput('#WorksetInfo-NoWorksetDV-NoWorkset');
	worksetInfoDVActivationDate = PcfDateValueInput('#WorksetInfo-WorksetInfoDV-ActivationDate');
	worksetInfoDVDescription = PcfTextInput('#WorksetInfo-WorksetInfoDV-Description');
	worksetInfoDVIdentifier = PcfTextInput('#WorksetInfo-WorksetInfoDV-Identifier');
	worksetInfoDVName = PcfTextInput('#WorksetInfo-WorksetInfoDV-Name');
	worksetInfoDVStatus = PcfTextInput('#WorksetInfo-WorksetInfoDV-Status');
	worksetInfoDVType = PcfTextInput('#WorksetInfo-WorksetInfoDV-Type');
	worksetInfoWorksetInfo_UpLink = PcfButton('#WorksetInfo-WorksetInfo_UpLink');
	worksetInfo_Paging = PcfButton('#WorksetInfo-_Paging');
	worksetInfo__crumb__ = PcfComponent('#WorksetInfo-__crumb__');
	worksetInfo_msgs = PcfButton('#WorksetInfo-_msgs');
}
