import React, {Component, PropTypes} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from 'react-mdl';

export default class ModelDialog extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {
            title,
            children,
            open,
            okName,
            cancelName,
            onOk,
            onCancel,
            data
        } = this.props;

        return (<div>
            <Dialog open={open}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button type='button' onClick={onOk}>{okName}</Button>
                    <Button type='button' onClick={onCancel}>{cancelName}</Button>
                </DialogActions>
            </Dialog>
        </div>)
    }
}


ModelDialog.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    okName: PropTypes.string.isRequired,
    cancelName: PropTypes.string.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

ModelDialog.defaultProps = {
    open: false,
    data: {}
}