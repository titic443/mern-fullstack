import { json } from "express";
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req,res)=> {
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);
        //status 200: OK
        // res.status(200).json(postMessages)
        res.status(200).json(["Hello","World"])
    }catch(error) {
        //status 404: Not Found
        res.status(404).json({message: error.message})
    }
}

export const createPosts = async (req,res)=> {
    const post = req.body
    const newPost = new PostMessage(post)
    try{
        await newPost.save()
        //stauts 201: Created
        console.log(newPost)
        res.status(201).json(newPost)
    }catch(error){
        //status 409: Conflict
        res.status(409).json({message: error.message})
    }
}
