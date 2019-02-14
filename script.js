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

// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

//can also be written as (fn, arr) which would be simpler to understand as long as that
// same syntax is kept when writing the 'var ages function call'
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// the (el) becomes negligible due to the 'arrRes.push(fn(arr[i]))' because we
// pass the function as calculateAge and it then uses the array as the (el) and therefore works
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);
// console.log(rates);

/********* Using functions as arguments ***********/

// create an array. 

var yearOfManu = [1955, 1986, 1945, 1975, 1931]; 

// Create a generic function
// This function returns an array that has been passed through a function

function vintageArray (fn, arr) {
	var vinCalc = []; 
	for (var i =0; i<yearOfManu.length; i++) {
		vinCalc.push(fn(arr[i])); 
	}
	return vinCalc; 
} 

//  the 'el' will take the form of the array that is passed into the 'vintageArray' function. 

function calculateDate(el) {
	return 2019 - el; 
}

// Create a variable so that we can save the new array that has been made

var vinYears = vintageArray(calculateDate, yearOfManu);

console.log(vinYears);

function vintageTest (el) {
	return el >= 45; 
}

console.log(vintageArray(vintageTest, vinYears)); 


// Using first class functions 


function movieQuestions (genre) {

	if (genre == "romance") {
		return function (name) {
			console.log(name + " do you like " + genre + " movies because you feel alone?");
		} 
	} 

	else if (genre == "horror") {

		return function (name) {
			console.log(name + " do you like " + genre + " movies because you want to hurt somebody?");
		} 
	}

		else (genre == "comedy") 

	return function (name) {
			console.log(name + " do you like "+ genre +" movies because you want to be a comedian yourself?");
				

	}
}

// store the output of the anonymous function in a variable 

// var movieAnswerHorror = movieQuestions("horror"); 

// you can now call this 'variable' and use it like a function and add an input

// movieAnswerHorror("jeremy"); 

// the anonymous function withing the main function can be called and a parameter passed to it. 

// movieQuestions ("horror") ("paul");


/************************* Closurees *****************************/

function interviewQuestion(genre) {
    return function(name) {
        if (genre === "romance") {
            console.log(name + " do you like " + genre + " movies because you feel alone?");
        } else if (genre === "horror") {
            console.log(name + " do you like " + genre + " movies because you want to hurt somebody?");
        } else {
            console.log(name + " do you like "+ genre +" movies because you want to be a comedian yourself?");
        }
    }
}

// interviewQuestion("romance")("casey");



function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');

		
function addition() {

	var a1 = 15;
	function number(){

		var b1 = 10; 
		console.log(a1 + b1);
	}

	return number; 
}


var result = addition(); 

console.log(addition);




