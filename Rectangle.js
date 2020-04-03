class Rectangle {

    constructor(breath, length) {
        this.breath = breath;
        this.length = length;
    }

    area() {
        return this.breath * this.length;
    }
    perimeter() {
        return (this.breath * 2) + (this.length * 2);
    }

}

rect1 = new Rectangle(2, 4);
console.log(rect1.area());
console.log(rect1.perimeter());

rect2 = new Rectangle(5, 10);
console.log(rect2.area());
console.log(rect2.perimeter());

