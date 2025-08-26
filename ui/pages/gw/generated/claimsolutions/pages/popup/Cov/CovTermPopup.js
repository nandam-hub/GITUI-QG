import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CovTermPopup {
	covTermPopupCancel = PcfButton('#CovTermPopup-Cancel');
	covTermPopupCovTermPattern = PcfSelectInput('#CovTermPopup-CovTermPattern');
	covTermPopupCovTermPopup_UpLink = PcfButton('#CovTermPopup-CovTermPopup_UpLink');
	covTermTypeDetailsInputSetCode = PcfTextInput('#CovTermPopup-CovTermTypeDetailsInputSet-CovTermTypeDetailsInputSet-Code');
	covTermTypeDetailsInputSetDescription = PcfTextInput('#CovTermPopup-CovTermTypeDetailsInputSet-CovTermTypeDetailsInputSet-Description');
	covTermTypeDetailsInputSetFinancialAmount = PcfTextInput('#CovTermPopup-CovTermTypeDetailsInputSet-CovTermTypeDetailsInputSet-FinancialAmount');
	covTermTypeDetailsInputSetNumericValue = PcfTextInput('#CovTermPopup-CovTermTypeDetailsInputSet-CovTermTypeDetailsInputSet-NumericValue');
	covTermTypeDetailsInputSetUnits = PcfSelectInput('#CovTermPopup-CovTermTypeDetailsInputSet-CovTermTypeDetailsInputSet-Units');
	covTermPopupEdit = PcfButton('#CovTermPopup-Edit');
	covTermPopupModelAggregation = PcfSelectInput('#CovTermPopup-ModelAggregation');
	covTermPopupModelRestriction = PcfSelectInput('#CovTermPopup-ModelRestriction');
	covTermPopupType = PcfSelectInput('#CovTermPopup-Type');
	covTermPopupUpdate = PcfButton('#CovTermPopup-Update');
	covTermPopup_Paging = PcfButton('#CovTermPopup-_Paging');
	covTermPopup__crumb__ = PcfComponent('#CovTermPopup-__crumb__');
	covTermPopup_msgs = PcfButton('#CovTermPopup-_msgs');
}
