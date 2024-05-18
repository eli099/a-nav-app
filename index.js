import express from 'express'

console.log('Hello World!')
const PORT = 5000

const app = express()
app.listen(PORT, () => console.log(`Express app is running on ${PORT}`))

console.log({ app })