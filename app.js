require('dotenv').config()
const PORT = process.env.PORT || 8080

const express = require("express")
const app = express()
const routes = require("./routes/index.js")
const logger = require("./middleware/logger.js")
const errors = require("./errors/statusHandler.js")

app.use(express.json())
app.use(logger)
app.use(routes)
app.use(errors.statusHandler)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})
