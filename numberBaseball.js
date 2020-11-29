export default class Car {
  constructor () {
    this.isrun = false;
    this.isblue = false;
  }

  gorun () {
    if (this.isrun === false) {
      return this.isrun = true;
    };
  }

}

const car = new Car();
console.log(car.gorun());
