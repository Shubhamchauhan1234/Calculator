class Student{
#id;
name;
constructor(id,name){
this.#id=id;
this.name=name;
}
#getnumber(Number){

    return Number
}
getdetail(){

return `Student Id:${this.#id}\n student Name:${this.name}`

}

}
const v1=new Student(56,"shubham")
v1.name;
console.log(v1.getdetail());