class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }

    toString() {
        return `Color: ${this._color}`;
    }

    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }
}


class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }

    getRadius() {
        return this._radius;
    }

    setRadius(radius) {
        this._radius = radius;
    }

}

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }

    getHeight() {
        return this._height;
    }

    setHeight(height) {
        this._height = height;
    }

    getVolume() {
        return undefined;
    }
}


//TESTING
//A)
console.log("A)");

let shape1 = new Shape("blue");

console.log(shape1.getColor());

shape1.setColor("red");

console.log(shape1.getColor());

console.log(shape1.toString());

//B)
console.log("B)");

let circle1 = new Circle("blue", 5);

console.log(circle1.getRadius());

circle1.setRadius(10);

console.log(circle1.getRadius());

//C)
console.log("C)");

let cylinder1 = new Cylinder("blue", 5, 20);

console.log(cylinder1.getHeight());

cylinder1.setHeight(40);

console.log(cylinder1.getHeight());