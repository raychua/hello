class Circle {

    constructor(radius) {
        this.radius = radius;
    }


    area() {
        return (Math.PI * this.radius ** 2).toFixed(1);
    }

    perimeter() {
        return (Math.PI * 2 * this.radius).toFixed(1);
    }
}

circle1 = new Circle(1);
console.log(circle1.area());
console.log(circle1.perimeter());

circle2 = new Circle(2);
console.log(circle2.area());
console.log(circle2.perimeter());

circle3 = new Circle(3);
console.log(circle3.area());
console.log(circle3.perimeter());