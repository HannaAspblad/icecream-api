const votes = require("../models/votes.js")

async function getVotes(req, res) {
  try {
    const results = await votes.getVotes()
    res.json(results)
  } catch (err) {
    res.json(err)
  }
}

async function placeVote(req, res) {
  const mix = req.body.Mix_Id
  const user = req.body.User_Id

  try {
    const results = await votes.placeVote(mix, user)
    res.json(results)
  } catch (err) {
    res.json(err)
  }
}

async function editVote(req, res) {
  const id = req.params.id
  const mix = req.body.Mix_Id
  const user = req.body.User_Id

  try {
    const results = await votes.editVote(id, mix, user)
    return res.json(results)
  } catch (err) {
    return res.json(err)
  }
}

async function deleteVote(req, res) {
  const id = req.params.id
  const user = req.body.User_Id

  try {
    const results = await votes.deleteVote(id, user)
    return res.json(results)
  } catch (err) {
    return res.json(err)
  }
}

async function getWinner(req, res) {
  try {
    const results = await votes.getWinner()
    res.json(results)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { getVotes, placeVote, editVote, deleteVote, getWinner }
