var express = require("express");
var router = express.Router();
var p = require("../products.json");

router.get("/", function (req, res) {
  res.json(p);
});
router.get("/:ids", function (req, res) {
  var ids = req.params.ids;
  res.json(p[ids]);
});

router.get("/instock/:qt", function (req, res) {
  var qt = req.params.qt;
  var filtered={};
  Object.keys(p).forEach(function(key){
    var prod=p[key]
    if (prod.stock>=qt){
        filtered[key]=prod
    }
  });
  res.json(filtered);   
});

router.get("/:id/:q", function (req, res) {
  var id = req.params.id;
  var q = req.params.q;
  //res.json(p[id])
  res.json({
    id: req.params.id,
    Quantité: req.params.q,
    unit_price: p[id].price,
    total_price: p[id].price * q,
  });
});

module.exports = router;
