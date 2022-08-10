import { Component,Fragment } from "react";
import { withStyles } from '@mui/styles';
import { styleSheet } from './style';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class DashBoard extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                <Grid container spacing={8}>
                        <Grid item lg={2} md={4} sm={2} xm={4}>
                            <Button variant="contained" style={{width: '100%'}}>DashBoard</Button>
                        </Grid>
                        <Grid item lg={2} md={4} sm={2} xm={4}>
                            <Button variant="contained" style={{width: '100%'}}>Product</Button>
                        </Grid>
                        <Grid item lg={2} md={4} sm={2} xm={4}>
                            <Button variant="contained" style={{width: '100%'}}>Cart</Button>
                        </Grid>
                        
                </Grid>
                </div>
                <div className={classes.form__container}>
                    {/* <div className={classes.left__form}>
                    </div>
                    <div className={classes.right__form}></div>
                     */}
                    <div className={classes.left__form}> 
                        <div className={classes.left__div}> 
                        <Box mt={6} md={4}>
                        <Typography variant="h4">
                        User Registration
                        </Typography>
                        </Box>
                        </div>
                        <div className={classes.left__div}> 
                        <Box mt={6} md={4}>
                        <Typography variant="h4">
                        Cart
                        </Typography>
                        </Box>
                        </div>
                    </div>  
                    <div className={classes.right__form}>
                        <div className={classes.left__div}> 
                        <Box mt={6} md={4}>
                        <Typography variant="h4">
                         Users
                        </Typography>
                        </Box>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(DashBoard)

