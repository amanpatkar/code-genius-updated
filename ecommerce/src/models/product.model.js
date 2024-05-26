import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title:{type:String,required: [true, 'Title is required']},
  price:{type:Number,required:[true, 'Price is required']},
  description:{type:String},
  category:{type:String},
  image:{type:String},
  rating : {type:Object,}

})


let Product =  mongoose.model('product',productSchema);

export default Product
