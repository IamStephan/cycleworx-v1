import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './mobileRightBra.module.scss';

import Button from '../../components/button/button';
import Icon from '../../components/icon/icon'

@withRouter
@inject('AppStore')
@observer
export default class MobileRightBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.openPage = this.openPage.bind(this)
    this.closeSidebar = this.closeSidebar.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({open: true})
    }, 0)
  }

  openPage(page) {
    this.props.history.push(page)
    this.closeSidebar()
  }

  closeSidebar() {
    this.setState({open: false})
    setTimeout(() => {
      this.props.AppStore.closeSidebar()
    }, 250);
  }

  render() {
    return (
      <div className={`${styles['mobile-right-bar']}`}>
        <div className={`${styles['dimmer']} ${this.state.open ? styles['active'] : ''}`}
          onClick={() => this.closeSidebar()}
        />
  
        <div className={`${styles['menu']} ${this.state.open ? styles['active'] : ''}`}>
          <div className={`${styles['top']}`}>
            <div className={`${styles['title']}`}>
              <h2>
                Cycleworx
              </h2>
              <Button onClick={() => this.closeSidebar()} variant='ghost' type='light'>
                <Icon name='x-circle' color={globals.light} />
              </Button>
            </div>

            <div>
              <Button 
                onClick={() => {
                  this.openPage('/')
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
                }}
                state={this.props.location.pathname === '/services' ? 'toggled' : 'active'}
                variant='ghost'
              >
                Workshop
              </Button>

              <Button
                onClick={() => {
                  this.openPage('/rentals')
                }}
                state={this.props.location.pathname === '/rentals' ? 'toggled' : 'active'}
                variant='ghost'
              >
                Rentals
              </Button>

              <Button
                onClick={() => {
                  this.openPage('/bikes')
                }}
                state={this.props.location.pathname === '/bikes' ? 'toggled' : 'active'}
                variant='ghost'
              >
                Bikes
              </Button>

              <Button
                onClick={() => {
                  this.openPage('/contact')
                }}
                state={this.props.location.pathname === '/contact' ? 'toggled' : 'active'}
                variant='ghost'
              >
                Contact Us
              </Button>
            </Button.Group>
          </div>
          
          <div className={`${styles['bottom']}`}>
            <Icon name='code-alt' color={globals.light} />
            <Button variant='ghost' type='light'>Developer</Button>
          </div>
        </div>
      </div>
    );
  }
}
