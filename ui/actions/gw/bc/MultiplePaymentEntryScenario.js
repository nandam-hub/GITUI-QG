import { t, Selector } from 'testcafe'
import { DesktopGroupMenuActions } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/DesktopGroupMenuActions'
import { navigateAndClickSubmenu, enterDataInTable, clickTableRecord, performClickInTable, selectDropdownInTable, returnDataFromTable } from '../../../../ui/util/gw/helper.js';
import { NavigationScenario } from './NavigationScenario.js';
import world from '../../../util/gw/world.js';
import { MultiPaymentEntryWizard } from './scenarioPages/other/MultiPaymentEntryWizard_New.js';


const desktopGroupMenuActions = new DesktopGroupMenuActions();
const navigationScenario = new NavigationScenario();
const multiPaymentEntryWizard = new MultiPaymentEntryWizard();

export class MultiplePaymentEntryScenario {
    async paymentInformationDetails() {
        await desktopGroupMenuActions.desktopGroupDesktopMenuActions.click();
        await navigateAndClickSubmenu(['New Payment'], 'Multiple Payment Entry');
        t.ctx.TableIdentifier = "Invoice";
        await performClickInTable(multiPaymentEntryWizard.Checkbox, 1)
        await enterDataInTable(multiPaymentEntryWizard.multiPaymentEntryWizardAmount,world.dataMap.get('Amount'), 1);
        await selectDropdownInTable(multiPaymentEntryWizard.PaymentInstrument,world.dataMap.get('Option'), 1);
        await enterDataInTable(multiPaymentEntryWizard.multiPaymentEntryWizardDescription, world.dataMap.get('Description'), 1);
        await enterDataInTable(multiPaymentEntryWizard.Account,world.dataMap.get('AccountNumber'), 1);
        await multiPaymentEntryWizard.multiPaymentEntryWizard_Next.click();
        await multiPaymentEntryWizard.multiPaymentEntryWizard_Finish.click();
        await navigationScenario.navigateToAccountScreen();
        await navigationScenario.navigateToPaymentsScreen();
    }
    async validatePayment() {
        await t.expect((await returnDataFromTable(6))).contains(world.dataMap.get('Result'))
        await t.wait(9000);
    }
}