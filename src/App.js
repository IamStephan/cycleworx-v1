import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable';

import globals from './utils/global.scss';

import Topbar from './globalComponents/topbar/topbar'
import Footer from './globalComponents/footer/footer'

import AppStore from './stores/appStore'

// Loadable components
const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: () => (<div>Loading...</div>)
})

const Contact = Loadable({
  loader: () => import('./pages/contact/contact'),
  loading: () => (<div>Loading...</div>)
})

const stores = {
  AppStore
}

class App extends Component {
  render() {
    return (
      <main style={{
        backgroundColor: globals.dark
      }}>
        <Provider {...stores}>
          <Router>
            <Topbar />
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </main>
    )
  }
}

export default App;
