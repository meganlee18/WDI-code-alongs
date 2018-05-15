function getFavColor() {
  return ['mistyrose', 'pink']
}

// var colors = getFavColor()
// var favColor = colors[0]

var [favColor, meh] = getFavColor()

console.log(favColor)
console.log(meh)

function getPerson() {
  return {
    name: 'codebusters',
    number: 15
  }
}

var { name: wdiName, number: wdiNumber } = getPerson()

// console.log(wdiName)
// console.log(wdiNumber)

// var { name: name, number: number } = getPerson()
// console.log(name)
// console.log(number)

// var { name, number } = getPerson()
// console.log(name)
// console.log(number)
//exactly as the one above 
//as long as the keys and values match, they will console log the data


function getWdi() {
  return {
    name: 'codebusters',
    number: 15,
    coolbeans: {
      stuff: 'meh'
    }
  }
}

var wdi = getWdi()
//wdi.coolbeans.stuff -> to get to 'meh'

var { name } = getWdi()
console.log(name)