import axios from 'axios'

const url = "http://127.0.0.1:5000/posts/";

export const fetchPost = () => axios.get(url)

export const createPost = (newPost) => axios.post(url,newPost)

