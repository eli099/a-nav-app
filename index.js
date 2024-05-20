import express from 'express'

console.log('Hello World!')
const PORT = 5000

const app = express()
app.listen(PORT, () => console.log(`Express app is running on ${PORT}`))

app.use((req, res, next) => {
  console.log(req)
})

console.log({ app })