import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SolrSearch {
	solrSearchSolrSearch_UpLink = PcfButton('#SolrSearch-SolrSearch_UpLink');
	solrToolsDVConsistencyCheck = PcfButton('#SolrSearch-SolrToolsScreen-SolrToolsDV-ConsistencyCheck');
	solrToolsDVDelete = PcfButton('#SolrSearch-SolrToolsScreen-SolrToolsDV-Delete');
	solrToolsDVReload = PcfButton('#SolrSearch-SolrToolsScreen-SolrToolsDV-Reload');
	solrToolsScreen_msgs = PcfButton('#SolrSearch-SolrToolsScreen-_msgs');
	solrToolsScreenalertDeleted = PcfButton('#SolrSearch-SolrToolsScreen-alertDeleted');
	alertDeletedCloseBtn = PcfButton('#SolrSearch-SolrToolsScreen-alertDeleted-CloseBtn');
	solrToolsScreenalertReloaded = PcfButton('#SolrSearch-SolrToolsScreen-alertReloaded');
	alertReloadedCloseBtn = PcfButton('#SolrSearch-SolrToolsScreen-alertReloaded-CloseBtn');
	solrToolsScreenconsistencyFailures = PcfTextInput('#SolrSearch-SolrToolsScreen-consistencyFailures');
	solrToolsScreenconsistencyRecordsProcessed = PcfTextInput('#SolrSearch-SolrToolsScreen-consistencyRecordsProcessed');
	solrToolsScreendismissReport = PcfButton('#SolrSearch-SolrToolsScreen-dismissReport');
	solrToolsScreenfailureMessageHeader = PcfButton('#SolrSearch-SolrToolsScreen-failureMessageHeader');
	solrToolsScreenfailurePublicIDHeader = PcfButton('#SolrSearch-SolrToolsScreen-failurePublicIDHeader');
	solrToolsScreenfailureSliceDateHeader = PcfButton('#SolrSearch-SolrToolsScreen-failureSliceDateHeader');
	solrToolsScreenfailureTypeHeader = PcfButton('#SolrSearch-SolrToolsScreen-failureTypeHeader');
	solrSearch_Paging = PcfButton('#SolrSearch-_Paging');
	solrSearch__crumb__ = PcfComponent('#SolrSearch-__crumb__');
}
