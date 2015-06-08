var merge = function(array1, array2, callback){  
  for (var i = 0; i < array1.length; i++) {
   return array1[i] + array2[i];
  };
  callback(array1[i] + array2[i]);
};

var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){  
  return a + b;
});
console.log(x);



//  In this repo your job is to write functions to make each function call work properly.
// Below is a sample problem 
  var sayHi = function(name, cb){
    cb(name);
  };
   sayHi('Hi Katie', function(thingToSay){
      console.log(thingToSay);
   });
   
// and what you should write is the favNum function that makes the code above work, 
    
    /* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 
  //code here for sayHi
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/


var first = function(name, cb){
	cb(name[0]);
}
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



// var last = function(name, cb){
// 	cb(name[name.length-1]);
// }

var last = function(name, cb){
  cb(name[name.length-1]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var multiply = function(num1, num2, cb){
  cb(num1 * num2);

};
multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var contains = function(name, flag, cb){
  var result = false;
  for (var i = name.length - 1; i >= 0; i--) {
    if(name[i] === flag){
      result = true;
    }
  };
  cb(result);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Tyler', 'Colt', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



// var uniq = function(name, cb){
//   for(var i = name.length-1; i >= 0; i--){
//     if(name[i])
//   }

// };

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//     //Code Here for each

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// each(names, function(item, indice){
//   console.log('The item in the ' + indice + ' position is ' + item)
// });





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//  //code here for getUserById

// var users = [
//   {
//     id: '12d',
//     email: 'tyler@gmail.com',
//     name: 'Tyler',
//     address: '167 East 500 North'
//   },
//   {
//     id: '15a',
//     email: 'cahlan@gmail.com',
//     name: 'Cahlan',
//     address: '135 East 320 North'
//   },
//   {
//     id: '16t',
//     email: 'ryan@gmail.com',
//     name: 'Ryan',
//     address: '192 East 32 North'
//   },
// ];

// getUserById(users, '16t', function(user){
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
// });
//    var sayHi = function(str, cb){
//     cb(str);
//    }
//    sayHi('Hi Katie', function(thingToSay){
//       alert(thingToSay); //should alert ('Hi Katie')'
//    });
    
    


// var first = function(name, cb){
// 	cb(name[0]);
// };
  
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// first(names, function(firstName){
//   console.log('The first name in names is ', firstName)
// });



// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


// var last = function(namer, cb){
// 	cb(namer[namer.length-1]);
// };

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// last(names, function(lastName){
//   console.log('The last name in names is ', lastName);
// });

// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


// var multiply = function(num1, num2, cb){
// 	cb(num1 * num2);
// };

// multiply(4, 3, function(answer){
//   console.log('The answer is ', answer); //should console.log 12
// })





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





// var contains = function(arr, namer, cb){
// 	var result = false;
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i] === namer){
// 			result = true;
// 		}
// 	};
// 	cb(result);
// };

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// contains(names, 'Colt', function(result){
//   if(result === true){
//     console.log('Colt is in the array');
//   } else {
//     console.log('Colt is not in the array');
//   }
// });





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




// var uniq = function(array, cb){
// 	for (var i = array.length - 1; i >= 0; i--) {
// 		if(array.lastIndexOf(array[i], -1) != i){
// 			array.splice(i, 1);
// 		}
// 	};
// 	cb(array);
// }

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// uniq(names, function(uniqArr){
//   console.log('The new names array with all the duplicate items removed is ', uniqArr);
// });





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

// var each = function(arr, cb){
// 	for (var i = arr.length-1; i >= 0; i--) {
// 		cb(arr[i], i);
// 	};
// };

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// each(names, function(item, indice){
//   console.log('The item in the ' + indice + ' position is ' + item)
// });





// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


// var getUserById = function(usrArr, userId, cb){
// 	for(var i = usrArr.length - 1; i >= 0; i--) {
// 		if(usrArr[i].id === userId){
// 			cb(usrArr[i]);
// 		}
// 	};
// };

// var users = [
//   {
//     id: '12d',
//     email: 'tyler@gmail.com',
//     name: 'Tyler',
//     address: '167 East 500 North'
//   },
//   {
//     id: '15a',
//     email: 'cahlan@gmail.com',
//     name: 'Cahlan',
//     address: '135 East 320 North'
//   },
//   {
//     id: '16t',
//     email: 'ryan@gmail.com',
//     name: 'Ryan',
//     address: '192 East 32 North'
//   },
// ];

// getUserById(users, '16t', function(user){
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
// });