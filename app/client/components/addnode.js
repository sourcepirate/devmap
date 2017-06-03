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

class AddNode extends Component {
    constructor(props){
       super(props);
       this.state = {
            name: '',
            description: ''
        };
    }
    
    render(){
        const {name, description} = this.state;
        
        return (<Box align="center">
        <Form onSubmit={this.onSubmit.bind(this)}>
           <Header><Heading>
           Add new node
           </Heading></Header>
           <FormFields>
            <FormField label="Name">
              <TextInput onDOMChange = {(e) => this.setState({name: e.target.value})} 
                         placeHolder = "Enter the node name" />
            </FormField>
            <FormField label="Description">
              <textarea onChange = {(e) => this.setState({description: e.target.value})}
                         placeholder = "Enter the node description" rows={6}/>
            </FormField>
           </FormFields>
           <Footer pad={{"vertical": "medium"}}>
            <Button label='Submit'
              type='submit'
              primary={true} />
          </Footer>
        </Form>
        </Box>)
    }
    
    
    onSubmit(e){
        e.preventDefault();
         const {id, node} = this.props.params;
        this.props.createTreeNode(id, node, this.state);
    }
}




let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

AddNode = connect(mapStateToProps, mapDispatchToProps)(AddNode);

export default AddNode;