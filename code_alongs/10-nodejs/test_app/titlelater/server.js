const express = require('express')
const app = express()
const _ = require('lodash')
const querystring = require('querystring')
const request = require('request');

const PORT = 4567;

app.listen(PORT,() => {
console.log(`listening on ${PORT}`)
})

// using templates & storing them in views/
app.set('views', './views')
app.set('view engine', 'ejs')

// [get '/details?title=jaws"] <--- client
//      ||
//      ||
//      \/
//using middleware
app.use(express.static('public')) // ---> respond
//      ||
app.use(function(res, req, next) {
  console.log(`${req.method} ${req.path}`)
  next()
})
//      \/
app.get('/', (req, res) => {
  res.render('home')
}) //   ||
//      \/
app.get('/titlelate', (req, res) => {
  const things = ['corgi','Dashschund','Bulldog', 'fake ticket', 'green taxi', 'money tree', 'grandma']
  const description = ["horrid", "lovely", "disgusting", "superlicious", 'sexy']
  const talkThings = _.sample(things)
  const talkDescription = _.sample(description)
  res.send(`Hey ${talkDescription} ${req.query.keyword} I think you would like a ${talkThings}!`)
})

app.get('/about', (req, res) => {
  res.send('about me')
})

app.get('/details', (req, res) => {

  const qs = {
    apikey: '2f6435d9',
    t: req.query.movie
  }
  
  const url = `http://www.omdbapi.com/?${querystring.stringify(qs)}`;

  const options = {
    url: url,      
    json: true 
  }

  request(options, function(err, omdbRes, data) {
    res.render('details', {movie: data})
  })

})

