import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Textfield, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasUtils from '../maps';
import ModelDialog from './dialog';
import {browserHistory} from 'react-router';

class RemoveMap extends Component{
    constructor(props){
        super(props);
    }

    onCancel(){
        browserHistory.goBack();
    }

    onOk(){
        const {id} = this.props.params;
        this.props.removeMap(id);
    }

    render(){
      return (<ModelDialog open={true}
                           title="Confirmation ?"
                           okName="Delete It!"
                           cancelName="Retreat!"
                           onOk={this.onOk.bind(this)}
                           onCancel={this.onCancel.bind(this)}>
               <p> Are you sure with the action to delete the map ? </p>
              </ModelDialog>)
    }
}

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

RemoveMap = connect(null, mapDispatchToProps)(RemoveMap);

export default RemoveMap;