function distanceFromHqInBlocks(value) {
if (value > 42) {
    return value - 42;
} else {
    return 42 - value;
}
}

// or 1 liner return Math.abs(value - 42);

function distanceFromHqInFeet(any) {
    return distanceFromHqInBlocks(any) * 264;
}


function distanceTravelledInFeet(a, b) {
if (a < b) {
    return (b - a) * 264;
} else {
    return (a - b) * 264;
}
}

// or 1 liner return Math.abs(a-b) * 264

function calculatesFarePrice(a, b) {
const distance = distanceTravelledInFeet(a, b);
    if (distance < 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if ( distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far."
    }
    }

