export class Table {
    constructor(number) {
        this.number = number;
        this.totalPrice = 0;
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

        if (this.menuOrdered[menu.name]) {
            return this.menuOrdered[menu.name] += 1;
        }

        return this.menuOrdered[menu.name] = 0;
    }
}