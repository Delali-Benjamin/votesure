const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const voteController = require("../controllers/vote.controller");

// Only VOTERs can cast votes
router.post("/cast", authMiddleware, roleMiddleware(["VOTER"]), voteController.castVote);

// (Optional: view vote confirmation)
router.get("/status", authMiddleware, roleMiddleware(["VOTER"]), voteController.getVoteStatus);

module.exports = router;
