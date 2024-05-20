import express from 'express'

// console.log('Hello World!')
const PORT = 5000

const app = express()

// Create endpoint
const handleRouteRequest = (req, res, next) => {
  return res.end('Welcome to our root endpoint of the API')
}

const handleNotFound = (req, res, next) => {
  return res.status(404).end('Not Found')
}

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

// Parse body into JSON
app.use(express.json())

app.use(logger)

// Check get request is '/'
app.get('/', handleRouteRequest)

// If not return handleNotFound
app.use(handleNotFound)


console.log({ app })