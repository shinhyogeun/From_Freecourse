import { menuPaper } from "./menuPaper.js";
import { tables } from "./tables.js";
import { checkCountInput } from "./orderController.js";
import { showOrder, hideOrder, getSelectedTable } from "./orderView.js";

export class OrderManager {

    static show = () => {
        showOrder(tables, menuPaper);
        addEventToOrderButton();
    }

    static hide = () => {
        hideOrder();
    }

}

const addEventToOrderButton = () => {
    Array.prototype.forEach.call(document.querySelectorAll(".order-button"), (button) => {
        button.addEventListener("click", (button) => orderStart(button));
    })
}

const orderStart = (button) => {
    try {
        getSelectedTable().forEach((tableNumber) => {
            const countInput = checkCountInput(prompt(`${tableNumber}수량을 입력해주세요!`));
            const menu = menuPaper[button.target.dataset.menuName];

            if (countInput) tables[tableNumber].order(menu, countInput);

        })
    } catch (error) {
        alert(error);
    }
}