class Vehicle {

    constructor(manufacturer, numberofWheels, color) {
        this.manufacturer = manufacturer;
        this.numberofWheels = numberofWheels;
        this.color = color;
    }

}

class Car extends Vehicle {
    constructor(manufacturer, color) {
        super(manufacturer, 4, color);
    }

}

class Motorcycle extends Vehicle {

    constructor(manufacturer, color, gear = 0) {
        super(manufacturer, 2, color);
        this.gear = gear;
    }

    get currentgear() {
        return this.gear;
    }

    set newgear(gear) {
        this.gear = gear;
    }
}

ferrari = new Car("Ferrari", "Red");
ducati = new Motorcycle("Ducati", "Red");
console.log(ferrari);
console.log(ducati);
ducati.newgear = 2;
console.log(ducati);