import { OrderManager } from "./orderManager.js";
import { PayManager } from "./payManager.js";

export default class MenuPoss {
    constructor() {
        this.addEventToOrderButton();
        this.addEventToPaybutton();
    }


    addEventToOrderButton = () => {
        document.querySelector("#order-button").addEventListener("click", () => {
            OrderManager.show();
            PayManager.hide();
        })
    }

    addEventToPaybutton = () => {
        document.querySelector("#pay-button").addEventListener("click", () => {
            OrderManager.hide();
            PayManager.show();
        })
    }
}

new MenuPoss();