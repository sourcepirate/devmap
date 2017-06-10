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
import Actions from 'grommet/components/icons/base/Actions';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import {reader} from '../../utils/';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import {hashHistory} from 'react-router';

class NotebookNavBar extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (	<Box full={true}  pad="medium">
								<Header fixed={true} float={false} splash={false} size='small'>
										<Title>
											 Notebooks
										</Title>
										<Box flex={true} justify='end' direction='row' responsive={false}>
										    <input type="file" ref="fupload" onChange={this.onFileChange.bind(this)} accept=".ipynb" hidden></input>
											<Button label="Upload" onClick={this.onUpload.bind(this)}></Button>
										</Box>
								</Header>
								<Section>
									{this.props.children}
								</Section>
						</Box>)
    }
    
    
    onUpload(){
        console.log("uploading");
        this.refs.fupload.click();
    }
    
    onFileChange(){
        const files = this.refs.fupload.files;
        const self = this;
        reader(files[0]).then(function(txt){
            const content = JSON.parse(txt);
            const filename = files[0].name;
            console.log("createing notebook", filename);
            self.props.createNotes(filename, content);
        }).catch(function(e){
            console.error(e);
        })
    }
}

let mapDistpatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
NotebookNavBar = connect(null, mapDistpatchToProps)(NotebookNavBar);
export default NotebookNavBar;