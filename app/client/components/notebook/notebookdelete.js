import React, {Component} from 'react';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import {hashHistory} from 'react-router';

class NoteBookDelete extends Component {
    constructor(props){
        super(props);
    }
    
    onCancel(e){
        e.preventDefault();
        hashHistory.goBack();
    }
    
    onOk(e){
        e.preventDefault();
        const {id} = this.props.params;
        console.log("deleting ", id);
        this.props.deleteNote(id);
        hashHistory.goBack();
    }
    
    render(){
        return (<Box align="center">
          <Box pad="large">
              <Box pad="large">
              <Header>
                 <Heading> Are you sure to delete this notes ? </Heading> 
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

NoteBookDelete = connect(null, mapDispatchToProps)(NoteBookDelete);

export default NoteBookDelete;