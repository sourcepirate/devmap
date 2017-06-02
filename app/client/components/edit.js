// import React, {Component, PropTypes} from 'react';
// import {Card, CardTitle, CardActions, CardMenu, IconButton, CardText} from 'react-mdl';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions';
// import * as canvasMaps from '../maps';
// import {hashHistory} from 'react-router';
// import ReactAutoLinker from 'react-autolinker';


// const themes = ["Indigo", "Teal", "Green", "Red", "Orange"];
// const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// class EditMap extends Component{
//     constructor(props){
//         super(props);
//     }
    
//     render(){
//     console.log(this.props);
//     const {data, offset, offsetWidth, id, onEdit, onAdd, onClose} = this.props;
//     const editUrl = onEdit(id);
//     const addUrl = onAdd(id);
//     const removeUrl = onClose(id);
//     const theme = getRandom(themes);
//     console.log(data.children);
//     return (<Card shadow={0} style={{marginLeft: offset, display: "inline-block", width: offsetWidth, border: "0.5px solid "+ theme}}>
//               <CardTitle style={{color: "white", textTransform: "uppercase", background: theme}}> {data.name} </CardTitle>
//               {
//                   data.children.map((child) => <EditMap data={child} 
//                                                          key={child.id}
//                                                          offset={offset + 5}
//                                                          offsetWidth={offsetWidth - 9}
//                                                          id={child.id}
//                                                          onAdd={onAdd}
//                                                          onEdit={onEdit}
//                                                          onClose={onClose}/>)
//               }
//               <CardText style={{color: "black"}}><ReactAutoLinker text={data.description} /></CardText>
//               <CardMenu style={{color: 'white'}}>
//                     <IconButton name="edit" onClick={() =>  hashHistory.push(editUrl)}/>
//                     <IconButton name="add"  onClick={() =>  hashHistory.push(addUrl)}/>
//                     <IconButton name="close" onClick={() => hashHistory.push(removeUrl)} />
//               </CardMenu>
//           </Card>)
//     }
// }

// EditMap.defaultProps = {
//     offset: 0,
//     offsetWidth: 500
// }








import React, {Component} from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Markdown from 'grommet/components/Markdown';
import Box from 'grommet/components/Box';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasMaps from '../maps';
import {hashHistory} from 'react-router';


class EditMap extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props);
        const {data, offset, offsetWidth, id, onEdit, onAdd, onClose} = this.props;
        const editUrl = onEdit(id);
        const addUrl = onAdd(id);
        const removeUrl = onClose(id);
        console.log(data.children);
        return (
         <Box full={true}>
         <Accordion>
           <AccordionPanel heading={data.name}>
              <Markdown content={data.description} />
             {
                  data.children.map((child) => <EditMap data={child} 
                                                         key={child.id}
                                                         offset={offset + 5}
                                                         offsetWidth={offsetWidth - 9}
                                                         id={child.id}
                                                         onAdd={onAdd}
                                                         onEdit={onEdit}
                                                         onClose={onClose}/>)
              }
              <Box direction="row" align="right">
              <Button label= "Edit" onClick={() => hashHistory.push(editUrl)} />
              <Button label= "Delete" onClick={() => hashHistory.push(removeUrl)} />
              <Button label= "Add" onClick={() => hashHistory.push(addUrl)} />
              </Box>
           </AccordionPanel>
        </Accordion>
        </Box>)
    }
}




class Edit extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {params} = this.props;
        const maps = this.props.maps.filter((x) => x.id == params.id);
        const to_transform = maps[0].map;
        const data = canvasMaps.transform(JSON.parse(to_transform));
        return (<Box align="center" full={true}>
                   <EditMap data={data} 
                            offset={0}
                            id={data.id}
                            onEdit={this.onEdit.bind(this)}
                            onAdd={this.onAdd.bind(this)}
                            onClose={this.onRemove.bind(this)} />
                </Box>)
    }

    getUrlFor(id, verb){
        return `/${this.props.params.id}/${verb}/${id}`
    }

    onEdit(id){
        return this.getUrlFor(id, 'edit');
    }

    onRemove(id){
        return this.getUrlFor(id, 'remove');
    }

    onAdd(id){
        return this.getUrlFor(id, 'add');
    }
}

let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

Edit = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default Edit;