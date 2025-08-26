import { AccountGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks';
import { AccountDetailInvoiceStreams_Ext } from './scenarioPages/accountGroup/AccountDetailInvoiceStreams_Ext';
import { NewPaymentInstrumentPopup } from '../../../pages/gw/generated/billingsolutions/pages/popup/New/NewPaymentInstrumentPopup';
import { t } from "testcafe";
import world from "../../../util/gw/world"

const accountGroupMenuLinks = new AccountGroupMenuLinks()
const accountDetailInvoiceStreams_Ext = new AccountDetailInvoiceStreams_Ext()
const newPaymentInstrumentPopup = new NewPaymentInstrumentPopup()

export class PaymentInstrumentScenario {
    async paymentInstrument() {
        await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoiceStreams.click()
        await accountDetailInvoiceStreams_Ext.accountDetailInvoiceStreamsScreenEdit.click()
        await accountDetailInvoiceStreams_Ext.accountDetailInvoiceStream_Instrument.click()
        await accountDetailInvoiceStreams_Ext.overridingPaymentInstrumentCreateNewPaymentInstrument.click()
        await newPaymentInstrumentPopup.newPaymentInstrumentPopupPaymentMethod.selectOptionByLabel(world.dataMap.get('PaymentMethod'));
        await newPaymentInstrumentPopup.newPaymentInstrumentPopupToken.setValue(world.dataMap.get('Token'))
        await newPaymentInstrumentPopup.newPaymentInstrumentPopupUpdate.click()
        await accountDetailInvoiceStreams_Ext.accountDetailInvoiceStreamsScreenUpdate.click()
    }

    async validatePaymentInstrument() {
        await t.expect(accountDetailInvoiceStreams_Ext.overridingPaymentInstrument.component.textContent).eql(world.dataMap.get('PaymentInstrument'))
    }
}
