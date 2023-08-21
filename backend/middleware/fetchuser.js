//Middleware is used whenever a login is required(a route is hit which requires login).
//It is required in order to fetch id from the authtoken .so tha we can get the user details from it.

const jwt = require("jsonwebtoken");
const JWT_SECRET='Iamisha@2804';

const fetchuser=(req,res,next)=>{
    // Get the user from jwt token and add the id to req object

    const  token= req.header('auth-token');
    if(!token){
    return res.status(401).send({error: 'Please authenticate using a valid token'});
    }

    try {
        const data= jwt.verify(token, JWT_SECRET);
        req.user= data.user;
        next();
    } catch (error) {
    return  res.status(401).send({error: 'Please authenticate using a valid token'});
    }
}

module.exports= fetchuser;