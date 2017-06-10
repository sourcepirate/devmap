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

class NoteBookList extends Component {

    componentWillMount(){
       this.props.fetchNotes();
    }
    
    render(){
        const {books} = this.props;
        return (<List selectable={true}>
          {
            books.map((book) => (<ListItem key={book.id} justify='between'
            separator='horizontal'>
            <Box onClick={this.onClick.bind(this, book.id)}>
              <span>{book.name}</span>
            </Box>
            <span className='secondary'>
              <Anchor path={"notes/delete/"+ book.id} icon={<Close />}></Anchor>
            </span>
          </ListItem>))
          }
        </List>);
    }

    onClick(id, e){
      console.log(id);
      hashHistory.push(`notes/view/${id}`)
    }
}


let mapStateToProps = (state) => ({
  books: state.notebook
});

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch)

NoteBookList = connect(mapStateToProps, mapDispatchToProps)(NoteBookList);

export default NoteBookList;