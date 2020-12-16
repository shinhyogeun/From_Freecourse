
export const showMenu = (tables, menuPaper) => {
    document.querySelector("#app").appendChild(makeCheckBox(tables));
    document.querySelector("#app").appendChild(makeMenuHTML(menuPaper));
}

export const hideMenu = () => {
    const menu = document.querySelector("#menu-div");

    if (menu) {
        document.querySelector("#app").removeChild(menu);
    }
}

const makeMenuHTML = (menuPaper) => {
    let menuHTML = document.createElement("div");
    let menuPaperHTML = `<table border = 1px>
                            <th>순서</th><th>메뉴이름</th><th>가격</th><th>주문하기</th>
                            ${makeMenuTable(menuPaper)}
                         </table>`

    menuHTML.setAttribute("id", "menu-div")
    menuHTML.innerHTML = menuPaperHTML;

    return menuHTML;
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
    let checkboxHTML = document.createElement("form");
    checkboxHTML.setAttribute("id", "check-box-form");
    checkboxHTML.innerHTML =
        `<form>
            ${Object.values(tables).map((table) => `<label><input type = checkbox name = table value = ${table.number}>${table.number}</label>`).join("   ")}
        </form>`

    return checkboxHTML;
}