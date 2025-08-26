import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewProperty {
	newPropertyNewProperty_UpLink = PcfButton('#NewProperty-NewProperty_UpLink');
	propertyDetailScreenCancel = PcfButton('#NewProperty-PropertyDetailScreen-Cancel');
	propertyDetailScreenEdit = PcfButton('#NewProperty-PropertyDetailScreen-Edit');
	propertyDVPropertyDVDescription = PcfTextInput('#NewProperty-PropertyDetailScreen-PropertyDV-PropertyDVDescription');
	propertyDVPropertyDVGroup = PcfSelectInput('#NewProperty-PropertyDetailScreen-PropertyDV-PropertyDVGroup');
	propertyDVPropertyDVName = PcfTextInput('#NewProperty-PropertyDetailScreen-PropertyDV-PropertyDVName');
	propertyDVPropertyDVValue = PcfTextInput('#NewProperty-PropertyDetailScreen-PropertyDV-PropertyDVValue');
	propertyDetailScreenPropertyDetailScreenDeleteButton = PcfButton('#NewProperty-PropertyDetailScreen-PropertyDetailScreenDeleteButton');
	propertyDetailScreenUpdate = PcfButton('#NewProperty-PropertyDetailScreen-Update');
	propertyDetailScreen_msgs = PcfButton('#NewProperty-PropertyDetailScreen-_msgs');
	newProperty_Paging = PcfButton('#NewProperty-_Paging');
	newProperty__crumb__ = PcfComponent('#NewProperty-__crumb__');
}
