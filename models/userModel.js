import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
    minlength: 1,
    maxlength: 50,
    //using the validator package to validate an email
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    maxlength: 50,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});


//pre save hook to save password in hased format using bcrypt
userSchema.pre("save",async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//function to comapre hash password with input password
//FIXME: can't use this function (WHY?????)
// userSchema.methods.comparePassword = async function(inputPassword){
//   const isMatch = await bcrypt.compare(inputPassword, this.password);
//   return isMatch;
// }

export default mongoose.model("userModel", userSchema);
