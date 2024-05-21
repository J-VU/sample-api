const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 3030
const app = express()

// healthcheck
app.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    message: 'server online',
  })
})

app.listen(
  PORT,
  console.log(`Server online @ ${PORT} (${process.env.NODE_ENV})`)
)
