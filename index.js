import express from 'express'

import { v4 as uuid } from 'uuid'

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
const users = [
  { name: 'Rodney', location: 'UK' },
  { name: 'Dolly', location: 'USA' },
  { name: 'Monty', location: 'Japan' }
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

app.get('/users', (req, res, next) => {
  return res.json(users)
})

// Add post request
app.post('/user', (req, res, next) => {
  const { body: newUser } = req
  users.push(newUser)
  console.log(users)
  return res.end(`User with name ${req.body.name} has been added.`)
})

// If not return handleNotFound
app.use(handleNotFound)

console.log({ app })