import React, {Component} from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Markdown from 'grommet/components/Markdown';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import EditIcon from 'grommet/components/icons/base/Edit';
import AddIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class Feeds extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        const {id} = this.props.params;
        this.props.fetchFeeds(id);
    }

    render(){
        const {feeds} = this.props;
        return (<List>
                  {
                      feeds.map((feed) => (<ListItem key={feed.id} justify='between'
                                                separator='horizontal'>
                                                <span>
                                                {feed.title}
                                                </span>
                                                <span className='secondary'>
                                                 <a href={feed.url} target="_blank">Click Here!</a>
                                                </span>
                                            </ListItem>))
                  }
                  </List>);
    }
}


let mapStateToProps = (state) => ({
   feeds: state.feeds
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch) ;

Feeds = connect(mapStateToProps, mapDispatchToProps)(Feeds);

export default Feeds;