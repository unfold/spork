import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.post('/webhook', req => {
  console.log('Got a webhook!')
  console.log(req.body)
})

app.listen(process.env.PORT)
