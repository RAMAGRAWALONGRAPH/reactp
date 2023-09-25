// bring in prisma and cookie

const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")

exports.createPost = async(req, res, next) => {
    try{
        const {slug, title, body, authorId} = req.body

        const result = await prisma.post.create({ 
            data: {
                slug,
                title,
                body,
                author : {
                    connect:{ id : authorId},
                  },
            }
             })
             res.json(result)
    } catch(error){
        throw new Error(error)
    }
}
exports.updatePost = async (req, res, next) =>{
    const {id} = req.params;
    const {slug, title, body} = req.body
    try{
        const result = await prisma.post.update({
            where : {id : id},
            data: {
                slug: slug,
                title: title,
                body: body
            }
        })
        res.json(result)

    }catch(error){
        res.json(error)
    }
}

exports.deletePost = async (req, res, next) => {
    const {id} = req.params
    try{
        const result = await prisma.post.delete({
            where: {id: id}
        });
        res.json(result)
    }catch(error){
        throw new Error(error)
    }
}


// get all posts

exports.getPosts = async (req, res, next) =>{
    try{
        const result = await prisma.post.findMany()
      
        res.json(result)
    }catch(error){
        throw new Error(error)
    }
}
