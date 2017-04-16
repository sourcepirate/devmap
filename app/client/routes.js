import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {App} from './components';

const routes = (
  <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
  </Router>
)

export default routes;