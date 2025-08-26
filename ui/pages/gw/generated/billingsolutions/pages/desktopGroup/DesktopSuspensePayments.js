import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DesktopSuspensePayments {
	desktopSuspensePaymentsScreenDesktopSuspensePaymentsLV = PcfListView('#DesktopSuspensePayments-DesktopSuspensePaymentsScreen-DesktopSuspensePaymentsLV');
	desktopSuspensePaymentsLV_tbCreateDisbursement = PcfButton('#DesktopSuspensePayments-DesktopSuspensePaymentsScreen-DesktopSuspensePaymentsLV_tb-CreateDisbursement');
	desktopSuspensePaymentsLV_tbCurrencyToUse = PcfSelectInput('#DesktopSuspensePayments-DesktopSuspensePaymentsScreen-DesktopSuspensePaymentsLV_tb-CurrencyToUse');
	desktopSuspensePaymentsLV_tbNewPayment = PcfButton('#DesktopSuspensePayments-DesktopSuspensePaymentsScreen-DesktopSuspensePaymentsLV_tb-NewPayment');
	desktopSuspensePaymentsLV_tbReverseSuspensePayments = PcfButton('#DesktopSuspensePayments-DesktopSuspensePaymentsScreen-DesktopSuspensePaymentsLV_tb-ReverseSuspensePayments');
	desktopSuspensePaymentsScreen_msgs = PcfButton('#DesktopSuspensePayments-DesktopSuspensePaymentsScreen-_msgs');
	desktopSuspensePaymentsDesktopSuspensePayments_UpLink = PcfButton('#DesktopSuspensePayments-DesktopSuspensePayments_UpLink');
	desktopSuspensePayments_Paging = PcfButton('#DesktopSuspensePayments-_Paging');
	desktopSuspensePayments__crumb__ = PcfComponent('#DesktopSuspensePayments-__crumb__');
}
