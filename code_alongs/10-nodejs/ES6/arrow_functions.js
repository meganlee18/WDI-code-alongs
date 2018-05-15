
// function expression
var sayHi = function(name) {
  return `hi ${name}`
}

//arrow function - same as above just different syntax
var sayHi = (name) => {
  return `hi ${name}`
}

var sayHi = name => `hi ${name}`  //if one line, no need for return
                            //if using curly, a return is still required

// before es6 function expression
var sayHi = function() {
  return `hi`
}

// arrow
var sayHi = () => {
  return `hi`
}

const languages = ['ruby', 'js', 'php']

var upcasedLanguages = languages.map(function(lang) {
  return lang.toUpperCase()
})

var newLang = languages.map(lang => lang.toUpperCase())
