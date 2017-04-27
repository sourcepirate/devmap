import React, {Component, PropTypes} from 'react';
import {Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router';

class MapDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name, description, id} = this.props;
        const viewName = "/view/"+id;
        const editName = "/edit/"+id;
        return (<Card  shadow={1} style={{margin: '5px auto'}}>
          <CardTitle expand style={{color: 'blue', align: 'center'}}>{name}</CardTitle>
          <CardText>
              {description}
         </CardText>
          <CardActions border>
            <Button primary><Link to={viewName}>View Map</Link></Button>
            <Button primary><Link to={editName}>Edit Map</Link></Button>
          </CardActions>
        </Card>);
    }
}

export default MapDetail;