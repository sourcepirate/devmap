import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {App, GridList} from './components';

const routes = (
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={GridList} />
      </Route>
  </Router>
)

export default routes;