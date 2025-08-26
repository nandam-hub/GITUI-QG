import { PcfComponent } from '@gtui/gt-ui-framework';
import { ContactSearch} from '../../../../../pages/gw/generated/policysolutions/pages/search/ContactSearch'

export class ContactSearch_Ext extends ContactSearch{
	contactSearchName = PcfComponent('#ContactSearch-ContactSearchScreen-ContactSearchResultsLV-0-Name_button');
    contactMenu = PcfComponent('#TabBar-ContactTab > div.gw-action--expand-button')
}