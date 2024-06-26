var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = 101;
        this.name = "pablo";
        this.id = id;
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
console.log(new Student(101, "pooja"));
var sobj = new Student(104, "leena");
console.log(sobj);
console.log(sobj.getName());
