const express = require("express")
const router = express.Router()
const flavoursController = require("../controllers/flavoursController.js")
const mixesController = require("../controllers/mixesController.js")
const usersController = require("../controllers/usersController.js")
const votesController = require("../controllers/votesController.js")

router.get("/", votesController.getWinner)
router.get("/flavours", flavoursController.getFlavours)
router.get("/users", usersController.getUsers)

router.get("/mixes", mixesController.getMixes)
router.post("/mixes", mixesController.addMix)
router.patch("/mixes/:id", mixesController.editMix)
router.delete("/mixes/:id", mixesController.deleteMix)

router.get("/votes", votesController.getVotes)
router.post("/votes", votesController.placeVote)
router.patch("/votes/:id", votesController.editVote)
router.delete("/votes/:id", votesController.deleteVote)

module.exports = router
