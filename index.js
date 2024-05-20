import express from 'express'

// console.log('Hello World!')
const PORT = 5000

const app = express()
app.listen(PORT, () => console.log(`Express app is running on ${PORT}`))

const logger = (req, res, next) => {
  console.log(`incoming request on route: ${req.method} - ${req.url}`)
  next()
}

app.use(logger)

console.log({ app })