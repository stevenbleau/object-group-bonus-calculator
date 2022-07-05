

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

console.table( employees );




/**
 * calculates employee bonus
 * 
 * @param {object} employee
 * @return {object} employee name, bonusPercentage, totalCompensation, totalBonus
 */

function reviewBonus(employee){

  // create new obect for employee bonus
  let employeeBonus = {
    name: (employee.name),
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }

  //create empty variable for bonus percentage
  let bonusPercentage = 0;
  //convert annual salary string to number
  let salary = Number(employee.annualSalary);

  //employee rating bonus calculations
  if(employee.reviewRating <= 2){
    console.log("no bonus");
  } else if( employee.reviewRating === 3){
    bonusPercentage += .04;
  } else if( employee.reviewRating === 4 ){
    bonusPercentage += .06
  } else if ( employee.reviewRating === 5){
    bonusPercentage += .10
  }

  console.log(employee.employeeNumber.length);

  //employee number bonus calculations if rating is over 2
  if (employee.employeeNumber.length === 4 && employee.reviewRating > 2){
    bonusPercentage += .05;
  }

  //employee bonus correction if making 65k+
  if (salary > 65000){
    bonusPercentage -= .01;
  }
  //maximum bonus correction
  if(bonusPercentage > .13){
    bonusPercentage = .13;
  }
  //minimum bonus correction
  if(bonusPercentage < 0){
    bonusPercentage = 0;
  }

  employeeBonus.bonusPercentage = bonusPercentage;
  employeeBonus.totalBonus = salary * bonusPercentage;
  employeeBonus.totalCompensation = salary + employeeBonus.totalBonus;

  return employeeBonus;
}

//call reviewBonus function for all employees
for (let i = 0; i < employees.length; i++){
  console.table(reviewBonus(employees[i]));
}
