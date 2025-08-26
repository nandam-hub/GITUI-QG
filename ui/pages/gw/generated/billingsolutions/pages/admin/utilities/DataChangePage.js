import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class DataChangePage {
	dataChangePageDataChangePage_UpLink = PcfButton('#DataChangePage-DataChangePage_UpLink');
	dataChangeScreenDiscardToolbarButton = PcfButton('#DataChangePage-DataChangeScreen-DiscardToolbarButton');
	dataChangeScreenExecuteToolbarButton = PcfButton('#DataChangePage-DataChangeScreen-ExecuteToolbarButton');
	dataChangeScreen_ListPaging = PcfButton('#DataChangePage-DataChangeScreen-_ListPaging');
	dataChangeScreen_msgs = PcfButton('#DataChangePage-DataChangeScreen-_msgs');
	dataChangeScreencreateDateHeader = PcfButton('#DataChangePage-DataChangeScreen-createDateHeader');
	dataChangeScreencreateUserHeader = PcfButton('#DataChangePage-DataChangeScreen-createUserHeader');
	dataChangeScreendescHeader = PcfButton('#DataChangePage-DataChangeScreen-descHeader');
	dataChangeScreendetailsTab = PcfButton('#DataChangePage-DataChangeScreen-detailsTab');
	dataChangeScreenexecDateHeader = PcfButton('#DataChangePage-DataChangeScreen-execDateHeader');
	dataChangeScreenexecUserHeader = PcfButton('#DataChangePage-DataChangeScreen-execUserHeader');
	dataChangeScreenfilter = PcfSelectInput('#DataChangePage-DataChangeScreen-filter');
	dataChangeScreengosu = PcfTextInput('#DataChangePage-DataChangeScreen-gosu');
	dataChangeScreenreferenceHeader = PcfButton('#DataChangePage-DataChangeScreen-referenceHeader');
	dataChangeScreenresult = PcfTextInput('#DataChangePage-DataChangeScreen-result');
	dataChangeScreenstatusHeader = PcfButton('#DataChangePage-DataChangeScreen-statusHeader');
	dataChangePage_Paging = PcfButton('#DataChangePage-_Paging');
	dataChangePage__crumb__ = PcfComponent('#DataChangePage-__crumb__');
}
