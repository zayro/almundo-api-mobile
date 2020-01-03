'use strict'

import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const HotelSchema = new Schema({
	"name": String,
	"price": String,
	"stars": Number,
    "images": Array,
    "description": String,
    "map": String,
    "street": String,
	"activo": Boolean
});

export default  mongoose.model('hotel', HotelSchema)
