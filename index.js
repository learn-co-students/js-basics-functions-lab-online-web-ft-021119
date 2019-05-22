// Code your solution in this file!
const headquarters = 42

function distanceFromHqInBlocks(location) {
  return Math.abs(location - headquarters)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264
}

function calculatesFarePrice(startBlock, endBlock) {
  let fare;

  const distanceTraveled = distanceTravelledInFeet(startBlock, endBlock)

  if (distanceTraveled <= 400) {
    fare = 0;
  } else if (distanceTraveled <= 2000){
    fare = ((distanceTraveled - 400) * 2) / 100

  } else if (distanceTraveled <= 2500) {
    fare = 25;

  } else if (distanceTraveled > 2500) {
    fare = 'cannot travel that far';
  }
  return fare
}
