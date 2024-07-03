// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){ 
    return drivers.slice(0, 2);
 }; 
    
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])) 

const returnLastTwoDrivers = function(drivers){ 
    return drivers.slice(-2); 
}; 
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))
