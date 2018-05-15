


//get total earnings of all australian horses
  //loop through the array
  //find australian horses only
  //find the hourly rate of horses
  //find the hours worked for horses
  //mutiply hourly rate by hours worked

//method 1
var result = 0

var findTotalEarnings = function () {

  var horses = [
    {
      name: 'maythehorsebewithu',
      active: true,
      country: 'AUS',
      yearOfBirth: 2000,
      hourlyRate: 30,
      hoursWorked: 2000
    },
    {
      name: 'my wife knows everthing',
      active: true,
      country: 'USA',
      yearOfBirth: 2007,
      hourlyRate: 50,
      hoursWorked: 2500
    },
    {
      name: 'arrrrr',
      active: true,
      country: 'USA',
      yearOfBirth: 2004,
      hourlyRate: 30,
      hoursWorked: 2000
    },
    {
      name: 'hoof hearted',
      active: false,
      country: 'AUS',
      yearOfBirth: 1981,
      hourlyRate: 88,
      hoursWorked: 900
    },
    {
      name: 'pony',
      active: false,
      country: 'AUS',
      yearOfBirth: 2003,
      hourlyRate: 12,
      hoursWorked: 9000
    },
    {
      name: 'sunny boy',
      active: true,
      country: 'AUS',
      yearOfBirth: 2003,
      hourlyRate: 42,
      hoursWorked: 6450
    }
  ]

  for (var i = 0; i < horses.length; i++) {
    if (horses[i].country === 'AUS') {
      //return the total hours worked
      result = result + horses[i].hourlyRate * horses[i].hoursWorked
      console.log(result)
    }
  }
}

findTotalEarnings();



//method 2
function isAussie(horse) {
  return horse.country === 'AUS'
}

function calcEarnings(horse) {
  return horse.hourlyRate * horse.hoursWorked
}

// isAussie(horses[0]) //true or false

// calcEarnings(horses[0])

function sum(accum, num){
  return accum + num
}
//similar to folding a piece of paper and adding the numbers up as you go

var result = horses
              .filter(isAussie)
              .map(calcEarnings)
              .reduce(sum) //similar to forEach but it returns true or false

console.log(result)

//filter aussie
//map calcEarnings
//reduce sum