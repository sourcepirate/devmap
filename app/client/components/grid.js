import React, {Component, PropTypes} from 'react';
import {Grid, Card, Cell, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import MapDetail from './mapdetail';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';


class GridList extends Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        this.props.update();
    }

    render(){
        const {maps} = this.props;
        console.log(maps);
        return (<Grid>
            <Cell col={12} align="middle">
                {maps.map((x, i) => <MapDetail {...x} key={i}/>)}
            </Cell>
            </Grid>);
    }
}

let mapStateToProps = (state) => ({
   maps: state.maps
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

GridList = connect(mapStateToProps, mapDispatchToProps)(GridList);

export default GridList;