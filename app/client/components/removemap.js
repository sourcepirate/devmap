import React, {Component} from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasUtils from '../maps';
import {browserHistory} from 'react-router';

class RemoveMap extends Component {
    constructor(props){
        super(props);
    }
    
    onCancel(e){
        e.preventDefault();
        browserHistory.goBack();
    }
    
    onOk(e){
        e.preventDefault();
         const {id} = this.props.params;
        this.props.removeMap(id);
    }
    
    render(){
        return (<Box align="center">
          <Box pad="large">
              <Box pad="large">
              <Header>
                 <Heading> Are you sure to delete this Map ? </Heading> 
              </Header>
              </Box>
              <Box pad="large" align="center">
                 <Box pad="medium"> <Button label='Delete It' primary={true} onClick={this.onOk.bind(this)} /> </Box>
                 <Box pad="medium"> <Button label="Retreat!" onClick={this.onCancel.bind(this)} /> </Box>
              </Box>
          </Box>
        </Box>)
    }
}




let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;
RemoveMap = connect(null, mapDispatchToProps)(RemoveMap);
export default RemoveMap;

