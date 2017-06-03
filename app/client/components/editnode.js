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

class EditNode extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: ""
        }
    }
    
    componentWillMount(){
        const {id, node} = this.props.params;
        console.log("Current Node ID", node);
        const data = this.props.maps
                              .filter((x) => x.id == id);
        const transformed = data[0].map;
        const tfm = canvasUtils.transform(JSON.parse(transformed));
        console.log(tfm);
        const {name, description} = canvasUtils.find(tfm, node);
        this.setState({
            name,
            description
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        const {id, node} = this.props.params;
        this.props.editTreeNode(id, node, this.state);
    }
    
    render(){
        const {name, description} = this.state;
        
        return (<Box align="center">
        <Form onSubmit={this.onSubmit.bind(this)}>
           <Header>
             <Heading>
                Edit map node
             </Heading>
           </Header>
           <FormFields>
              <FormField label="Name">
              <TextInput onDOMChange = {(e) => this.setState({name: e.target.value})}
                         value={name}
                         placeHolder = "Enter the node name" />
            </FormField>
            <FormField label="Description">
              <textarea onChange = {(e) => this.setState({description: e.target.value})}
                         value={description}
                         placeholder = "Enter the node description" />
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
}



let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

EditNode = connect(mapStateToProps, mapDispatchToProps)(EditNode);

export default EditNode;