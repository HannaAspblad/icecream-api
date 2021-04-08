const mixes = require("../models/mixes.js")

async function getMixes(req, res) {
  try {
    const results = await mixes.getMixes()
    return res.json(results)
  } catch (err) {
    return res.json(err)
  }
}

async function addMix(req, res) {
  const newMix = Object.values(req.body)

  try {
    const results = await mixes.addMix(newMix)
    return res.json(results)
  } catch (err) {
    return res.json(err)
  }
}

async function editMix(req, res) {
  const id = req.params.id
  const newValues = Object.values(req.body)
  newValues.push(Number(id))

  try {
    const results = await mixes.editMix(newValues)
    return res.json(results)
  } catch (err) {
    return res.json(err)
  }
}

async function deleteMix(req, res) {
  const id = req.params.id

  try {
    const results = await mixes.deleteMix(id)
    return res.json(results)
  } catch (err) {
    return res.json(err)
  }
}

module.exports = { getMixes, addMix, editMix, deleteMix }
