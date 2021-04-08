const flavours = require("../models/flavours.js")

async function getFlavours(req, res) {
  try {
    const results = await flavours.getFlavours()
    res.json(results)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { getFlavours }
