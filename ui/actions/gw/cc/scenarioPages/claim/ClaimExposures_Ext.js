import { PcfCheckBox, PcfComponent} from '@gtui/gt-ui-framework';
import { ClaimExposures } from '../../../../../pages/gw/generated/claimsolutions/pages/claim/ClaimExposures';

export class ClaimExposures_Ext extends ClaimExposures {
    claimExposuresScreenClaimExposures_BICheckBox = PcfCheckBox('#ClaimExposures-ClaimExposuresScreen-ExposuresLV-0-_Checkbox_checkboxDiv ')
	claimExposuresScreenClaimExposures_MedPayCheckBox = PcfCheckBox('#ClaimExposures-ClaimExposuresScreen-ExposuresLV-1-_Checkbox_checkboxDiv');
	claimExposuresScreenClaimExposures_Header = PcfComponent('#ClaimExposures-ClaimExposuresScreen-ttlBar > div.gw-TitleBar--titles--container');
	claimExposureCloseTextArea = PcfComponent('#CloseExposurePopup-CloseExposureScreen-CloseExposureInfoDV-Note_Input')
}