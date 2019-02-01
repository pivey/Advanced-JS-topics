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



