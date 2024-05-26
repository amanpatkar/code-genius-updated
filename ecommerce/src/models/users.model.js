import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email:{type:String,required: [true, 'email is required']},
  phone:{type:String,required: [true, 'phone is required']},
  password:{type:String,required: [true, 'passwrod is required']},
  confirmPassword:{type:String}
})

let User =  mongoose.model('users',userSchema);

export default User
