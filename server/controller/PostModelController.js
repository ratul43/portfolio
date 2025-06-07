import PostModel from "../model/PostModel.js"

export const PostController = async(req, res)=>{
    let data = await PostModel.find()
    return res.status(200).json(data)
}