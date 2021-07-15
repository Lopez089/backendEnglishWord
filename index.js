const express = require('express')
const app = express()
const routerLogin = require('./router/login')

app.use(express.json())
app.use('/login', routerLogin)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running port ${PORT}`)
})
