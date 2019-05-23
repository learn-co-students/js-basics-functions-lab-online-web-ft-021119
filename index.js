// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  let hq = 42
  return Math.abs(pickupLocation - hq)
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start,destination) {
  return Math.abs(start - destination) * 264 ;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start,destination);
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
