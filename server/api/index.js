const router = require("express").Router()

router.use("/route1", require("./route1"))
router.use("/route2", require("./route2"))
router.use("/route3", require("./route3"))

router.use(function(req, res, next) {
  const err = new Error("Not found.")
  err.status = 404
  next(err)
})

module.exports = router
