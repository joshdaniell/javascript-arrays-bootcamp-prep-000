function addElementToBeginningOfArray (array, element) {
  newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}