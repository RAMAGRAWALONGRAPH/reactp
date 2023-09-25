const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")


exports.signup = async(req, res, next) => {
    try{
       
        const {name, email} = req.body

        if(!name || !email){
            throw new error("please provide all fields")
        }

        const user = await prisma.user.create({
            data: {
             name,
             email
             
           },
          })
       cookieToken(user, res)
       
    }catch(error){
        throw new Error(error)
    }
}

exports.login = async (req, res, next)=>{
    try{
        const {email} = req.body
    
        //find a user based on email
        const user = await prisma.user.findUnique({
            where: {
                email
            }
       })
      
   if(!user){
    throw new Error("User not found")
   } 
   cookieToken(user, res)
    }catch(error){
        throw new Error(error)
    }
}

exports.logout = async(req, res, next) => {
    try{
        res.clearCookie("token");
        res.json({
            success: true
        })
    }catch(error){
        throw new Error(error)
    }
}
  