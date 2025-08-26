import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewAttribute {
	attributeDetailDVDescription = PcfTextInput('#NewAttribute-AttributeDetailScreen-AttributeDetailDV-Description');
	attributeDetailDVName = PcfTextInput('#NewAttribute-AttributeDetailScreen-AttributeDetailDV-Name');
	attributeDetailDVType = PcfSelectInput('#NewAttribute-AttributeDetailScreen-AttributeDetailDV-Type');
	attributeDetailScreenCancel = PcfButton('#NewAttribute-AttributeDetailScreen-Cancel');
	attributeDetailScreenEdit = PcfButton('#NewAttribute-AttributeDetailScreen-Edit');
	newAttributeAttributeDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewAttribute-AttributeDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	attributeDetailScreenUpdate = PcfButton('#NewAttribute-AttributeDetailScreen-Update');
	attributeDetailScreen_msgs = PcfButton('#NewAttribute-AttributeDetailScreen-_msgs');
	newAttributeNewAttribute_UpLink = PcfButton('#NewAttribute-NewAttribute_UpLink');
	newAttribute_Paging = PcfButton('#NewAttribute-_Paging');
	newAttribute__crumb__ = PcfComponent('#NewAttribute-__crumb__');
}
