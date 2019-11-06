import React, { Component } from 'react';

import styles from './rentals.module.scss';

import Card from '../../components/card/card';
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Carousal from '../../components/carousal/carousal';

export default class Rentals extends Component {
  render() {
    return (
      <div className={`${styles['rentals']}`}>
        <div className={`${styles['main']}`}>
          <section className={`${styles['hero']}`}>
            <div className={`${styles['title']}`}>
              <h1>
                Rentals
              </h1>
            </div>
            <Carousal images={[
              {
                src: require('../../static/mark-northern-qvk8QFyGfWA-unsplash.webp')
              }
            ]} />
          </section>

          <section className={`${styles['section']}`}>
            <div className={`${styles['title']}`}>
              <h2>Our catalog</h2>
            </div>

            <div className={`${styles['content']}`}>
              {
                [1,1,1,1].map((item, i) => (
                  <Card key={i}>
                    <Card.Title>
                      <h3>
                        hu
                      </h3>
                    </Card.Title>
                  </Card>
                )) 
              }
            </div>
          </section>
        </div>
      </div>
    );
  }
}
