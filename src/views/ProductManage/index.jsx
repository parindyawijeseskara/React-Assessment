import { Component,Fragment } from "react";
import { withStyles } from '@mui/styles';
import { styleSheet } from './style';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class ProductManage extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                <Typography variant="h4">
                       Product Manage
                    </Typography>
               
                </div>
                <div className={classes.form__container1}>
                <Fragment>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Title" label="Title" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Price" label="Price" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Catergory" label="Catergory" variant="outlined" size="small"
                        style={{width: '100%'}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Description" label="Description" variant="outlined" size="small"
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
export default withStyles(styleSheet)(ProductManage)