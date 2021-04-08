const statusHandler = (req, res) => {
  res.status(404).send({
    message: "404: Page not found",
  })
}

module.exports = { statusHandler }
