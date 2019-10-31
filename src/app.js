import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable';

import globals from './utils/global.scss';

import ScrollToTop from './globalComponents/scrollToTop/scrollToTop'
import Topbar from './globalComponents/topbar/topbar'
import Footer from './globalComponents/footer/footer'
import Modal from './globalComponents/modal/modal'
import Loader from './components/pageLoader/pageLoader'

import AppStore from './stores/appStore'
import ServiceStore from './stores/servicesStore'

// Loadable components
const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: Loader
})

const Services = Loadable({
  loader: () => import('./pages/services/services'),
  loading: Loader
})

const Contact = Loadable({
  loader: () => import('./pages/contact/contact'),
  loading: Loader
})

const stores = {
  AppStore,
  ServiceStore
}

class App extends Component {
  render() {
    return (
      <main style={{
        backgroundColor: globals.dark
      }}>
        <Provider {...stores}>
          <Router>
            <ScrollToTop />
            <Modal />
            <Topbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </main>
    )
  }
}

export default App;
