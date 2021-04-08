const db = require("../database/connection.js")

function getUsers() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Users", (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = { getUsers }
