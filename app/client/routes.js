import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {App, GridList, Map} from './components';

const routes = (
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component = {GridList} />
         <Route path = "/view/:id" component = {Map} />
      </Route>
  </Router>
)

export default routes;