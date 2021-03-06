import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemsList from './components/ItemsList';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stock from './components/admin/Stock';
import Checkout from './components/Checkout';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppNavbar />
          <Switch>
            <Route path='/' exact component={ItemsList} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/stock' exact component={Stock} />
            <Route path='/checkout' exact component={Checkout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
