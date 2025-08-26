import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class PropertyReferencePopup {
	propertyReferencePopupCancel = PcfButton('#PropertyReferencePopup-Cancel');
	propertyReferencePopupEdit = PcfButton('#PropertyReferencePopup-Edit');
	propertyReferencePopupProperty = PcfTextInput('#PropertyReferencePopup-Property');
	propertyReferencePopupPropertyReferencePopup_UpLink = PcfButton('#PropertyReferencePopup-PropertyReferencePopup_UpLink');
	propertyReferencePopupUpdate = PcfButton('#PropertyReferencePopup-Update');
	propertyReferencePopupValidationPopupErrorsInputSetLabel = PcfButton('#PropertyReferencePopup-ValidationPopupErrorsInputSet-Label');
	propertyReferencePopupValidationPopupErrorsInputSetValidationErrorIcon = PcfButton('#PropertyReferencePopup-ValidationPopupErrorsInputSet-ValidationErrorIcon');
	propertyReferencePopup_Paging = PcfButton('#PropertyReferencePopup-_Paging');
	propertyReferencePopup__crumb__ = PcfComponent('#PropertyReferencePopup-__crumb__');
	propertyReferencePopup_msgs = PcfButton('#PropertyReferencePopup-_msgs');
}
