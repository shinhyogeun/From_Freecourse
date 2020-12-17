export const showOrder = (tables, menuPaper) => {
    if (!document.querySelector("#order-div")) {
        document.querySelector("#app").appendChild(makeOrderHTML(tables, menuPaper));
    }
}

export const hideOrder = () => {
    const menu = document.querySelector("#order-div");

    if (menu) {
        document.querySelector("#app").removeChild(menu);
    }
}

export const getSelectedTable = () => {
    return Array.prototype
        .filter
        .call(document.getElementsByName("table"), (table) => (table.checked === true))
        .map((table) => Number(table.value));
}

const makeOrderHTML = (tables, menuPaper) => {
    let menuHTML = document.createElement("div");

    menuHTML.setAttribute("id", "order-div")
    menuHTML.innerHTML = makeCheckBox(tables) + menuPaperHTML(menuPaper);

    return menuHTML;
}

const menuPaperHTML = (menuPaper) => {
    let menuPaperHTML = `<table border = 1px>
                            <th>순서</th><th>메뉴이름</th><th>가격</th><th>주문하기</th>
                            ${makeMenuTable(menuPaper)}
                         </table>`;

    return menuPaperHTML;
}

const makeMenuTable = (menuPaper) => {
    let menuTable = "";

    menuTable += Object.values(menuPaper).map((oneMenu, index) =>
        `<tr>
            <td>${index + 1}</td>
            <td>${oneMenu.name}</td>
            <td>${oneMenu.price}</td>
            <td><button class=order-button data-menu-name=${oneMenu.name}>주문하기</button></td>
         </tr>`
    ).join("");

    return menuTable
}

const makeCheckBox = (tables) => {
    let checkboxHTML =
        `<form id=check-box-form>
            ${Object.values(tables).map((table) => `<label><input type=checkbox name=table value=${table.number}>${table.number}</label>`).join(" ")}
        </form>`

    return checkboxHTML;
}