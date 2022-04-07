import express from 'express';
import mongoose from 'mongoose';
import newItemSchema from '../models/models.js';
import cors from "cors"
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const NewItem =mongoose.model("Item", newItemSchema) 
NewItem.find({}, function(err, allItems){
  if (err) { return next(err) }
res.send(allItems)

})

});

router.use(cors())

router.post('/', function(req, res, next) {
const NewItem =mongoose.model("Item", newItemSchema) 
const itemToPost = new NewItem(req.body)

itemToPost.save(function (err, itemToPost){
  if (err) { return next(err) }
  res.json(201, itemToPost)

})


});

export default router;
