const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ "title": "Hellow world" })
})

router.get("/test", (req, res) => {
  const data = {
    "name": "Julian",
    "website": "the secreats of Node.js"
  }
  res.json(data);
})

module.exports = router;