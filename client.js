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
    //newArray.push(newObject(array[i]));
    console.log(array[i]);
    console.log(test(array[i]));

  }
  return newArray;
}

function test(el){
  return el.name;
}
function nameTest(el){
  el.name
}
/*
function newObject(param){
  let newName = param.name;
  let newBonusPercentage = bonusPercentage(param);
  let salary = param.annualSalary;
  let newCompensation = tcompensation(salary,newBonusPercentage);
  let tBonus = salary * newBonusPercentage;
  let newObject = {
    name: newName,
    bonusPercentage: newBonusPercentage,
    totalCompensation: newCompensation,
    totalBonus: tBonus
  };
/*
}
function bonusPercentage(param){
  let percentage = 0;
 
    if(param.employeeNumber.length > 4) {
     if(param.reviewRating <= 2){
       percentage = 0;
      }
      else if(param.reviewRating === 3) {
        percentage = .04;
      }
      else if(param.reviewRating === 4) {
        percentage = .06;
      }
      else if(param.reviewRating === 5) {
        percentage = .1;
      }
      percentage += .05;
    }

    else{
      if (param.reviewRating <= 2) {
        percentage = 0;
      } else if (param.reviewRating === 3) {
        percentage = .04;
      } else if (param.reviewRating === 4) {
        percentage = .06;
      } else if (param.reviewRating === 5) {
        percentage = .1;
      }
  }
    return annualSalaryinclusion(param, percentage);
    
}

function annualSalaryinclusion(el, number){
  if(el.annualSalary > 65000){
    return number - .01;
  }
  else{
    return number;
  }
}
function tcompensation(num,percent){
      return num + (num * percent);
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
*/

console.log( employees );
console.log(newEmployeeObject(employees));
});