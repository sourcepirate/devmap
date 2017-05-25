import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasMaps from '../maps';

class Map extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
       const canvas =  this.refs.can;
       const {params} = this.props;
       const maps = this.props.maps.filter((x) => x.id == params.id);
       console.log(maps[0].map);
       const to_transform = maps[0].map;
       const treedata = canvasMaps.transform(JSON.parse(to_transform));
       canvasMaps.draw(canvas, treedata);
    }

    render(){
        return (<canvas ref="can" style={{ display: "block", margin: "auto" }}></canvas>);
    }
}


let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;