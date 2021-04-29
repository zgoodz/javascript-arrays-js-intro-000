var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  ["hershey's", ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift("hershey's")
  return chocolateBars
}