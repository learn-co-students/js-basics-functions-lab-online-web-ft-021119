function distanceFromHqInBlocks(position) {
    let distance
    if (position >= 42) {
        distance = position - 42
    } else {
        distance = 42 - position
    }
    return distance
}

function distanceFromHqInFeet(value) {
    let distFoot = distanceFromHqInBlocks(value);
    return distFoot * 264
}

function distanceTravelledInFeet(starting, ending) {
   let travelled
   let travFeet
    if (ending >= starting){
        travelled = ending - starting;
        travFeet = travelled * 264
    } else {
        travelled = starting - ending;
        travFeet = travelled * 264
    }
    return travFeet
}

function calculatesFarePrice(start, destination) {
   let feets = distanceTravelledInFeet(start, destination);
   let price;
    if (feets <= 400) {
        price = 0; 
    } else if (feets > 400 && feets <= 2000) {
        let new_feet = feets - 400;
        price = new_feet * 0.02
    } else if (feets > 2000 && feets <= 2500){
        price = 25;
    } else {
        price = "cannot travel that far"
    }
    return price;
}