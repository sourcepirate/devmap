import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardActions, CardMenu, IconButton, CardText} from 'react-mdl';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasMaps from '../maps';

class EditMap extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
    
    const {data, offset, offsetWidth} = this.props;
    return (<Card shadow={0} style={{marginLeft: offset, display: "inline-block", width: offsetWidth}}>
               <CardTitle> {data.name} </CardTitle>
               {
                   data.children.map((child) => <EditMap data={child} key={child.id} offset={offset + 5} offsetWidth={offsetWidth - 9}/>)
               }
               <CardText>{data.description}</CardText>
               <CardMenu style={{color: 'black'}}>
                    <IconButton name="edit" />
                    <IconButton name="add" />
              </CardMenu>
           </Card>)
    }
}

EditMap.defaultProps = {
    offset: 0,
    offsetWidth: 900
}


class Edit extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {params} = this.props;
        const maps = this.props.maps.filter((x) => x.id == params.id);
        const data = canvasMaps.transform(maps[0].map);
        console.log(data);
        console.log("rendering");
        return (<div style={{margin: "auto", textAlign: "center", width: "50%", marginTop: 10}}><EditMap data={data} offset={0} /></div>)
    }
}

let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

Edit = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default Edit;