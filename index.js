import express from 'express'

// import { v4 as uuid } from 'uuid'

const PORT = 5000

const app = express()


// create logger middleware that will be used with within our request <-> response cycle by app.use
// app.use is express function that gives access to request, response and next object

const logger = (req, res, next) => {
  console.log(`🚨 - Incoming request on ${req.method} - ${req.url}`)
  next()
}

console.log(logger)