const db = require("../database/connection.js")

function getVotes() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Votes", (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

function placeVote(mix, id) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Votes (Mix_Id, User_Id) VALUES (?,?)`,
      [mix, id],
      function (err) {
        if (err) {
          reject(err)
        } else {
          resolve({ message: `new vote added for mix with id ${this.lastID}` })
        }
      }
    )
  })
}

function editVote(id, mix, user) {
  return new Promise((resolve, reject) => {
    db.run(
      `
      UPDATE Votes
        SET Mix_Id = ?
        WHERE Vote_Id IS ? AND User_Id IS ?`,
      [mix, id, user],
      function (err) {
        if (err) {
          reject(err)
        }
        if (this.changes == 0) {
          reject({ message: "no changes made" })
        } else {
          resolve({ message: `vote updated` })
        }
      }
    )
  })
}

function deleteVote(id, user) {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM Votes WHERE Vote_Id IS ? AND User_Id IS ?`,
      [id, user],
      function (err) {
        if (err) {
          reject(err)
        }
        if (this.changes == 0) {
          reject({ message: "no changes made" })
        } else {
          resolve({ mesage: `vote deleted` })
        }
      }
    )
  })
}

function getWinner() {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT Name FROM Votes
      INNER JOIN Mixes
      ON Mixes.Mix_Id IS Votes.Mix_Id
      GROUP BY Mixes.Mix_Id
      ORDER BY Mixes.Mix_Id DESC
      
      
      
      `,
      (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve({ res })
        }
      }
    )
  })
}

module.exports = { getVotes, placeVote, editVote, deleteVote, getWinner }
