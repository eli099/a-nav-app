import express from 'express'
import mongoose from 'mongoose'

import { v4 as uuid } from 'uuid'

// console.log('Hello World!')
const PORT = 5000
const MONGODB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/calmcues'

const logger = (req, res, next) => {
  console.log('Request body', req.body)
  console.log(`🚨 Incoming request on ${req.method} - '${req.url}'`)
  next()
}

const connectToDb = async () => {
  // ! useNewUrlParser & useUnifiedTopology no longer needed since node.js driver version 4.0
  // const opts = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // }

  // mongoose used as database connector
  // mongoose.connect will return a promise, that we can then await
  return mongoose.connect(MONGODB_CONNECTION_STRING)
}

const startServer = async () => {
  // initialise express server w/ capability of listening to requests, utility functions for creating
  // specific endpoints
  const app = express()
  app.use(logger)
  app.get('/', (req, res, next) => {
    return res.end('Welcome to our API.')
    // after return request <-> response cycle is finished
    // code not run server-side anymore
  })
  await connectToDb()
  console.log('Connected to MongoDB 🔗')
  app.listen(PORT, () => console.log(`💻 Server listening on ${PORT}.`))
}

startServer()

// // Create endpoint
// const handleRouteRequest = (req, res, next) => {
//   return res.end('Welcome to our root endpoint of the API.')
// }

// const handleNotFound = (req, res, next) => {
//   return res.status(404).end('Not Found')
// }

// // Mock Database
// const users = [
//   { name: 'Rodney', location: 'UK' },
//   { name: 'Dolly', location: 'USA' },
//   { name: 'Monty', location: 'Japan' }
// ]

// // Parse body into JSON
// app.use(express.json())

// // Check get request is '/'
// app.get('/', handleRouteRequest)

// app.get('/users', (req, res, next) => {
//   return res.json(users)
// })

// // Add post request
// app.post('/user', (req, res, next) => {
//   const { body: newUser } = req
//   users.push(newUser)
//   console.log(users)
//   return res.end(`User with name ${req.body.name} has been added.`)
// })

// // If not return handleNotFound
// app.use(handleNotFound)

// console.log({ app })