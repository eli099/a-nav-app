import express from 'express'

// console.log('Hello World!')
const PORT = 5000

const app = express()
app.listen(PORT, () => console.log(`Express app is running on ${PORT}`))

// Mock Database
const dogs = [
  { name: 'Rodney', age: 12 },
  { name: 'Dolly', age: 9 },
  { name: 'Monty', age: 5 }
]

const logger = (req, res, next) => {
  console.log('Request body', req.body)
  console.log(`incoming request on route: ${req.method} - ${req.url}`)
  next()
}

app.use(logger)

// Parse body into JSON
app.use(express.json())

// Create endpoint
app.use((req, res, next) => {
  res.end('Welcome to our API!')
})


console.log({ app })