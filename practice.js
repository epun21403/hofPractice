// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var sum = 0;

  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      sum++;
    }
  });
  return sum;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var results = [];

  _.each(tweets, function(tweet) {
    if (tweet.user === user) {
      results.push(tweet);
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(tweet) {
    if (tweet.user === user) {
      return tweet;
    }
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  return _.map(desserts, function(dessert) {
    var obj = dessert;
    if (dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = false;
    } else {
      dessert['glutenFree'] = true;
    }
    return obj;
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(tweet) {
    var obj = tweet.message;
    return obj;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(grocery) {
    var obj = grocery;
    grocery.salePrice = '$' + Math.round((Number(grocery.price.slice(1))
     * (1 - coupon)) * 100) / 100;
    return obj;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  return _.reduce(products, function(sum, product) {
    return sum + Number(product.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(obj, dessert) {
    if (obj[dessert.type] === undefined) {
      obj[dessert.type] = 1;
    } else {
      obj[dessert.type]++;
    }
    return obj;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(obj, tweet) {
    if (obj[tweet.user] === undefined) {
      obj[tweet.user] = 1;
    } else {
      obj[tweet.user]++;
    }
    return obj;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  return _.reduce(movies, function(array, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      array.push(movie.title);
    }
    return array;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(boolean, movie) {
    if (movie.runtime < timeLimit) {
      return boolean = true;
    }
    return boolean;
  }, false);
};
