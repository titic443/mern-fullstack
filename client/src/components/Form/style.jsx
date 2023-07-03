// import { makeStyles } from '@material-ui/core/styles';

import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: '16px',
    // padding: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 15,
    padding: '8px 22px'
  },
  buttonClear: {
    padding: '8px 22px'
  }
}));