import { PcfButton, PcfComponent, PcfTextInput} from '@gtui/gt-ui-framework';

export class ClaimFinancialsChecksDetail_New {
    checkDetailsHeader = PcfComponent('#PaymentSearch-PaymentSearchScreen-ttlBar > div.gw-TitleBar--titles--container')
    voidOrStopCheck = PcfButton('#ClaimFinancialsChecksDetail-ClaimFinancialsChecksDetailScreen-ClaimFinancialsChecksDetail_VoidStopButton')
    transferCheck = PcfButton('#ClaimFinancialsChecksDetail-ClaimFinancialsChecksDetailScreen-ClaimFinancialsChecksDetail_TransferButton')
    voidCheck = PcfButton('#VoidStopCheck-VoidStopCheckScreen-VoidStopCheck_VoidButton')
    stopCheck = PcfButton('#VoidStopCheck-VoidStopCheckScreen-VoidStopCheck_StopButton')
    reasonForVoidOrStop = PcfTextInput('#VoidStopCheck-VoidStopCheckScreen-VoidStopCheckDV-Comments')
    upToFinancialsChecks = PcfComponent('#ClaimFinancialsChecksDetail-ClaimFinancialsChecksDetail_UpLink')
    grossAmountLink = PcfComponent('#ClaimFinancialsChecks-ClaimFinancialsChecksScreen-ChecksLV-0-GrossAmount > div > div')
    searchClaimNumber = PcfButton('#CheckTransfer-CheckTransferScreen-CheckTransferDV-Claim-SelectClaim')
    transferButton = PcfButton('#CheckTransfer-CheckTransferScreen-CheckTransfer_TransferButton')
}  