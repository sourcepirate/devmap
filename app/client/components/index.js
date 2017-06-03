import React, {Component} from 'react';
import {Link} from 'react-router';
import GApp from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import GForm from 'grommet/components/Form';
import Article from 'grommet/components/Article';
import Feeds from './feeds';
import RoadMapSidebar from './sidebar';
import GridList from './grid';
import Map from './map';
import DevTools from '../devtool';
import EditNode from './editnode';
import AddNode from './addnode';
import RemoveNode from './removenode';
import AddNewMap from './addmap';
import RemoveMap from './removemap';
import RoadMapNav from './roadmapnav';
import ViewNode from './viewnode';
import 'js-snackbar/dist/snackbar.css'
import 'grommet/grommet.min.css';


const isProduction = process.env.NODE_ENV === 'production';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<GApp centered={false}>
                <Article>
                    <Split flex="right">
                      <Box
                        colorIndex='neutral-1'
                        justify='center'
                        align='center'
                        pad='small'
                        full="vertical">
                        <RoadMapSidebar />
                      </Box>
                      <Box align='center' full="vertical" fill={true}>            
                        {this.props.children}
                      </Box>
                    </Split>
                  </Article>
              </GApp>);
    }
}

export {App};
export {GridList};
export {Feeds};
export {Map};
export {EditNode};
export {AddNode};
export {RemoveNode};
export {AddNewMap};
export {RemoveMap};
export {RoadMapNav};
export {ViewNode};