(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {    //identity function taks one parameter, value 
    return val;                   //it simply returns the inputed value 
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {                           //the first function takes two parameters, the array to itearte over and the nth element to return from the array.
    return n === undefined ? array[0] : array.slice(0, n); //if n is not given, return the first element of array, otherwise return the first nth of the array.
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {                                                             //the last function takes two parameters, the array to iterate throug hand the nth elemtn to return from the array.
    return n===undefined ? array[array.length-1] : array.slice(Math.max(0,array.length-n)); //if n is not given, return the last element of the array, otherwise return the last nth.
                                                                                            //if n is larger than array length, return the who array.
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {   //each function takes two paraemters, the array or object to iterate through and the callbak. 
    if (Array.isArray(collection)){           //if collection is an array
      for (var i=0;i<collection.length;i++){  //iterate over the elements in collection
       iterator(collection[i],i,collection)  //use iterator to call on elements in collection, index, and collection itself.
      }
    }else{
      for (var key in colleciton){  //if the input is obeject
      iterator(collection[key],key,collection)  //use iterator to call on the value in the collection, key and collection itself.
      
      }
    }
  };
  

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){      //the indexof function takes two parameter, the array to iterate through and the element to choose from the array
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;                        //set result equals to -1 for all the value that cannot be found in the array

    _.each(array, function(item, index) {    //use each funcion to iterate over the array, with a second parameter as a function which taks two parameters.
      if (item === target && result === -1) {//if the target value is chosen AND result equal to -1, which means if the item is not found in the array
        result = index;                      //index will eaqual to result, which is -1
      }
    });
    return result;                          //return the result 
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) { //the filter function takes two parameters, the array to itearte through
var result=[];                             //we use result to hold the value in an array that we will be returned later.
    _.each(collection, function(value){     //use each function to iterate over the collection, and with second parameter as a function which taks one parameter.
      if (test(value)){                   //use test to call on value with conditional statement if
    result.push(value);                   //if the value pass the truth test, push the value to result. 
      }
    });
return result                             //return the result with new value
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {                         //the reject funtion takes two parameters, the array to iterate through and the callback--test to perform on the array
  return filter(collection,function(value){return !test(value);   //use filter function to iterate over the array, return the value that didn't pass the test, then return the filter.
  });
  };
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {    //uniqu function takes one parameter, the array to iterate through
    var result=[];              //we need an array to store the reuslts and that will be returned later 
    _.each(array,function(){ //use each to iteareate over the array
      if(array.indexof(array[i]<0)){ //if the element is not in the array, with has a index -1, which is smaller than 0
        result.push(array[i]);        //push the result to the array. 
      }
    });
    return result;             //return the array
  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {              //Map takes two parameters, the array to iterate through and callback
    var result=[];                                       //Set a new array
    _.each(collection,function(value,key,collection){     //Use each to itereate over collection, with function takes three parameters
      var value=iterator(value,key,collection);          //Use iterator to call all on the three parameters 
      result.push(value);                                //Push the value to the new array
    });
    return result;                                       //Return the new array
    };
    
    
    
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.


  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {                                 //Pluck takes two parameters, the array to iterate through and the property of value to pick from the array
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item){                           //Return the map that iterate through collection, the function takes one pareameter
      return item[key];                                                //Return the value with chosen proerty
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //  
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //  
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //  
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {             //Reduce takes three parameters, the array to iterate through, callback, and the accumulator wich accumulate from first index
  _.each(collection,function(value){                                     //Each will itearete over collection, with a function takes one parameter
    accumulator=iterator(accumulator,value);                           //use iterator to call on accumulater and the next value, assin them to accumulator
  });
  return accumulator                                                   //return the accumulator, thus the single value
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {                         //contains takes two parameter, the array to iterate through and a given value
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {            //return reduce to iterate over collection, witht a function takes two paremeters
      if (wasFound) {                                                 //wasFound is like accumulator, when it matches the give value
        return true;                                                  //the function return true, the iteration stops
      }
      return item === target;                                         //item is  the next value to iterate and set it equal to the target value and initialzied as false
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {                           //every takes two parameters, the array to iterate through ,and callback
    return _.reduce(collection,function(trueSofar value){                           //return reduce function to iterate over accumulator trueSofar,with a function takes one parameter
      return trueSofar&& iteartor(value);                              //set the initial value as true, it will continue be true when trueSofar AND the next iterated value is true.
    },true);
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {                           //same as reduce expect the starting value is false, and use logical operator ||
     return _.reduce(collection,function(trueSofar,value){                          
      return trueSofar || iteartor(value);                              
    },false);
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {         //etend takes on parameter, the object to iterete through 
    _.each(arguments,function(source){  //iteraete over the arugments, with function takes one paremeter
      _.each(source,function(value,key){ //iterate over source , with function takes two paramerters  
        return obj[key]=value;       //apply the key to the target value
      });                         
    });
    return obj                      //return the obj
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {  
    _.each(arguments,functin(source){   //iteraete over the arugments, with function takes one paremeter
      _.each(source,function(value,key){    //iterate over source , with function takes two paramerters  
        return obj[key]=== undefined && (obj[key]=value);       // if the key is undefined, apply the key to the target value
      });                         
    });
    return obj                            //return the obj
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {               //once takes one parameter, function, since it will retrurn a function        
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;          //initialzing the called function with false
    var result;                         //set the result of the function to be returned later

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {                  //if the function is not called
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);  //use apply to call the function with supplied arugment.
        alreadyCalled = true;                 //set the called function to be true
      }
      // The new function always returns the originally computed result.
      return result;                          //return the result
    };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    
    var result={};                //eventually we need to return the result of the function with outcomes
    return function(arg){                 //return a function takes one paremeter, arg
      if(!result[arg]){                   //if the function(the result for the given key) is not called 
      result[arg]=func.call(this,arg);   //call the function with apply method and assign it to result[arg]
      }
      return result[arg];                 //return the result for the given key;
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {    //delay takes two parameters the funtion to call, and the time to delay
    var args=slice.call(arguments,2); //
    return setTimeout(function(){
      return func.apply(null,args);
    },wait)
  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
 function shuffle(array) {
    var copy=array.slice();
    _.each(copy, function(){
        copy.push(copy.splice(Math.floor(Math.random()*copy.length),1)[0]);
        });
        return copy;
  };


  /**
   * EXTRA CREDIT
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());

