import { Component } from "react";
import PropTypes from 'prop-types'; //To take type of properties
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';

class SnackBar extends Component{
    static propTypes={
        open: PropTypes.bool,
        className: PropTypes.string,
        message: PropTypes.string,
        anchorOrigin: PropTypes.object,
        children: PropTypes.node,
        severity: PropTypes.string,
        autoHideDuration: PropTypes.number
    }

    static defaultProps = {
        open: false,
        className: "",
        message: "",
        name: "snackbar",
        severity: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
        },
        variant: "filled"
    }

    handleButtonClose = (event) => {
        const { onClose } = this.props
        onClose &&
            onClose({
                event,
            })
    }

    renderChildren = (message, children) => {
        if (message) return message;
        if (children) return children;
    }

    render() {
        const {
            open,
            className,
            severity,
            autoHideDuration,
            anchorOrigin,
            children,
            message,
            variant
        } = this.props;

        return (
            <Snackbar
                name="snackbar"
                open={open}
                className={className}
                anchorOrigin={anchorOrigin}
                autoHideDuration={autoHideDuration}
                onClose={this.handleButtonClose}
            >
                <Alert variant={variant} severity={severity} onClose={this.handleButtonClose}>
                    {this.renderChildren(message, children)}
                </Alert>
            </Snackbar>
        )
    }
}
export default SnackBar;