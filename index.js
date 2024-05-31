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

console.log(logger)