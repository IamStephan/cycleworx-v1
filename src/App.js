import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import globals from './utils/global.scss';

import Topbar from './globalComponents/topbar/topbar'
import Footer from './globalComponents/footer/footer'

import Home from './pages/home/home';

import AppStore from './stores/appStore'

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
