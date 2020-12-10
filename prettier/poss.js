export default class DOM {
    #$body
    constructor() {
        this.#$body = document.querySelector("body");
        this.makeHello();
        this.addEventToButton();
    }

    makeHello() {
        this.input = `<input id = menu-making>  <button id = "make-menu">제출하기</button>`
        this.#$body.innerHTML = this.input;
    }

    addEventToButton() {
        const submitbutton = document.querySelector("#make-menu");
        submitbutton.addEventListener("click", () => { this.makeMenu() });
    }

    makeMenu() {
        const menuArray = document.querySelector("#menu-making").value.split(",");
        console.log(menuArray);
        let $hello = `<br><form>`;
        for (var i = 0; i < menuArray.length; i++) {
            console.log("asd")
            $hello += `<label><input type = "radio" name = "menu" id = "${menuArray[i]}"> ${menuArray[i]}</label>`
        }
        $hello += `<br><button>가입하기</button> </form>`
        console.log($hello)
        this.#$body.innerHTML += $hello;
    }


}

let a = new DOM()
    ;

