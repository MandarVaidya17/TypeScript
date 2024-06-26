var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.getArea = function () {
        return this.side * this.side;
    };
    return Square;
}());
var sqobj = new Square(10);
var area = sqobj.getArea();
console.log("Area of circle:" + area);
var Rectangle = /** @class */ (function () {
    function Rectangle(len, width) {
        this.len = len;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.len * this.width;
    };
    return Rectangle;
}());
var rectobj = new Rectangle(10, 5);
var rarea = rectobj.getArea();
console.log("Area of Reactangle:" + rarea);
