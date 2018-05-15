function greeting (name) {
  if (name != null || name != undefined) {
    name = "Mary"
  }
  return 'Hello ' + name
}

greeting("mary")

function greeting(name = "mary"){
  return 'hello ' + name
}

console.log(greeting())

function greet(person) {
  return person.firstname + ' ' + person.lastname
}

console.log(greet({firstname: 'Mary', lastname: 'Toe'}))