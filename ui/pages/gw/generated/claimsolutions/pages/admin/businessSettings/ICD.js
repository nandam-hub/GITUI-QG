import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ICD {
	iCDAdd_ICD_Code_Button = PcfButton('#ICD-Add_ICD_Code_Button');
	iCDFind_Body_System = PcfSelectInput('#ICD-Find_Body_System');
	iCDFind_Code = PcfTextInput('#ICD-Find_Code');
	iCDPanelICDLV = PcfListView('#ICD-ICDPanel-ICDLV');
	iCDICD_UpLink = PcfButton('#ICD-ICD_UpLink');
	iCDSearch_Button = PcfButton('#ICD-Search_Button');
	iCD_Paging = PcfButton('#ICD-_Paging');
	iCD__crumb__ = PcfComponent('#ICD-__crumb__');
	iCD_msgs = PcfButton('#ICD-_msgs');
}
