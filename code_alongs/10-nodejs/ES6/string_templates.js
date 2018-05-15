function greeting(name = "Mary"){
  // return 'hello ' + name //before es6
  return `Ola ${ name }` //es6
}

console.log(greeting())

function greet(person) {
  //return person.firstname + ' ' + person.lastname
  return `Hello ${person.firstname} ${person.lastname}`
}


console.log(greet({ firstname: 'Mike', lastname: 'Windbreaker'}))