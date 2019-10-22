import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './topbar.module.scss';

import Button from '../../components/button/button';
import Icon from '../../components/icon/icon'

@withRouter
@inject('AppStore')
@observer
export default class Topbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileBar: false
    }

    this.openPage = this.openPage.bind(this)
    this.checkForMobileBar = this.checkForMobileBar.bind(this)

    window.addEventListener('resize', this.checkForMobileBar)
  }

  componentDidMount() {
    this.checkForMobileBar()
  }

  checkForMobileBar() {
    if(window.innerWidth <= styles.topbarBreakPoint) {
      this.setState({
        ...this.state,
        mobileBar: true
      })
    } else {
      this.setState({
        ...this.state,
        mobileBar: false
      })
    }
  }

  openPage(page) {
    this.props.history.push(page)
  }

  render() {
    const { AppStore } = this.props

    return (
      <nav className={`${styles['topbar']}`}>
        <div className={`${styles['left']}`}>
          <Button onClick={() => this.openPage('/')}>
            <Icon name='cycling' color={globals.light} style={{marginRight: globals.margin}} />
            Home
          </Button>
        </div>

        <div className={`${styles['right']}`}>
          {
            this.state.mobileBar ? (
              <Button onClick={() => AppStore.openSidebar()} variant='outline' type='light'>
                <Icon name='menu' color={globals.light} />
              </Button>
            ) : (
              <Button.Group>
                <Button
                  variant='ghost'
                  state={this.props.location.pathname === '/services' ? 'toggled' : 'active'}
                  type='light'
                  onClick={() => this.openPage('/services')}
                >
                  Services
                </Button>

                <Button
                  variant='ghost'
                  state={this.props.location.pathname === '/rentals' ? 'toggled' : 'active'}
                  type='light'
                  onClick={() => this.openPage('/rentals')}
                >
                  Rentals
                </Button>

                <Button
                  variant='ghost'
                  state={this.props.location.pathname === '/bikes' ? 'toggled' : 'active'}
                  type='light'
                  onClick={() => this.openPage('/bikes')}
                >
                  Bikes
                </Button>

                <Button
                  variant='ghost'
                  state={this.props.location.pathname === '/routes' ? 'toggled' : 'active'}
                  type='light'
                  onClick={() => this.openPage('/routes')}
                >
                  Routes
                </Button>
              </Button.Group>
            )
          }
          
        </div>

        {
          AppStore.sidebar.isOpen ? (
            <div className={`${styles['sidebar']}`}>
              <div className={`${styles['dimmer']}`}
                onClick={() => AppStore.closeSidebar()}
              />
              
              <div className={`${styles['menu']}`}>
                <div className={`${styles['title']}`}>
                  <h2>
                    Cycleworx
                  </h2>
                  <Button onClick={() => AppStore.closeSidebar()} variant='ghost' type='light'>
                    <Icon name='x-circle' color={globals.light} />
                  </Button>
                </div>

                <div>
                  <Button 
                    onClick={() => {
                      this.openPage('/')
                      AppStore.closeSidebar()
                    }}
                    width='full'
                  >
                    <Icon name='cycling' color={globals.light} style={{marginRight: globals.margin}} />
                    Home
                  </Button>
                </div>
                
                <Button.Group flow='vertical' width='full'>
                  <Button
                    onClick={() => {
                      this.openPage('/services')
                      AppStore.closeSidebar()
                    }}
                    state={this.props.location.pathname === '/services' ? 'toggled' : 'active'}
                    variant='ghost'
                  >
                    Services
                  </Button>

                  <Button
                    onClick={() => {
                      this.openPage('/rentals')
                      AppStore.closeSidebar()
                    }}
                    state={this.props.location.pathname === '/rentals' ? 'toggled' : 'active'}
                    variant='ghost'
                  >
                    Rentals
                  </Button>

                  <Button
                    onClick={() => {
                      this.openPage('/bikes')
                      AppStore.closeSidebar()
                    }}
                    state={this.props.location.pathname === '/bikes' ? 'toggled' : 'active'}
                    variant='ghost'
                  >
                    Bikes
                  </Button>

                  <Button
                    onClick={() => {
                      this.openPage('/routes')
                      AppStore.closeSidebar()
                    }}
                    state={this.props.location.pathname === '/routes' ? 'toggled' : 'active'}
                    variant='ghost'
                  >
                    Routes
                  </Button>
                </Button.Group>

              </div>
            </div>
          ) : null
        }
      </nav>
    );
  }
}
