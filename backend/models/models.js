import mongoose from "mongoose";

const { Schema } = mongoose


const newItemSchema = new Schema({

imageURL:{type:String},
title:{type:String},
description:{type:String},
condition:{type:String},
postcode:{type:String},
cat:{type:String},
date:Date
})


export default newItemSchema

