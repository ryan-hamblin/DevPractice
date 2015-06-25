var merge = function(array1, array2, callback){  
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


// Now, use your merge function to complete the euclid function defined below. Euclid should take two arrays, each of which has an equal number of numerical elements, and return the euclidean distance between them. For a quick refresher on what Euclidean distance is, check here.

var euclid = function(coords1, coords2){  
  
}

var x = euclid([1.2, 3.67], [2.0, 4.4]);

//x should now equal approximately 1.08.

