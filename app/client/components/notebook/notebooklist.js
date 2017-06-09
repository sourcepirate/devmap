import React, {Component} from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import DateTime from 'grommet/components/DateTime';
import SearchInput from 'grommet/components/SearchInput';
import Toast from 'grommet/components/Toast';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from'grommet/components/Anchor';
import Close from 'grommet/components/icons/base/Close';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

class NoteBookList extends Component {
    render(){
        return (<List>
            <ListItem justify='between'
    separator='horizontal'>
    <span>
      Alan
    </span>
    <span className='secondary'>
      <Anchor icon={<Close />}></Anchor>
    </span>
  </ListItem>
        </List>);
    }
}

export default NoteBookList;