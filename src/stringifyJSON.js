// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null){
    return "null";
  }
  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }
  if (typeof obj === 'string'){
    return '"'+obj+'"';
  }

  if (Array.isArray(obj)){
    if (obj.length === 0){
      return '[]';
    }else{
      var newArr = [];
      for(var i = 0;i < obj.length ; i++){
        newArr.push(stringifyJSON(obj[i]));
      }
      return '[' + newArr.join(",") + ']';
    }
  }

  if(typeof obj === 'object'){
      var length = 0;
      var jsonArray = [];
      for (var key in obj){
        length++;
      }
      if (length === 0){
        return '{}';
      } else {
        for (var key in obj){
          if(obj[key] === undefined || typeof obj[key] === 'function'||typeof key === 'function'){
            jsonArray.push(null);
          } else {
            jsonArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
          }
        }
          //Here We are returning the array of items, but we are filtering the null's out.
          return '{'+jsonArray.filter(function(val){return val !== null;}).join(",")+'}'
      }
  }

};
