import { menuPaper } from "./menuPaper.js";
import { tables } from "./tables.js";
import { showMenu, hideMenu } from "./MenuPossView.js";

export default class MenuPoss {
    constructor() {
        this.addEventToLookMenuButton();
    }

    addEventToLookMenuButton = () => {
        let token = true;
        document.querySelector("#look-menu-button").addEventListener("click", () => {
            if (token) {
                showMenu(tables, menuPaper)
                this.addEventToOrderButton();
                return token = false;
            }
            hideMenu();
            return token = true;
        })
    }

    addEventToOrderButton = () => {
        const orderButtons = document.querySelectorAll(".order-button")
        Array.prototype.forEach.call(orderButtons, (button) => {
            button.addEventListener("click", (button) => {
                console.log(button.target.dataset.menuName);
            })
        })
    }
}

new MenuPoss();