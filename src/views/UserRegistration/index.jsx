import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Component, Fragment } from 'react';
import { styleSheet } from './style';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class UserRegistration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <Typography variant="h4">
                        User Registration
                    </Typography>
                </div>
                <div className={classes.form__container}>
                    {/* <div className={classes.left__form}></div>
                    <div className={classes.right__form}></div> */}
                    <Fragment>
                        <Grid container spacing={0.5}>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="First Name" label="First Name" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Last Name" label="Last Name" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Email" label="Email" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="UserName" label="UserName" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="password" label="Password" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="City" label="City" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Street" label="Street" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Street No" label="Street No" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Zip Code" label="Zip Code" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Lat Value" label="Lat Value" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Long Value" label="Long Value" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Mobile No" label="Mobile No" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                            <Stack direction="row" spacing={2}>    
                            <Button variant="contained">Clear</Button>
                            <Button variant="contained">Save</Button>
                            </Stack>
                            </Grid>
                        </Grid>
                    </Fragment>
                </div>
                <div className={classes.btn__container}></div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(UserRegistration)