

//TODO: implement same function by passing in the arguments
const authorizePermissions = (req,res,next) => {
    const role = req.user.role;
    if(role !== 'admin'){
        res.status(403).json({
            msg:'failed to authenticate'
        });
    }
    next();
}

export default authorizePermissions;