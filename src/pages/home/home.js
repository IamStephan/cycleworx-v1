import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './home.module.scss'

import test from '../../static/riley-harrison-9TNGeodpVEA-unsplash.jpg';
import test2 from '../../static/mark-northern-qvk8QFyGfWA-unsplash.jpg';

import Carousal from '../../components/carousal/carousal'
import Button from '../../components/button/button';
import Card from '../../components/card/card'

const customCardStyle = {
  margin: globals.margin,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

@inject('AppStore')
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
    const { AppStore } = this.props

    return (
      <div className={`${styles['home']}`}>
        <div className={`${styles['carousal-space']}`}>
          <Carousal
            images={[
              {src: test, title: 'Welcome to cycleworx langebaan'},
              {src: test2, title: 'test2'},
            ]}
          />
        </div>

        <section className={`${styles['section']}`}>
          <h1 className={`${styles['section-title']}`}>
            Popular Services
          </h1>

          <div className={`${styles['section-content']}`}>
            <Card style={customCardStyle}>
              <h2 className={`${styles['title']}`}>Full Service</h2>
              <p className={`${styles['content']}`}>
                Give your bike a fresh start and feel.
              </p>
              <div className={`${styles['btn']}`}>
                <Button width='full' variant='ghost' onClick={() => AppStore.OpenModal('Full Service', (<p>dsgf</p>))}>
                  Details
                </Button>
              </div>
            </Card>

            <Card style={customCardStyle}>
              <h2 className={`${styles['title']}`}>Dual Sus Service</h2>
              <p className={`${styles['content']}`}>
                When your dual suspension needs an extra bit more.
              </p>
              <div className={`${styles['btn']}`}>
                <Button width='full' variant='ghost'>
                  Details
                </Button>
              </div>
            </Card>

            <Card style={customCardStyle}>
              <h2 className={`${styles['title']}`}>Pro Wash and Lube</h2>
              <p className={`${styles['content']}`}>
                Let your bike look brand new.
              </p>
              <div className={`${styles['btn']}`}>
                <Button width='full' variant='ghost'>
                  Details
                </Button>
              </div>
            </Card>
          </div>

          <div className={`${styles['section-action']}`}>
            <Button onClick={() => this.openPage('/services')}>
              View All Services
            </Button>
          </div>
        </section>

        <section className={`${styles['section']}`}>
          <h1 className={`${styles['section-title']}`}>
            Rentals
          </h1>

          <div className={`${styles['section-carousal']}`}>
            <Carousal images={[
              {src: test},
              {src: test2},
            ]} />
          </div>

          <div className={`${styles['section-action']}`}>
            <Button>
              View Rentals Arrangements
            </Button>
          </div>
        </section>

        <section className={`${styles['section']}`}>
          <h1 className={`${styles['section-title']}`}>
            Fun Routes
          </h1>

          <div className={`${styles['section-content']}`}>
            <Card style={customCardStyle}>
              <div className={`${styles['routes']}`}>
                <iframe title='map1' src="https://www.google.com/maps/d/embed?mid=15sWGTUuuilCd8lJxJzqQWBmnjvE&hl=en" />
              </div>
              <div className={`${styles['btn']}`}>
                <Button width='full' variant='ghost'>
                  Details
                </Button>
              </div>
            </Card>

            <Card style={customCardStyle}>
              <div className={`${styles['routes']}`}>
                <iframe title='map2' src="https://www.google.com/maps/d/embed?mid=15sWGTUuuilCd8lJxJzqQWBmnjvE&hl=en" />
              </div>
              <div className={`${styles['btn']}`}>
                <Button width='full' variant='ghost'>
                  Details
                </Button>
              </div>
            </Card>

            <Card style={customCardStyle}>
              <div className={`${styles['routes']}`}>
                <iframe title='map3' src="https://www.google.com/maps/d/embed?mid=15sWGTUuuilCd8lJxJzqQWBmnjvE&hl=en" />
              </div>
              <div className={`${styles['btn']}`}>
                <Button width='full' variant='ghost'>
                  Details
                </Button>
              </div>
            </Card>
          </div>

          <div className={`${styles['section-action']}`}>
            <Button>
              Langebaan Routes
            </Button>
          </div>
        </section>
      </div>
    )
  }
}
