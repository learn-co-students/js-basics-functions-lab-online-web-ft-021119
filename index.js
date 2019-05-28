// Code your solution in this file!
function distanceFromHqInBlocks(startingPoint) {
  let hq = 42
  return Math.abs(startingPoint - hq)
}

function distanceFromHqInFeet(startingPoint) {
  return distanceFromHqInBlocks(startingPoint) * 264;
}

function distanceTravelledInFeet(startingPoint,endingPoint) {
  return Math.abs(startingPoint - endingPoint) * 264 ;
}

function calculatesFarePrice(startingPoint, endingPoint) {
  let distance = distanceTravelledInFeet(startingPoint,endingPoint);
  let result;

  if (distance <= 400) {
    result = 0;
  }
  else if (distance > 400 && distance < 2000) {
    result = (distance - 400) * .02;
  }

  else if (distance > 2000 && distance < 2500) {
    result = 25.00;
  }

  else if (distance > 2500) {
    result = 'cannot travel that far';
  }
  return result
}