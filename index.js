// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {
  let hq = 42
  let distance
  if (currentBlock === hq) {
    distance = 0;
    console.log('You are already at HQ!')
  } else if (currentBlock > hq) {
    distance = currentBlock - hq;
  } else if (currentBlock < hq) {
    distance = hq - currentBlock;
  };
  return distance
}

function distanceFromHqInFeet(currentBlock) {
  let distanceInFeet;
  let blocks = distanceFromHqInBlocks(currentBlock);
  distanceInFeet = blocks * 264;
  return distanceInFeet
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let distance;
  if (startingBlock === endingBlock) {
    distance = 0;
    console.log('You are already at your destination!')
  } else if (startingBlock > endingBlock) {
    distance = (startingBlock - endingBlock) * 264;
  } else if (startingBlock < endingBlock) {
    distance = (endingBlock - startingBlock) * 264;
  }
  return distance
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let price;
  let error = 'cannot travel that far'
  let distance = distanceTravelledInFeet(startingBlock, endingBlock);
  if (distance < 400) {
    price = 0;
  } else if (distance > 400 && distance < 2000) {
    price = (0.02 * (distance - 400));
  } else if (distance > 2000 && distance < 2500) {
    price = 25
  } else if (distance > 2500) {
    price = error;
  }
  return price
}
