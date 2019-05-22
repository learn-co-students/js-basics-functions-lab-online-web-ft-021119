function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location);
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(beginning, end){
  return Math.abs(beginning-end)*264
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400 ){
    return 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
    return (distanceTravelledInFeet(start, destination)-400)*.02
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
    return 25
  } else {
    return "cannot travel that far"}
}

// #
