import { makeStyles } from "@material-ui/core/";
import { green, grey } from "@material-ui/core/colors";

export default makeStyles(({
    container:{
      // marginRight: '5px', 
      // marginLeft: '64px',
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
}));

