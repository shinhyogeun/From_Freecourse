export class Table {
    constructor(number) {
        this.number = number;
        this.totalPrice = 0;
        this.isPayMoneyExite = false;
        this.menuOrdered = {};
    }

    getNumber = () => {
        return this.number;
    }

    getTotalPrice = () => {
        return this.totalPrice;
    }

    getMenuOrdered = () => {
        return this.menuOrdered;
    }

    order = (menu, count) => {
        this.totalPrice += menu.price * count;
        menu.number -= count;
        this.isPayMoneyExite = true;

        if (this.menuOrdered[menu.name]) {
            return this.menuOrdered[menu.name] += count;
        }

        return this.menuOrdered[menu.name] = count;
    }

    pay = () => {
        this.isPayMoneyExite = false;
        this.totalPrice = 0;
        this.menuOrdered = {};
    }
}