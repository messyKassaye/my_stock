import React, {Component,useEffect} from 'react';
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from '@material-ui/icons/Close'
import IconButton from "@material-ui/core/IconButton";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import adminMainDialogStyle from "./styles/mainDialogStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import {DialogActions, Typography} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import LoadingButton from "./LoadingButton";
import {openDialog} from '../state/AppAction'
import {useSelector,useDispatch} from 'react-redux'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MainDialog  =(props)=>{
    const classes = adminMainDialogStyle()
    const [fullScreen,setFullScreen] = React.useState(false)
    const [open,setOpen] = React.useState(false)
    const showData = useSelector(state=>state.authReducer.dialogReducer.showData)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(showData.show===true){
            setOpen(true)
        }
    })
    const handleClose = ()=>{
        const showData = {
            show:false,
            fullScreen:false,
            title:'Open'
        }
        dispatch(openDialog(showData))
    }

    const renderComponent = (page)=>{
        return page
    }
    return (
        <Dialog
            maxWidth={showData.maxWidth}
            style={{top:5}}
            fullScreen={fullScreen||showData.fullScreen}
            disableBackdropClick={true}
            open={showData.show}
            scroll='paper'
            keepMounted
            fullWidth={true}
            TransitionComponent={Transition}
            onClose={handleClose}>

            <DialogTitle  id="customized-dialog-title" onClose={()=>handleClose()}>
                <Typography style={{fontSize:'16px'}}>{showData.title}</Typography>
                <IconButton
                    className={classes.closeButton}
                    color='inherit'
                    aria-label='close dialog'
                    onClick={()=>handleClose()}
                    edge='end'>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers style={{padding:10}}>
                {renderComponent(showData.page)}
            </DialogContent>
        </Dialog>
    );
}

export default MainDialog