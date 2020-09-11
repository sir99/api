const router = require("express").Router();
const User = require("../model/User");

router.post("/register", (req, res) => {
    console.log(req);
});

module.exports = router;