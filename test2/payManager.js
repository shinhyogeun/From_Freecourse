import { showPayHTML, hidePayHTML, makeTableResult } from "./payView.js"

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
        tableButton.addEventListener("click", (button) => {
            makeTableResult(button.target.dataset.tableNumber);
        })
    })
}