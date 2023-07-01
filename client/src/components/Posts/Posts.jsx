import React from 'react'
import Post from './Post/Post'
import useStyles from './style'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Posts = () => {
  const posts = useSelector((state)=> state.posts)
  const classess = useStyles()
  console.log(posts)
  return (
    <>
      <h1>Post555</h1>
      <Post/>
      <Post/>
    </>
  )
}

export default Posts
