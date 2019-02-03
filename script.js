//  Writing objects using the fuction constructor. 

// This is an object literal - defining one object 
var jerry = {

	name: 'jerry', 
	yearOfBirth: 1965, 
	job: 'salesman'
}; 

console.log(jerry);

// In order to more easily create a object for multiple cases we can use a function constructor
// this is a JS pattern or blueprint

var Person = function(name, yearOfBirth, job) {
	this.name = name; 
	this.yearOfBirth = yearOfBirth; 
	this.job = job; 
	//this.calculateAge = function() {
		//console.log(2018 - yearOfBirth); 
	//}
}

// We can comment out the calculateAge function within the Person object and add it in elsewhere in the code
// to the prototype and thus it will be usable by all the new Person objects
// This could be done lower down in the code somewhere for convenience. 
Person.prototype.calculateAge = 
function() {
	console.log(2018 - this.yearOfBirth); 
};

Person.prototype.favouriteMovie = 'love actually'; 

// This is call instatiation because these objects are instances of the Person object 
var robert = new Person('robert', 1972, 'fisherman'); 

robert.calculateAge(); 

// Object.create method over function constructor

// Define an object to act as the prototype
// The create a new object based on that prototype 

var personProto = {

	calculateAge: function (){
		console.log(2018 - this.yearOfBirth);
	}
}

// First way to set an Object.create object
var john = Object.create(personProto);
	john.name = "john", 
	john.yearOfBirth = 1975, 
	john.job = "teacher"

// Second way to set an Object.create object
var jane = Object.create(personProto, {

	name: { value: "jane" }, 
	yearOfBirth: { value: 1973 }, 
	job: { value: "social worker"}

}); 

// The difference between object.create and function constructor pattern is that the object.create builds
// an object that inherits directly from the one that we passed into the first argument 

// The newly created object inherits from the constructors prototype property 

// Object. create allows us to implement a really complex inheritance structures in an easier way that function constructors 
// becuase it allows us to directly specify which object should be a prototype. 



//************* Primatives & Objects ******************


// Primatives

var a = 15; 
var b = a; 

a = 35; 
console.log(b); 

// The value of 'a' is copied to var b so when we log a after having changed it var b stays the same. 
// this works because each of the variables holds a copy of the variable, not a reference. 

// Objects and reference
// objects only keep a reference of the data that they hold, not a copy of the data itself. 

var john = {
	name : 'john', 
	age: 52,
	job: 'carpenter',
	

}; 

var paul = john; 

john.age = 53; 

console.log(john.age); 
console.log(john.age); 

// The change made to the john object is reflected in the paul object because both objects are only a reference to the data they hold, not a ocpy 
// so paul and john are exactly the same object 

// functions

var age = 45

var mary = {
	name:'mary', 
	city: 'lagos'
}; 

function city( a, b) {
	a = 55; 
	b.city = 'Ljubljana'; 

}

city(age, mary);

console.log(age); 
console.log(mary.city);

// When we pass a primative into the function a copy is created, we can change 'a' as much as we wish but it will not affect the 
// variable on the outside because it is a primative

// we only pass the reference that points to the object into the function. Therefore when we cnange the object inside the function then it is reflected 
// outide the function as well. 



