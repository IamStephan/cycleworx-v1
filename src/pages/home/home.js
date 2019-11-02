import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './home.module.scss'

import test from '../../static/riley-harrison-9TNGeodpVEA-unsplash.webp';
import test2 from '../../static/mark-northern-qvk8QFyGfWA-unsplash.webp';

import Carousal from '../../components/carousal/carousal'
import Button from '../../components/button/button';
import Card from '../../components/card/card'
import Icon from '../../components/icon/icon';

const customCardStyle = {
  margin: globals.margin,
  flex: 1,
}

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
            {
              ServiceStore.featuredServices.map((item, i) => (
                <Card key={i} style={customCardStyle}>
                  <Card.Title>
                    <h2>
                      {item.title}
                    </h2>
                  </Card.Title>
                  
                  <Card.Action>
                    <Button width='full' variant='ghost' onClick={() => AppStore.OpenModal(item.title, (
                      <p>{item.description}</p>
                    ))}>
                      <Icon name='info-circle' color={globals.primary} />
                    </Button>
                  </Card.Action>
                </Card>
              ))
            }
            
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
