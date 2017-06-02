import React, {Component} from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Markdown from 'grommet/components/Markdown';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import EditIcon from 'grommet/components/icons/base/Edit';
import AddIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasUtils from '../maps';
import {hashHistory} from 'react-router';

class ViewNode extends Component{
     
     constructor(props){
         super(props);
         this.state = {
             name: '',
             description: '',
             children: [],
             id: '',
             mapid: ''
         }
     }
     
     componentWillMount(){
        let nodedata = this.props.params;
        const mapid = nodedata.id;
        const node = nodedata.node;
        console.log("Current Node ID", node);
        const data = this.props.maps
                              .filter((x) => x.id == mapid);
        const transformed = data[0].map;
        const tfm = canvasUtils.transform(JSON.parse(transformed));
        console.log(tfm);
        let {name, description, children, id} = canvasUtils.find(tfm, node);
        this.setState({
            name,
            description,
            children,
            id,
            mapid
        });
    }
    
    componentWillReceiveProps(nextProps){
        let nodedata = this.props.params;
        const mapid = nodedata.id;
        const node = nodedata.node;
        console.log("Current Node ID", node);
        const data = this.props.maps
                              .filter((x) => x.id == mapid);
        const transformed = data[0].map;
        const tfm = canvasUtils.transform(JSON.parse(transformed));
        console.log(tfm);
        let {name, description, children, id} = canvasUtils.find(tfm, node);
        this.setState({
            name,
            description,
            children,
            id,
            mapid
        });
    }
    
    render(){
        
        const {name , description, children, id, mapid} = this.state;
        
        return (<Box align="center">
          <Box pad="medium">
           <Heading><Header> {name} </Header></Heading>
          </Box>
          <Box>
          <Markdown content={description} />
          <Box pad="medium" direction="column">
          <Header> childs </Header>
          {
             children.map((value) => <Anchor key={value.id} label={value.name} path={mapid+"/viewnode/"+value.id} />)
          }
          </Box>
          </Box>
          <Box direction="row">
              <Box pad="small"> <Anchor label="Edit" icon={<EditIcon />} path={mapid+"/edit/"+ id} /> </Box>
              <Box pad="small"> <Anchor label="Close" icon={<CloseIcon />} path={mapid+"/remove/"+id} /> </Box>
             <Box pad="small"> <Anchor label="Add" icon={<AddIcon />} path={mapid+"/add/"+id} /></Box>
          </Box>
        </Box>)
    }
}



let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

ViewNode = connect(mapStateToProps, mapDispatchToProps)(ViewNode);

export default ViewNode;