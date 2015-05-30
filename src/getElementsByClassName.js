// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var elementList = [];
  var currentElement = arguments[1] || document.body;
  var elementsClasses = currentElement.classList;

  if(elementsClasses !== undefined){

    if(elementsClasses.contains(className)){
      elementList.push(currentElement);
    }

    if(currentElement.childNodes.length > 0){
      for (var key in currentElement.childNodes){
        elementList = elementList.concat(getElementsByClassName(className,currentElement.childNodes[key]));
      }
    }
    
  }
  return elementList;
};
