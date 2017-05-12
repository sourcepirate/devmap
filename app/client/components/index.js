import React, {Component} from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router';
import GridList from './grid';
import Map from './map';
import Edit from './edit';
import DevTools from '../devtool';
import EditNode from './editnode';
import AddNode from './addnode';
import RemoveNode from './removenode';
import AddNewMap from './addmap';
import RemoveMap from './removemap';
require('js-snackbar/dist/snackbar.css');


const isProduction = process.env.NODE_ENV === 'production';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div style={{width: 100}}>
            <Layout fixedHeader>
                <Header title="DEVMAP">
                   <Navigation>
                       <Link to="/add/new">Add New</Link>
                   </Navigation>    
                </Header>
                {this.props.children}
            </Layout>
        </div>);
    }
}

export {App};
export {GridList};
export {Map};
export {Edit};
export {EditNode};
export {AddNode};
export {RemoveNode};
export {AddNewMap};
export {RemoveMap};