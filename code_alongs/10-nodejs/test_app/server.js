const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('winning!')

})

app.listen(4567, () => {
  console.log('listening on port 4567!')

})