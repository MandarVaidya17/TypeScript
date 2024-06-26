interface Shape{
    getArea():number;

}

class Square implements Shape{
    side:number;
    constructor(side:number){
        this.side=side;
    }
     public getArea(): number {
        return this.side*this.side;
    }
}

const sqobj=new Square(10);
let area=sqobj.getArea();
console.log("Area of circle:"+area)

class Rectangle implements Shape{
    len:number;
    width:number;
    constructor(len:number,width:number){
        this.len=len;
        this.width=width;
    }
    public getArea(): number {
        return this.len*this.width
    }
}

const rectobj=new Rectangle(10,5);
let rarea=rectobj.getArea();
console.log("Area of Reactangle:"+rarea);