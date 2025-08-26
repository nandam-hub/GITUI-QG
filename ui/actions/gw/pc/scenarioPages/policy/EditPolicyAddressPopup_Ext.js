import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
import { EditPolicyAddressPopup } from '../../../../../pages/gw/generated/policysolutions/pages/popup/Edit/EditPolicyAddressPopup'

export class EditPolicyAddressPopup_Ext extends EditPolicyAddressPopup {
    editPolicyZIPCode = PcfTextInput('#EditPolicyAddressPopup-PolicyAddressInputSet-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
}