import React,{ useState } from 'react'
import useStyle from './style'
import { TextField,Button,Typography,Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
const Form = () => {
  const classess = useStyle()
  const dispatch = useDispatch()
  const handleSubmit =  async (e) => { 
    e.preventDefault();

    dispatch(createPost(postData))
   }
  
  const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  return (
    <Paper className={classess.paper}>
      <form autoComplete='off' noValidate className={`${classess.root} ${classess.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating Memory</Typography>
        <TextField 
          name='creator' 
          variant='outlined' 
          label='Creator' 
          fullWidth
          value={postData.creator}
          onChange={(e)=> setPostData({...postData,creator: e.target.value})}
        >
        </TextField>
        <TextField 
          name='titles'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e)=> setPostData({...postData,title: e.target.value})}
        >
        </TextField>
        <TextField 
          name='message' 
          variant='outlined' 
          label='Message' 
          fullWidth
          value={postData.message}
          onChange={(e)=> setPostData({...postData,message: e.target.value})}
        >
        </TextField>
        <TextField 
          name='tags' 
          variant='outlined' 
          label='Tags' 
          fullWidth
          value={postData.tags}
          onChange={(e)=> setPostData({...postData,tags: e.target.value})}
        >
        </TextField>
        <div className={classess.fileInput}>
          <FileBase 
            type= "file"
            multiple={false}
            onDone={({base64}) => {setPostData({...postData, selectedFile: base64})}}
          />
        </div>
        <Button className={classess.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button className={classess.buttonClear} variant='contained' color='secondary' size='large' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
