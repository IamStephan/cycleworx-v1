import React, { Component } from 'react';

import globals from '../../utils/global.scss';
import styles from './home.module.scss'

import test from '../../static/riley-harrison-9TNGeodpVEA-unsplash.jpg';
import test2 from '../../static/mark-northern-qvk8QFyGfWA-unsplash.jpg';

import Carousal from '../../components/carousal/carousal'
import Card from '../../components/card/card'

export default class Home extends Component {
  render() {
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
            Our Services
          </h1>

          <div className={`${styles['section-content']}`}>
            <Card>
              <p>vbhjknl</p>
            </Card>
          </div>
        </section>
      </div>
    )
  }
}
