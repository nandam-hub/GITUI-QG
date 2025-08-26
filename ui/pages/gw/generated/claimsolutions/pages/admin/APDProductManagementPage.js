import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class APDProductManagementPage {
	aPDProductManagementPageAPDProductManagementPage_UpLink = PcfButton('#APDProductManagementPage-APDProductManagementPage_UpLink');
	aPDProductManagementPageDownloadDNI = PcfButton('#APDProductManagementPage-DownloadDNI');
	aPDProductManagementPageProductTreeLV = PcfListView('#APDProductManagementPage-ProductTreeLV');
	productTreeLV_tbCollapseAll = PcfButton('#APDProductManagementPage-ProductTreeLV_tb-CollapseAll');
	productTreeLV_tbExpandAll = PcfButton('#APDProductManagementPage-ProductTreeLV_tb-ExpandAll');
	productTreeLV_tbGenerateButton = PcfButton('#APDProductManagementPage-ProductTreeLV_tb-GenerateButton');
	productTreeLV_tbTreeContents = PcfTextInput('#APDProductManagementPage-ProductTreeLV_tb-TreeContents');
	aPDProductManagementPageProductsLV = PcfListView('#APDProductManagementPage-ProductsLV');
	aPDProductManagementPage_Paging = PcfButton('#APDProductManagementPage-_Paging');
	aPDProductManagementPage__crumb__ = PcfComponent('#APDProductManagementPage-__crumb__');
	aPDProductManagementPage_msgs = PcfButton('#APDProductManagementPage-_msgs');
	aPDProductManagementPageselectedProductTab = PcfButton('#APDProductManagementPage-selectedProductTab');
}
