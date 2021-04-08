const db = require("../database/connection.js")

function getFlavours() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Flavours", (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = { getFlavours }
