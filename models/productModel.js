import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim:true,
    required: [true,'Please provide a name'],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim:true,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required:true,
    enum:['office','kitchen','bedroom'],
  },
  company: {
    type: String,
    required: true,
    enum:['ikea','liddy','marcos']
  },
  averageRating: {
    type: Number,
    default:0
  },
  user:{
      type:mongoose.Types.ObjectId,
      ref: 'User',
      required:true
  },
  timestamps:true,
});

export default mongoose.model('productModel',productSchema);
