'use strict';
import { onApplication } from "@gtui/gt-ui-framework";
import { OnPCPage } from "./PCPageRegistry.js";
import { OnCCPage } from "./CCPageRegistry.js";
import { OnBCPage } from "./BCPageRegistry.js";
import { OnCMPage } from "./CMPageRegistry.js";

export class onApp extends onApplication {
    constructor(APP_NAME) {
        super(APP_NAME);
        return this;
    }

    MyPageLibrary() {
        switch (this.getCurrentApp()) {
            case "PC":
                return new getPCPages();
            case "CC":
                return new getCCPages();
            case "BC":
                return new getBCPages();
            case "CM":
                return new getCMPages();
        }
    }

}

class getPCPages {
    PCPages() {
        return new OnPCPage();
    }
}

class getCCPages {
    CCPages() {
        return new OnCCPage();
    }
}

class getBCPages {
    BCPages() {
        return new OnBCPage();
    }
}

class getCMPages {
    CMPages() {
        return new OnCMPage();
    }
}
