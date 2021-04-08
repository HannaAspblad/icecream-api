const db = require("../database/connection.js")

function getMixes() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Mixes", (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

function addMix(newMix) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Mixes (Name, Flavour_1, Flavour_2, Flavour_3, Flavour_4) VALUES (?,?,?,?,?)`,
      newMix,
      function (err) {
        if (err) {
          reject(err)
        } else {
          resolve({ message: `new mix added with id ${this.lastID}` })
        }
      }
    )
  })
}

function editMix(newValues) {
  return new Promise((resolve, reject) => {
    db.run(
      `
      UPDATE Mixes
      SET Name = ?, Flavour_1 = ?, Flavour_2 = ?, Flavour_3 = ?,Flavour_4 = ?
      WHERE Mix_Id IS ?`,
      newValues,
      function (err) {
        if (err) {
          reject(err)
        }
        if (this.changes == 0) {
          reject({ message: "no changes made" })
        } else {
          resolve({ message: `mix updated` })
        }
      }
    )
  })
}

function deleteMix(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM Mixes WHERE Mix_Id IS ?`, [id], function (err) {
      if (err) {
        reject(err)
      }
      if (this.changes == 0) {
        reject({ message: "no changes made" })
      } else {
        resolve({ mesage: `mix deleted` })
      }
    })
  })
}

module.exports = { getMixes, addMix, editMix, deleteMix }
