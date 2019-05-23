// Code your solution in this file!
// a block is 264 feet long.
function distanceFromHqInBlocks(block) {
    let distance;
    distance = Math.abs(block - 42)
    return distance;
}

function distanceFromHqInFeet(block) {
    let distance;
    distance = Math.abs(distanceFromHqInBlocks(block))
    return distance * 264;
}

function distanceTravelledInFeet(start,end) {
    let distance;
    distance = Math.abs(end-start)
    return distance * 264;
}

function calculatesFarePrice(start,end) {
    let distance;
    distance = distanceTravelledInFeet(start,end);
    if (distance < 400) {
        return 0;
      }
      else if (distance >= 400 && distance < 2000) {
        return (distance - 400)*0.02;
      }
      // && distance < 2500
      else if (distance > 2000 && distance < 2500) {
        return 25;
      }
      else if (distance > 2500) {
        return 'cannot travel that far';
      }
}