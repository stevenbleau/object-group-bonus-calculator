

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );




/**
 * calculates employee bonus
 * 
 * @param {object} employee
 * @return {object} employee name, bonusPercentage, totalCompensation, totalBonus
 */



function bonus (employee){
  let employeeBonus = {
    name: (employee.name),
    bonusPercentage: 0,
    totalCopensation: 0,
    totalBonus: 0,
  }
}



function reviewBonus(employee){
  let bonusPercentage = 0; ///note of runs out of function
  if(employees.reviewRating <= 2){
    console.log("no bonus");
  } else if( employees.reviewRating === 3){
    bonusPercentage += .04;
  } else if( employees.reviewRating === 4 ){
    bonusPercentage += .06
  } else if ( employees.reviewRating === 5){
    bonusPercentage += .10
  }
  return bonusPercentage;
}

console.log("test", reviewBonus(employees.Robert));



