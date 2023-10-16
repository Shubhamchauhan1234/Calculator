function sum(a){
return function (b){
return function(c){

return a+b+c;

}


}}
var z=sum(4)
var x=z(6)
var y=x(9)
console.log(y);

// console.log(sum(3)(6)(5));  