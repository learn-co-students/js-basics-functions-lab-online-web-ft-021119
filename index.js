// Code your solution in this file!
function distanceFromHqInBlocks (number) {
  let result = number - 42;
  if (result < 0) {
    result *= -1;
  }
  return result;
}

function distanceFromHqInFeet (number) {
  let result = distanceFromHqInBlocks(number);
  result *= 264;
  return result;
}

function distanceTravelledInFeet (number1, number2) {
  let result = number1 - number2;
  if (result < 0) {
    result *= -1;
  }
  result *= 264;
  return result;
}

function calculatesFarePrice (number1, number2) {
  let result = distanceTravelledInFeet(number1, number2);
  if (result <= 400) {
    return 0;
  }
  else if (result > 400 && result < 2000) {
    result -= 400;
    result *= 0.02;
    return result;
  }
  else if (result > 2500) {
    return "cannot travel that far";
  }
  else if (result > 2000 && result < 2500) {
    return 25;
  }
}
