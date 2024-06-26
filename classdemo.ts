class Student{
    id:number=101;
    name:string="pablo";

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    public getName(){
        return this.name;
    }
}
//by default access modifer is public
//console.log(new Student());
console.log(new Student(101,"pooja"));
const sobj=new Student(104,"leena");
console.log(sobj)
console.log(sobj.getName())