const express = require("express");
const { db } = require("../model/contact");
var router = express.Router();
const Contact = require("../model/contact");

router.get("/", function (req, res) {
  Contact.find(function (err, data) {
    if (err) throw err;

    res.json(data);
  });
});
router.post("/add", function (req, res) {
    var c = new Contact({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    });
    c.save();
});
router.get("/delete/:id",(req,res)=>{
        var ident=req.params.id;
        Contact.findByIdAndRemove({ _id : ident}, function(err){
            if(err) throw err;
        })
        res.redirect("/contact/")

});
router.post("/update/:id",(req,res)=>{
    var ident=req.params.id
    Contact.findById({_id:ident},(err,data)=>{
            data.name = req.body.name
            data.email =req.body.email
            data.phone=req.body.phone  
        //console.log(data);
        data.save();


    })
    res.send()

})
module.exports = router;
