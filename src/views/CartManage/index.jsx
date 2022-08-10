import { Component,Fragment } from "react";
import { withStyles } from '@mui/styles';
import { styleSheet } from './style';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class CartManage extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                <Typography variant="h4">
                       Cart Manage
                    </Typography>
               
                </div>
                <div className={classes.form__container1}>
                <Fragment>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="User Name" label="User Name" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Date" label="Date" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Product Title" label="Product Title" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Qty" label="Qty" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                    </Grid>

                </Fragment>
                </div>
                <div className={classes.form__container2}>

                </div>
                <div className={classes.form__container3}>
                    <Fragment>
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                            <Stack direction="row" spacing={2}>    
                            <Button variant="contained"style={{width: '100%'}}>Clear</Button>
                            <Button variant="contained"style={{width: '100%'}}>Save</Button>
                            </Stack>
                            </Grid>
                        </Grid>
                    </Fragment>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(CartManage)