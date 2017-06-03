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
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class RoadMapNav extends Component {
		render() {
				return (
						<Box full={true}  pad="medium">
								<Header fixed={true} float={false} splash={false} size='small'>
										<Title>
											 Roadmaps
										</Title>
										<Box flex={true} justify='end' direction='row' responsive={false}>
												<Search
														inline={true}
														fill={true}
														size='medium'
														placeHolder='Search'
														dropAlign={{
														"right": "right"
												}}/>
												<Menu
														icon={< Actions />}
														dropAlign={{
														"right": "right",
														"top": "top"
												}}>
														<Anchor href='#/add/new' className='active'>
															 New Map
														</Anchor>
														<Anchor href='#/feeds' className='active'>
														     Feeds
														</Anchor>
												</Menu>
										</Box>
								</Header>
								<Section>
									{this.props.children}
								</Section>
						</Box>
				);
		}
}

export default RoadMapNav;