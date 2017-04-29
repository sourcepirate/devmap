import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Textfield, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasUtils from '../maps';

class EditNode extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: ''
        };
    }

    componentWillMount(){
        const {id, node} = this.props.params;
        console.log("Current Node ID", node);
        const data = this.props.maps
                               .filter((x) => x.id == id);
        const transformed = data[0].map;
        const tfm = canvasUtils.transform(transformed);
        console.log(tfm);
        const {name, description} = canvasUtils.find(tfm, node);
        this.setState({
            name,
            description
        });
    }

    componentDidMount(){

    }

    render(){
        const {name, description} = this.state;
        return (<Card shadow={0} style={{margin: "auto", marginTop: 50}}>
                <CardTitle> Edit Node </CardTitle>
                <CardText>
                <Textfield label="Name"
                           value={name}
                           style={{marginLeft: 5}}
                           required
                           onChange={(e) => this.setState({name: e.target.value})}/>
                <Textfield label="Description"
                           value={description}
                           rows={3}
                           style={{marginLeft: 5}}
                           required
                           onChange={(e) => this.setState({description: e.target.value})}/>
                </CardText>
                <CardActions>
                <Button primary onClick={this.onOk.bind(this)}> Update </Button>
                </CardActions>
               </Card>)
    }

    onOk(){
        const {id, node} = this.props.params;
        this.props.editTreeNode(id, node, this.state);
    }
}


let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

EditNode = connect(mapStateToProps, mapDispatchToProps)(EditNode);

export default EditNode;