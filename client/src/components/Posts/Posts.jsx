import React from 'react'
import Post from './Post/Post'
import useStyles from './style'
import { Grid,CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Posts = () => {

  
  const posts = useSelector((state)=> state.posts)
  const classess = useStyles()
  console.log(posts)
  console.log(typeof posts[0])
  
  return (
    !posts.lenght ? <CircularProgress></CircularProgress> : (
      <Grid className={classess.mainContainer} container alignItems='stretch' spacing={3} >
        {posts.map((post)=>(
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}></Post>
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts
