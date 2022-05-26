import jwt from "jsonwebtoken";
import "dotenv/config";

export const createJWT = ({ payloadUser }) => {
  const token = jwt.sign(payloadUser, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

export const verifyToken = ({token}) => {
    const isMatch = jwt.verify(token,process.env.JWT_SECRET);
    return isMatch;
}

export const attachCookiesToResponse = ({res,payloadUser}) => {

    //create jwt with payload
    const token = createJWT({ payloadUser });

    //send jwt as cookie
    res.cookie('jwtToken',token,{
        httpOnly:true,
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24)),
        signed:true
    });
    
}