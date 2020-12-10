export class outputView {
    static tags = {
        bettingParent: document.querySelector("#betting-div"),
        bettingButton: document.querySelector("#betting-button"),
        parent: document.querySelector("#app")
    };

    static addBettingHTML(name, index) {
        const bettingHTML = `
                            <p>${name}의 배팅금액을 입력해주세요</p>
                            <div>
                            <input type="text" id = "betting-${index}-input"/>
                           </div>`
        this.tags.bettingParent.innerHTML += bettingHTML
    }

    static addBettingButton() {
        this.tags.bettingParent.innerHTML += `<button id = "betting-button"> 게임 시작! </button>`;
    }

    static showResult(HTML) {
        document.querySelector("#app").innerHTML += HTML;
    }
}