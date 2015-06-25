My Notes Through Udemy's "Understand JavaScript The Weird Parts"
================================================================

> WTF Undefined?



Undefined === "I don't know what 'this' means yet. "... all variables are initially set as 'undefined'. It is actually taking up Memory Space. It is a value. it is different than "reference error == x is not defined"

> JS Execution Context:

 Execution Context, 2 phases: (The Creation Phase) - Global Object set up and in memory, "this" is always created in execution context, Outer Environment. (Execution Phase) - Sets up memory space for Variables and Functions "Hoisting".
  
> Hoisting

 Most people think that the JS engine physically moves the functions and variable calls to the top. But this isn't the case. All this means is that before your code begins to be executed inline, the engine creates that function in memory space. 

