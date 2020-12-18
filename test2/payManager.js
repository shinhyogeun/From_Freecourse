import { showPayHTML, hidePayHTML, makeTableResult, hideTableResult } from "./payView.js"
import { tables } from "./tables.js"

export class PayManager {

    static show = () => {
        showPayHTML();
        addEventToTableButton();
    }

    static hide = () => {
        hidePayHTML();
    }

}

const addEventToTableButton = () => {
    const tableButtons = document.querySelectorAll(".table-button");
    Array.prototype.forEach.call(tableButtons, (tableButton) => {
        tableButton.addEventListener("click", (button) => updateTableResult(button));
    })
}

const updateTableResult = (button) => {
    hideTableResult();
    makeTableResult(button.target.dataset.tableNumber);
    addEventToPayButton();
}

const addEventToPayButton = () => {
    document.querySelector("#pay-complete-button").addEventListener("click", (button) => {
        tables[button.target.dataset.tableNumber].pay();
        updateTableResult(button);
    })
}