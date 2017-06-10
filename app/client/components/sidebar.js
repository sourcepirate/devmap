import React, {Component} from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';
import Box from 'grommet/components/Box';



class RoadMapSidebar extends Component{
    
    constructor(props){
        super(props);
    }
    
    
    render(){
        return (<Sidebar colorIndex='neutral-1'>
                  <Header pad='medium'
                    justify='between'>
                    <Title>
                       RoadMap
                    </Title>
                  </Header>
                  <Box flex='grow'
                    justify='start'>
                    <Menu primary={true}>
                      <Anchor href='#/'
                        className='active'>
                        RoadMaps
                      </Anchor>
                      <Anchor href='#/notes' >
                        Notes
                      </Anchor>
                      <Anchor href='#/tables'>
                        Open Tables
                      </Anchor>
                    </Menu>
                  </Box>
                  <Footer pad='medium'>
                  </Footer>
                </Sidebar>)
    }
}

export default RoadMapSidebar;