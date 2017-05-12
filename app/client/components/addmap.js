import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Textfield, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';


class AddNewMap extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            start_description: '',
            start_node: ''
        }
    }

    render(){
        const {name, start_node, start_description} = this.state;
        
        return (<Card shadow={0} style={{margin: "auto", marginTop: 50}}>
                <CardTitle> Add New Node </CardTitle>
                <CardText>
                <Textfield label="Name"
                           value={name}
                           style={{marginLeft: 5}}
                           required
                           onChange={(e) => this.setState({name: e.target.value})}/>
                <Textfield label="Description"
                           value={start_description}
                           rows={3}
                           style={{marginLeft: 5}}
                           required
                           onChange={(e) => this.setState({start_description: e.target.value})}/>
                <Textfield label="Node Value"
                           value = {start_node}
                           style={{marginLeft: 5}}
                           required
                           onChange={(e) => this.setState({start_node: e.target.value})} />
                </CardText>
                <CardActions>
                <Button primary onClick={this.onOk.bind(this)}> New Map </Button>
                </CardActions>
               </Card>)
    }
    
    onOk(){
        this.props.createNewMap(this.state);
    }

}

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;
AddNewMap = connect(null, mapDispatchToProps)(AddNewMap);
export default AddNewMap;