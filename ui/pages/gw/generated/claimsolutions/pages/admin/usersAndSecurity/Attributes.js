import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Attributes {
	attributesScreenAttributesLV = PcfListView('#Attributes-AttributesScreen-AttributesLV');
	attributesScreenAttributes_AddAttributeButton = PcfButton('#Attributes-AttributesScreen-Attributes_AddAttributeButton');
	attributesScreenAttributes_DeleteButton = PcfButton('#Attributes-AttributesScreen-Attributes_DeleteButton');
	attributesScreen_msgs = PcfButton('#Attributes-AttributesScreen-_msgs');
	attributesAttributes_UpLink = PcfButton('#Attributes-Attributes_UpLink');
	attributes_Paging = PcfButton('#Attributes-_Paging');
	attributes__crumb__ = PcfComponent('#Attributes-__crumb__');
}
