let obj1 = {
    f_name : "abc:",
    l_name : "xyz",
}
    function printName(college){
        console.log(`hello ${this.f_name} ${this.l_name} from ${college}`);
    }

let obj2 = {
    f_name : "pqr",
    l_name : "stu"
}
// printName.apply(obj2, ["ABC College"]);
const printNameBind = printName.bind(obj1, "XYZ College");
printNameBind();

