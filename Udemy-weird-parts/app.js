

// You would expect this to throw an error. But JavaScript will interpret this code and run the b() function and throw the 'a' to an undefined..



// Undefined === "I don't know what 'this' means yet. "... all variables are initially set as 'undefined'. It is actually taking up Memory Space. It is a value. it is different than "reference error == x is not defined"

var b = function(){
	console.log('called b!')
};

b();

console.log(a);

var a = "hello world!";

console.log(a);
