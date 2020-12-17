import { tables } from "./tables.js"
import { menuPaper } from "./menuPaper.js"

export const showPayHTML = () => {
    return document.querySelector("#app").appendChild(makeTableButton());
}

export const hidePayHTML = () => {
    const payHTML = document.querySelector("#table-result-div")

    if (payHTML) {
        return document.querySelector("#app").removeChild(payHTML);
    }
}

export const makeTableResult = (tableNumber) => {
    document.querySelector("#table-result-div").innerHTML +=
        makeTableOrderList(tableNumber) +
        makeTotalCost(tableNumber);
}

const makeTableOrderList = (tableNumber) => {
    const menuOrdered = tables[tableNumber].menuOrdered
    return `<table border=1px>
                <th>메뉴</th><th>가격</th><th>수량</th>
                ${makeTableOrderRow(menuOrdered)}
            </table>`
}

const makeTotalCost = (tableNumber) => {
    return `<p>${tableNumber} 테이블의 총 결제금액은 ${tables[tableNumber].getTotalPrice()}입니다.<p>`
}

const makeTableButton = () => {
    let tableResultHTML = document.createElement("div");

    tableResultHTML.setAttribute("id", "table-result-div");
    tableResultHTML.innerHTML = Object.values(tables)
        .map(table => `<button class=table-button data-table-number=${table.number}>${table.number} 테이블</button>`)
        .join(" ");

    return tableResultHTML;
}

const makeTableOrderRow = (menuOrdered) => {
    let rows = "";

    for (const menu in menuOrdered) {
        rows += `<tr><td>${menu}</td><td>${menuPaper[menu].price}</td><td>${menuOrdered[menu]}</td></tr>`
    }

    return rows;
}