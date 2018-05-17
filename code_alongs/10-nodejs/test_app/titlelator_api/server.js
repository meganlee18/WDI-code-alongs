const express = require('express')
const _ = require('lodash')
const cors = require('cors')

const app = express()
const PORT = 7777

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

//middleware
app.use(cors())

app.get('/', (req, res)=> {
  var name = "Megs"
  res.send(`Hi ${name}, welcome to titlelator API`)
})

app.get('/:keyword', (req, res) => {
  
})

app.get('/api/titles', (req, res) => {
  const titles = [
    'dogs love you',
    'a million ways to get rich',
    'how to be happy',
    'what a wonderful world',
    'smile and everything will be alright'
  ]

  const data = {
    titles: _.sample(titles)
  }

  res.json(data)
})