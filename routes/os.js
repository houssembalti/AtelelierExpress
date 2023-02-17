var express = require("express");
var router = express.Router();
var os = require("os");
var p = require("../products.json");

router.get("/produits", function (req, res) {
  res.json(p);
});
router.get("/produits/:ids", function (req, res) {
  var ids = req.params.ids;
    res.json(p[ids])
});
router.get("/produits/instock/:qt",function(req,res){
  var qt=req.params.qt;

})
router.get("/produits/:id/:q",function(req,res){
  var id=req.params.id;
  var q =req.params.q;
  //res.json(p[id])
  res.json({"total price =" :p[id].price*q})
  
})

/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    Hostname: os.hostname(),
    Type: os.type(),
    platform: os.platform(),
  });
});

router.get("/cpus", function (req, res) {
  res.json(os.cpus());
});
router.get("/cpus/:id", function (req, res) {
  var ident = req.params.id;
  res.json(os.cpus()[ident]);
});
module.exports = router;
