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
       const treedata = canvasMaps.transform(maps[0].map);
       canvasMaps.draw(canvas, treedata);
    }

    render(){
        return (<canvas ref="can"></canvas>);
    }
}


let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;