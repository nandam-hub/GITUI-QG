import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class SolrSearchDebug {
	screenDebugQuery = PcfCheckBox('#SolrSearchDebug-Screen-DebugQuery');
	screenFilterQuery = PcfTextInput('#SolrSearchDebug-Screen-FilterQuery');
	screenQuery = PcfTextInput('#SolrSearchDebug-Screen-Query');
	screenQueryResultDisplay = PcfTextInput('#SolrSearchDebug-Screen-QueryResultDisplay');
	screenRows = PcfTextInput('#SolrSearchDebug-Screen-Rows');
	screenSolrDocument = PcfSelectInput('#SolrSearchDebug-Screen-SolrDocument');
	screenStart = PcfTextInput('#SolrSearchDebug-Screen-Start');
	screenViewQueryResults = PcfButton('#SolrSearchDebug-Screen-ViewQueryResults');
	screen_msgs = PcfButton('#SolrSearchDebug-Screen-_msgs');
	solrSearchDebugSolrSearchDebug_UpLink = PcfButton('#SolrSearchDebug-SolrSearchDebug_UpLink');
	solrSearchDebug_Paging = PcfButton('#SolrSearchDebug-_Paging');
	solrSearchDebug__crumb__ = PcfComponent('#SolrSearchDebug-__crumb__');
}
