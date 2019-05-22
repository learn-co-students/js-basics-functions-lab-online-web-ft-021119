// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street > 42) {
    let blocks = 42 - street
    blocks = ~blocks + 1
    return blocks
  } else {
    return 42 - street
  }
}

function distanceFromHqInFeet(street) {
<<<<<<< HEAD
  let blocks = distanceFromHqInBlocks(street);
  return blocks*264
}

function distanceTravelledInFeet(pickup, destination) {
    let distance;
    if (pickup > destination) {
      distance = (pickup - destination);
    } else {
      distance = (destination - pickup);
    }
    return distance = distance * 264
}

function calculatesFarePrice(pickup, destination) {
  let response;
  let distance = distanceTravelledInFeet(pickup, destination);
  if (distance <= 400) {
    response = 0;
  } else if (distance > 2500) {
    response = 'cannot travel that far'
  } else if (distance < 2000) {
    response = (distance-400)*0.02
  } else {
    response = 25
  }
  return response
=======
  distanceFromHqInBlocks(street){
  }*264
>>>>>>> c32b6ca819b774c7b4fde24fd88a50738aa53bec
}
