import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import {App, GridList, Map, Edit, EditNode, AddNode, RemoveNode} from './components';

const routes = (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
         <IndexRoute component = {GridList} />
         <Route path = "/view/:id" component = {Map} />
         <Route path = "/edit/:id" component = {Edit} />
         <Route path = "/:id/edit/:node" component = {EditNode} />
         <Route path = "/:id/add/:node" component={AddNode} />
         <Route path = "/:id/remove/:node" component={RemoveNode} />
      </Route>
  </Router>
)

export default routes;