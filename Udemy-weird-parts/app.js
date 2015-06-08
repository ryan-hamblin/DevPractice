

// You would expect this to throw an error. But JavaScript will interpret this code and run the b() function and throw the 'a' to an undefined..

// This phenominon is called Hoisting. Most people thing that the JS engine physically moves the functions and variable calls to the top. But this isn't the case. 

// Execution Context, 2 phases: (The Creation Phase) - Global Object set up and in memory, "this" is always created in execution context, Outer Environment. (Execution Phase) - Sets up memory space for Variables and Functions "Hoisting". All this means is that before your code begins to be executed inline, the engine creates that function in memory space. 

// Undefined === "I don't know what 'this' means yet. "... all variables are initially set as 'undefined'. It is actually taking up Memory Space. It is a value. it is different than "reference error == x is not defined"

// var b = function(){
// 	console.log('called b!')
// };
// b();


var a = 'booyah';
console.log(a);

if(a === undefined){
	console.log("a is undefined!");
} 
else {
	console.log('a is defined!');
};
