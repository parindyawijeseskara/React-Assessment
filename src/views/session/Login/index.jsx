import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import React,{ Component } from "react";
import { styleSheet} from "./style";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SnackBar from "../../../components/common/SnackBar";
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:'madhu',
            password:'1234',
            formData:{
                username:'',
                password:''
            },
            //snackBar 
            open: false,
            message: '',
            severity: ''
        }
    }

    checkValidity(){
        console.log("Login button clicked!");
        console.log("userName"+this.state.username);
        console.log("pass"+this.state.password);
        console.log(this.state.formData);

        let formData = this.state.formData
        if(formData.username=== this.state.username && formData.password=== this.state.password){
            console.log('credential matched!');
            this.setState({
                open: true,
                message: 'User credentials matching success!',
                severity: 'success'
            })
        }else{
            console.log('credential didn\'t matched!');
            this.setState({
                open: true,
                message: 'User credentials not matching!',
                severity: 'error'
            })
        }


    }

    render(){
        const { classes }=this.props;
        return(
            <div className={classes.container}>
               <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                            <Typography variant = "h4">Login</Typography>
                    </div>
                    <div className={classes.form_container}>
                    <TextField id="outlined-basic"
                     label="User name"
                      variant="outlined" 
                      onChange={(e) => {
                        console.log(e.target.value)
                        let formData = this.state.formData
                        formData.username = e.target.value
                        this.setState({ formData })
                    }}
                      />

                    <TextField id="outlined-basic" type="password" 
                    label="password"
                    onChange={(e) => {
                        console.log(e.target.value)
                        console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                    }}
                     variant="outlined" />
                    </div>
                    <div className={classes.btn_container}>
                    <Link to="userRegistration">
                        <Button variant="contained"
                        onClick={() => {
                        this.checkValidity()
                        }}>Login</Button>
                    </Link>
                    </div>
               </div>
               <SnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </div>
        )
    }
}
export default withStyles(styleSheet)(Login)