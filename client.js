const employees = [{
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

function newEmployeeObject(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    //newArray.push(newObject(array[i]));
    console.log(array[i].employeeNumber.length);

    newArray.push(calculateBonus(array[i]));

  }
  console.log(newArray);
  return newArray;
}

function test(el) {
  return el.name;
}

function calculateBonus(el) {
  let percentage = 0;
  if (el.reviewRating <= 2) {
    percentage = 0;
  } else if (el.reviewRating === 3) {
    percentage = .04;
  } else if (el.reviewRating === 4) {
    percentage = .06;
  } else if (el.reviewRating === 5) {
    percentage = .1;
  }

  // TODO: If the length <= 4, then update the percentage
  if (el.employeeNumber.length <= 4) {
    percentage += .01;
  }
  

  // TODO: Update it based on 65k
  if(parseInt(el.annualSalary) > 65000){
    percentage = percentage - .01; 
  }
  // TODO: Make sure its min 0, max 13
  if(percentage > .13){
    percentage = .13;
  }
  if(percentage < 0){
    percentage = 0;
  }

  
  let newObject = {
    name: el.name,
    bonusPercentage: percentage,
    totalCompensation: Number(el.annualSalary) + (percentage * el.annualSalary),
    totalBonus: percentage * el.annualSalary,
    // TODO: Add the calculated total bonus here
    // TODO: Add the calculated total compensation
  }
  return newObject;
}

$(document).ready( function() {
  newEmployeeObject(employees);
})




// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.