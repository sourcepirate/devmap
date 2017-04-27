import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as canvasMaps from '../maps';


const EditMap = (props) => {
    const {data, offset} = props;
    return (<div style={{marginLeft: offset}}>
               <span> {data.name} </span>
               {
                   data.children.map((child) => <EditMap data={child} offset={offset + 5} />)
               }
           </div>)
}

EditMap.defaultProps = {
    offset: 0
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
        return (<EditMap data={data} offset={0} />)
    }
}

let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

Edit = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default Edit;