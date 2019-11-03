import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './home.module.scss'

import Input from '../../components/input/input';
import Button from '../../components/button/button'

import homeImg from '../../static/Cycleworx-Langebaan9.jpg'

@inject('AppStore', 'ServiceStore')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props)

    this.openPage = this.openPage.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    const { AppStore, ServiceStore } = this.props

    return (
      <div className={`${styles['home']}`}>
        <div className={`${styles['hero']}`}>
          <div className={`${styles['top']}`}>
            <h1>
              Welcome to Cycleworx Langebaan
            </h1>
            <h3>Bicycle Workshop and Retailer</h3>

            <div className={`${styles['tracking']}`}>
              <Input style={{margin: globals.margin}} placeholder='Bicycle Tracking ID' />
              <Button>Track</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
