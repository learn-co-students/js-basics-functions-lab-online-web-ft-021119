function distanceFromHqInBlocks(location){
	if ((location - 42)< 0){
		return ((location - 42)*(-1));
	}else{
		return location - 42;
	};
};


function distanceFromHqInFeet(location){
	return distanceFromHqInBlocks(location) * 264;
};


function distanceTravelledInFeet(start, end){
		if ((end-start) < 0){
			return (end-start) * (- 264);
		} else {
			return (end-start) * 264
		};
};

function calculatesFarePrice(start, destination){
	if (distanceTravelledInFeet(start, destination) <=400){
		return 0;
	}else if ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) < 2000)){
		return ((distanceTravelledInFeet(start, destination)-400) * 0.02);
	}else if (distanceTravelledInFeet(start, destination) > 2500){
		return 'cannot travel that far';
	}else{
		return 25;
	}

}
