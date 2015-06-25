var b = function(){
	var myVar;
	console.log(myVar);
};

var a = function(){
	var myVar = 2;
	console.log(myVar);
	b();
};

var myVar = 1;
console.log(myVar);
a();

// Think about this in the execution context. At first what happens? The Global execution context is created. Globally myVar will equal 1
// Then it hits the invocation of "a". A new execution context is created for a. (now myVar will equal 2.)