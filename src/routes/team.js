const { Router } = require("express");
const router = Router();

const { getTeams } = require("../controllers/team.controller");

router.get("/", getTeams);

module.exports = router;

