import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class SerializationInfo {
	serializationInfoDeserializedClasses = PcfTextInput('#SerializationInfo-DeserializedClasses');
	serializationInfoIncludingAllowListedClasses = PcfCheckBox('#SerializationInfo-IncludingAllowListedClasses');
	serializationInfoSerializationInfo_UpLink = PcfButton('#SerializationInfo-SerializationInfo_UpLink');
	serializationInfo_Paging = PcfButton('#SerializationInfo-_Paging');
	serializationInfo__crumb__ = PcfComponent('#SerializationInfo-__crumb__');
	serializationInfo_msgs = PcfButton('#SerializationInfo-_msgs');
}
