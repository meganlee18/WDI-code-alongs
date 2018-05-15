// animals name toys

class Animal {

  constructor(name = "dt") { //initialize
    this.name = name //classes are not private

  }

  getName() {
    return this.name.toUpperCase()
  }
}

var a1 = new Animal() //'dt' --> default if not specified ('dt')
var a2 = new Animal('codebusters')
var a3 = new Animal('haha')

console.log(a1)
console.log(a1.name) //returns the name for a1
console.log(a2)
console.log(a2.getName())
console.log(a3.getName())
