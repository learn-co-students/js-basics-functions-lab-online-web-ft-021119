	function distanceFromHqInBlocks(distance) {
		let hq = 42;
		if (distance > hq) {
		return distance - hq;
		} else {
			return hq - distance;
		}
	}

	 function distanceFromHqInFeet(distance){
		let hq = 42;
		if (distance > hq) {
		return (distance - hq)*264;
		} else {
			return (hq - distance)*264;
		}
	}

	function distanceTravelledInFeet(pointA, pointB){
		 if (pointA > pointB) {
		 	return (pointA - pointB) *264;

		 } else {
		 	return (pointB - pointA) *264;
		 }
	}

	function calculatesFarePrice(start, destination){
 let totalFeet =  distanceTravelledInFeet(start, destination); 


 
 	if (totalFeet < 400 ) {
 		return 0;
 	} else if (totalFeet >= 400 && totalFeet < 2000){

 		return (totalFeet - 400) * 0.02;
 	} else if (totalFeet >= 2000 && totalFeet < 2500) {
 		return 25;
 	} else {
 		return 'cannot travel that far';
 	} 
 	}


// Code your solution in this file!
