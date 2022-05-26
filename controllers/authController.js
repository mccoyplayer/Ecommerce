import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import {
  createJWT,
  verifyToken,
  attachCookiesToResponse,
} from "../utils/jwt.js";

export const register = async (req, res) => {
  const { email, name, password } = req.body;
  const emailAlreadyExists = await userModel.findOne({ email });

  if (emailAlreadyExists) {
    return res.status(400).send("User already exists");
  }
  try {
    //TODO: take care of registering a admin account

    //save user to the database
    const userCount = await userModel.count();
    let role = 'user';
    if(userCount == 0){
      role = 'admin';
    }
    const user = await userModel.create({ name, email, password, role });

    //create payload for jwt
    const payloadUser = {
      name: user.name,
      userId: user._id,
      role: user.role,
    };

    //create token and send in cookie
    attachCookiesToResponse({ res, payloadUser });
    //send response
    //FIXME: dont send password in response
    res.status(201).json({
      user
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const comparePassword = async (inputPassword, savedPassword) => {
  const isMatch = await bcrypt.compare(inputPassword, savedPassword);
  return isMatch;
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please provide email and password");
  }
  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    return res
      .status(401)
      .send("No such user exists, you need to register first");
  }
  const isPasswordCorrect = comparePassword(password, user.password);
  if (isPasswordCorrect === false) {
    return res.status(401).send("Incorrect email or password");
  }

  //create payload for jwt
  const payloadUser = {
    name: user.name,
    userId: user._id,
    role: user.role,
  };

  //create token and send in cookie
  attachCookiesToResponse({ res, payloadUser });
  //send response
  res.status(200).json({
    user: { payloadUser },
  });
};

export const logout = async (req, res) => {
  res.cookie('jwtToken','logout',{
    httpOnly:true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({
    msg:'user logged out',
  })
};
