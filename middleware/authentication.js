import { verifyToken } from "../utils/jwt.js";

const authenticateUser = (req,res,next) => {
    const token = req.signedCookies.jwtToken;
    console.log(token);
    if(!token){
        res.status(401).send({
            msg:'authentication failed'
        });
    }
    try{
        const {name, userId, role}= verifyToken({token});
        req.user = {name, userId,role};
        next();
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            msg:'Failed to authenticate user'
        })
    }
}

export default authenticateUser;