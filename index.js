// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,    
]

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function(fare) {
    return fare * 2;
    }

const fareTripler = function(fare) {
    return fare * 3;
    }

const selectDifferentDrivers = function(drivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    } else if (selectingDrivers === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}