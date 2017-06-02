import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import {App, GridList, Map, Edit, EditNode, AddNode, RemoveNode, AddNewMap, RemoveMap, RoadMapNav, ViewNode} from './components';

const routes = (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
         <Route component={RoadMapNav}>
             <IndexRoute component = {GridList} />
             <Route path="/add/new" component={AddNewMap} />
             <Route path = "/view/:id" component = {Map} />
             <Route path = "/edit/:id" component = {Edit} />
             <Route path = "/:id/edit/:node" component = {EditNode} />
             <Route path = "/:id/add/:node" component={AddNode} />
             <Route path = "/:id/remove/:node" component={RemoveNode} />
             <Route path = "/deletemap/:id" component={RemoveMap} />
             <Route path = "/:id/viewnode/:node" component={ViewNode} />
         </Route>
      </Route>
  </Router>
)

export default routes;