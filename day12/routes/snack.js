const express = require('express');
const snack = require('../models/snack');
const router = express.Router();


router.get('/',async (req,res)=>{
    console.log("inside get /");
    const cust = await snack.find();
    res.send(cust);
});

router.post('/',async (req,res)=>{
    console.log(req.body);
    const product = new snack(req.body);
    product.save();
    res.send(product);    
});

// updating a customer by id

router.patch("/:snackid", async (req, res) => {
    const filter = { _id: req.params.snackid };
    const update = {};
    console.log(filter);
    
    try {
      const product = await snack.findOneAndUpdate(filter,req.body,{new:true});
       console.log(product);
      await product.save();
      res.json(product);
    } catch (err) {
      res.json({ message: err });
    }
  });


  router.delete("/:snackid", async (req, res) => {
    try {
      const removecustomer = await snack.deleteOne({
        _id: req.params.snackid,
      });
      res.json(removecustomer);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;