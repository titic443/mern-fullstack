import React,{ useState } from 'react'
import useStyle from './style'
import { TextField,Button,Typography,Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

const Form = () => {
  const classess = useStyle()

  const handleSubmit =  async (e) => { e.preventDefault(); }

  const [postData, setPostData] = useState({creator: '', titles: '', message: '', tags: '', selectedFile: ''})

  const clear = () => {}

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
          name='message' 
          variant='outlined' 
          label='Message' 
          fullWidth
          value={postData.message}
          onChange={(e)=> setPostData({...postData,message: e.target.message})}
        >
        </TextField>
        <TextField 
          name='titles'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.titles}
          onChange={(e)=> setPostData({...postData,titles: e.target.titles})}
        >
        </TextField>
        <TextField 
          name='tags' 
          variant='outlined' 
          label='Tags' 
          fullWidth
          value={postData.tags}
          onChange={(e)=> setPostData({...postData,tags: e.target.tags})}
        >
        </TextField>
        <div className={classess.fileInput}>
          <FileBase 
            type= "file"
            multiple={false}
            onDone={({base64}) => {setPostData({...postData, selectedFile: base64.target.base64})}}
          />
        </div>
        <Button className={classess.buttonSubmit} variant='container' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='container' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
