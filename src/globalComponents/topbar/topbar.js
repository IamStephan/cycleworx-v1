import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './topbar.module.scss';

import MobileRightBar from '../../components/mobileRightBar/mobileRightBar';

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
          <Button
            state={this.props.location.pathname === '/' ? 'toggled' : 'active'}
            variant='ghost'
            onClick={() => this.openPage('/')}
          >
            <Icon name='cycling' color={globals.light} style={{marginRight: globals.margin}} />
            Cycleworx
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
                  Workshop
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
                  state={this.props.location.pathname === '/about' ? 'toggled' : 'active'}
                  type='light'
                  onClick={() => this.openPage('/about')}
                >
                  About Us
                </Button>

                <Button
                  variant='ghost'
                  state={this.props.location.pathname === '/contact' ? 'toggled' : 'active'}
                  type='light'
                  onClick={() => this.openPage('/contact')}
                >
                  Contact Us
                </Button>
              </Button.Group>
            )
          }
          
        </div>

        {
          AppStore.sidebar.isOpen && ( <MobileRightBar /> )
        }
      </nav>
    );
  }
}
