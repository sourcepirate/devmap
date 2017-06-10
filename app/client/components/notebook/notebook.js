import React, {Component} from 'react';
import Anchor from'grommet/components/Anchor';
import Box from'grommet/components/Box';
import Close from 'grommet/components/icons/base/Close';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import {hashHistory} from 'react-router';
import Jupyter from 'react-jupyter';

class NotebookReader extends Component {

    componentWillMount(){
        const {id} = this.props.params;
        this.props.getNote(id);
    }

    safeParse(data){
        try{
            return JSON.parse(data);
        }
        catch(e){
            return {}
        }
    }

    render(){
        const {name, content} = this.props.showing;
        return (<Box pad="large">
                <Jupyter
                notebook={this.safeParse(content)}
                showCode={true}
                loadMathjax={true} />
            </Box>);
    }
}

let mapStateToProps = (state) => ({
  books: state.notebook,
  showing: state.showing
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch)

NotebookReader = connect(mapStateToProps, mapDispatchToProps)(NotebookReader);

export default NotebookReader;