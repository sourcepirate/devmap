import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import EditIcon from 'grommet/components/icons/base/Edit';
import ViewIcon from 'grommet/components/icons/base/View';
import CloseIcon from 'grommet/components/icons/base/Close';
import AppIcon from 'grommet/components/icons/base/Apps';
import Anchor from 'grommet/components/Anchor';

class MapDetail extends Component {

  render () {
    let { name, description, id} = this.props;
    let editControl = (
        <Anchor icon={<EditIcon />}
          path={`${id}/viewnode/${id}`}
          a11yTitle={`Edit ${name} Map`} />
      );
    
    let viewControl = (
        <Anchor icon={<ViewIcon />}
          path={`/view/${id}`}
          a11yTitle={`View ${name} Map`} />
      );
    
    let deleteControl =  (
        <Anchor icon={<CloseIcon />}
          path={`/deletemap/${id}`}
          a11yTitle={`Delete ${name} Map`} />
      );
    
    let feedControl = (
      <Anchor icon={<AppIcon />}
          path={`/feeds/${id}`}
          a11yTitle={`Feeds ${name} Map`} />
    )
    
    return (
      <Box separator="all"
        align="center"
        direction="column"
        pad="medium"
        onClick={this.props.onClick} selected={this.props.selected}>
        <Box>
          <Heading tag="h3" align="center" strong={true}>
            {name}
          </Heading>
        </Box>
        <Box direction="row">
        {editControl}
        {viewControl}
        {deleteControl}
        {feedControl}
        </Box>
      </Box>
    );
  }
}


export default MapDetail;