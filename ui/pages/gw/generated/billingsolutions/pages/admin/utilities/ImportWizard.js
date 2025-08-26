import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ImportWizard {
	importWizardCancel = PcfButton('#ImportWizard-Cancel');
	importWizardFinish = PcfButton('#ImportWizard-Finish');
	importWizardImportWizard_UpLink = PcfButton('#ImportWizard-ImportWizard_UpLink');
	importWizardNext = PcfButton('#ImportWizard-Next');
	importWizardPrev = PcfButton('#ImportWizard-Prev');
	importWizardUpload = PcfButton('#ImportWizard-Upload');
	importWizard_UploadDVFile = PcfButton('#ImportWizard-ImportWizard_UploadScreen-ImportWizard_UploadDV-File');
	importWizard_UploadDVResolution = PcfSelectInput('#ImportWizard-ImportWizard_UploadScreen-ImportWizard_UploadDV-Resolution');
	importWizard_UploadScreen_msgs = PcfButton('#ImportWizard-ImportWizard_UploadScreen-_msgs');
	importWizard_Paging = PcfButton('#ImportWizard-_Paging');
	importWizard__crumb__ = PcfComponent('#ImportWizard-__crumb__');
}
