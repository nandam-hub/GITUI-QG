import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ISOMatchReportDetailPopup {
	iSOMatchReportDetailPopupISOMatchReportDetailPopup_UpLink = PcfButton('#ISOMatchReportDetailPopup-ISOMatchReportDetailPopup_UpLink');
	iSOMatchReportDVClaimNumber = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-ClaimNumber');
	iSOMatchReportDVInsurerAddress = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-InsurerAddress');
	iSOMatchReportDVInsurerPhone = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-InsurerPhone');
	iSOMatchReportDVInsuringCompany = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-InsuringCompany');
	iSOMatchReportDVLossDate = PcfDateValueInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-LossDate');
	iSOMatchReportDVMatchReasons = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-MatchReasons');
	iSOMatchReportDVPolicyNumber = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-PolicyNumber');
	iSOMatchReportDVPolicyType = PcfTextInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-PolicyType');
	iSOMatchReportDVReceivedDate = PcfDateValueInput('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-ISOMatchReportDV-ReceivedDate');
	iSOMatchReportDetailScreen_msgs = PcfButton('#ISOMatchReportDetailPopup-ISOMatchReportDetailScreen-_msgs');
	iSOMatchReportDetailPopup_Paging = PcfButton('#ISOMatchReportDetailPopup-_Paging');
	iSOMatchReportDetailPopup__crumb__ = PcfComponent('#ISOMatchReportDetailPopup-__crumb__');
}
