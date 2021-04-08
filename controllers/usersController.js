const users = require("../models/users.js")

async function getUsers(req, res) {
  try {
    const results = await users.getUsers()
    res.json(results)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { getUsers }
