
      // Function.prototype.bind()

// The bind() method of Function instances creates a new function that, when called, 
// calls this function with its this keyword set to the provided value,
//  and a given sequence of arguments preceding any provided when the
//   new function is called.
 var  personObj = {
   firstName: "Shobhit",
   lastName: "Verma",
   getAddress: function(city , country) {
       return this.firstName+ " "+ this .lastName + " ," + city + " " + country;
   }
}
var nameObj = {
   firstName: "Shobhit",
   lastName: "Verma",
}
var bound = personObj.getAddress.bind(nameObj);
console.log(bound("Noida" , "India"));
 
// Function.prototype.apply()

// The apply() method of Function instances calls this function
//  with a given this value, and arguments provided as an array 
//  (or an array-like object).

var arr = [ "2","4","5","7","6"];
console.log("maximum number " +Math.max.apply(null, arr));
console.log("minimum number " +Math.min.apply(null, arr));


// Function.prototype.call()

// The call() method of Function instances calls 
// This function with a given this value and arguments provided individually.

var  personObj = {
   firstName: "Shobhit",
   lastName: "Verma",
   getName: function() {
       return this.firstName + this .lastName ;
   }
}
var nameObj = {
   firstName: "Shubham",
   lastName: "Rana",
}
console.log(personObj.getName.call(nameObj));

