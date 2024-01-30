const express = require('express')
const cors = require('cors')
const noticiasRoutes = require('./routes/noticiasRoutes')
const app = express()
const path = require('path') 
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/noticias', noticiasRoutes)
app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
  })