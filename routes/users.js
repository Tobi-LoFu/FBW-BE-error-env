var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   const body = req.body;
   //console.log(body.hasOwnProperty("username"));
   if (body.hasOwnProperty("username")) {
      res.send(body);
   } else {
      const err = new Error("Request has no username");
      //err.status = 500;
      next(err);
   }
});

module.exports = router;
