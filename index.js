// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (array) => array.slice(0, 2);

// console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = (array) => array.slice(array.length -2);

// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare){
    function fareMultiplier (times) {
        return fare * times;
    }
    return fareMultiplier;
}

const multiplier = createFareMultiplier(2)

// console.log(multiplier(5));

const fareDoubler = createFareMultiplier(2);

// console.log(fareDoubler(3))

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, someFunction){
    return someFunction(arrayOfDrivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));