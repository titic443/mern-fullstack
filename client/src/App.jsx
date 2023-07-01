import React, {useEffect} from 'react'
import {Container, AppBar,Grid,Typography,Grow} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import  Form from './components/Form/Form'
import useStyle from './styles'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'
const App = () => {
  const classess = useStyle()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts)
  }, [dispatch])
  return (
    <Container className={classess.container} maxWidth='lg'>
      <AppBar  className={classess.appBar} position='static' color='inherit'>
        <Typography className={classess.heading} variant='h2' >Memory</Typography>
        <img className={classess.image} src={memories} alt="memories" height='60px' />
      </AppBar>
      <div>
        <Container>
          <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  )
}

export default App
