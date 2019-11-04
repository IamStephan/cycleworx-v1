import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './home.module.scss'

import Input from '../../components/input/input';
import Button from '../../components/button/button'

import BeforeAfter from '../../components/beforeAfter/beforeAfter'
import Carousal from '../../components/carousal/carousal'

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
    return (
      <div className={`${styles['home']}`}>
        <section className={`${styles['hero']}`}>
          {
            /**
             * <img alt='Welcome to cycleworx langebaan' src={require('../../static/Cycleworx-Langebaan9.jpg')} className={`${styles['hero-img']}`} />
             */
          }
          
          <div className={`${styles['top']}`}>
            <h1>
              Welcome to Cycleworx Langebaan
            </h1>
            <h3>Bicycle Workshop and Retailer</h3>
            <div className={`${styles['tracking']}`}>
              <Input style={{margin: globals.margin}} placeholder='Bicycle Tracking ID' />
              <Button state='disabled'>Track</Button>
            </div>
          </div>
        </section>

        <section className={`${styles['workshop']}`}>
          <div className={`${styles['info']}`}>
            <div className={`${styles['title']}`}>
              <h2>Workshop</h2>
            </div>
            
            <div className={`${styles['content']}`}>
              <p>Our workshop offers you world-class bicycle service. From full services to minor repairs. We do it all.</p>
              <p>Just bring your bike and we will start working on it. You can use the ID(s) we give you to track the progress of your bike.</p>
            </div>
            
            <div className={`${styles['action']}`}>
              <Button onClick={() => this.openPage('/services')}>Workshop services we provide</Button>
            </div>
          </div>

          <div className={`${styles['ba']}`}>
            <BeforeAfter before={require('../../static/riley-harrison-9TNGeodpVEA-unsplash.webp')} after={require('../../static/riley-harrison-9TNGeodpVEA-unsplash.webp')} />
          </div>
        </section>
        
        <section className={`${styles['rentals']}`}>
          <div className={`${styles['title']}`}>
            <h2>Rentals</h2>
          </div>

          <div className={`${styles['carousal']}`}>
            <Carousal images={[
              {
                src: require('../../static/mark-northern-qvk8QFyGfWA-unsplash.webp')
              },
              {
                src: require('../../static/riley-harrison-9TNGeodpVEA-unsplash.webp')
              }
            ]} />
          </div>
          
          <div className={`${styles['action']}`}>
            <Button onClick={() => this.openPage('/rentals')}>
              Our Rentals
            </Button>
          </div>
        </section>
      </div>
    )
  }
}
