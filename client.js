$(document).ready(function(){
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

function newEmployeeObject(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(newObject(array[i]));
  }
  return newArray;
}

function newObject(param){
  let newName = param.name;
  let newBonusPercentage = 
  let newObject = {
    name: newName,
    bonusPercentage: ,
    totalCompensation: ,
    totalBonus:
  };
}
function bonusPercentage(param){
  if(param.reviewRating <= 2){
    return = 0;
  }
  else if(param.reviewRating === 3){
    return annualSalary * .04;
  }
  else if(param.reviewrating === 4){
    return .06;
  }
  else if(param.reviewRating === 5){
    return .10;
  }
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
});