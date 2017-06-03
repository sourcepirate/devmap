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



class AddNewMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            start_description: '',
            start_node: ''
        };
    }
    
    render(){
         const {name, start_node, start_description} = this.state;
         
         return (
         <Box align="center">
         <Form onSubmit={this.onSubmit.bind(this)}>
         <Header>
         <Heading>New Roadmap</Heading>
         </Header>
         <FormFields>
         <FormField label="Name of the Roadmap">
           <TextInput onDOMChange={(e) => this.setState({name: e.target.value})} placeHolder="Enter the name of roadmap"/>
         </FormField>
         <FormField label="Name of the start Node">
           <TextInput onDOMChange={(e) => this.setState({start_node: e.target.value})} placeHolder="Enter the name of the start node" />
         </FormField>
         <FormField label="Roadmap Description">
           <textarea onChange={(e) => this.setState({start_description: e.target.value})} placeholder="Roadmap Description" rows={6}/>
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
        this.props.createNewMap(this.state);
    }
}

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;
AddNewMap = connect(null, mapDispatchToProps)(AddNewMap);
export default AddNewMap;