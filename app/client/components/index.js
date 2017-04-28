import React, {Component} from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import GridList from './grid';
import Map from './map';
import Edit from './edit';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div style={{width: 100}}>
            <Layout fixedHeader>
                <Header title="DEVMAP"/>
                {this.props.children}
            </Layout>
        </div>);
    }
}

export {App};
export {GridList};
export {Map};
export {Edit};