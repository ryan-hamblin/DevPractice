// Complete the following merge function such that is behaves as described in the example below. Merge should take two arrays of numbers of identical length and a callback function.

var merge = function(array1, array2, callback){  
  if(array1.length != array2.length){
  	throw new Error('you need some equal array\'s bro');
  }
  var result = [];
  for (var i = 0; i < array1.length; i++) {
   result[i] = array1[i] + array2[i];
  };
  callback(result);
};

var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(merged) {
    console.log(merged);
});


//x should now equal [6, 8, 10, 12].

//return the longest word in a sentance string.

var longestWord = function(str){
  var replaced = str.replace(/[^A-Za-z\s]/g, " ");
  var final = replaced.split(' ').sort(function(a, b) { return b.length - a.length; });
  return final[0];
};
console.log(longestWord('This freaking string is awesomeness and bastardsauce!'));

// find 2 to the tenth power

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024