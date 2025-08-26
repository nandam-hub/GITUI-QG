import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Catastrophes {
	catastrophesScreenCatastropheAdminLV = PcfListView('#Catastrophes-CatastrophesScreen-CatastropheAdminLV');
	catastrophesScreenCatastrophes_ActivateButton = PcfButton('#Catastrophes-CatastrophesScreen-Catastrophes_ActivateButton');
	catastrophesScreenCatastrophes_AddCatastropheButton = PcfButton('#Catastrophes-CatastrophesScreen-Catastrophes_AddCatastropheButton');
	catastrophesScreenCatastrophes_DeactivateButton = PcfButton('#Catastrophes-CatastrophesScreen-Catastrophes_DeactivateButton');
	catastrophesScreen_msgs = PcfButton('#Catastrophes-CatastrophesScreen-_msgs');
	catastrophesCatastrophes_UpLink = PcfButton('#Catastrophes-Catastrophes_UpLink');
	catastrophes_Paging = PcfButton('#Catastrophes-_Paging');
	catastrophes__crumb__ = PcfComponent('#Catastrophes-__crumb__');
}
