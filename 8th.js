class Animal{
constructor(name){
this.name=name;

}
}
class Dog extends Animal{
constructor(name,breed){
super(name);
this.breed=breed;

}
}
const myDog=new Dog("vikas","kuttiya")  
console.log(myDog);