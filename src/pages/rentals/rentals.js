import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './rentals.module.scss';

import Card from '../../components/card/card';
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Carousal from '../../components/carousal/carousal';

@inject('RentalsStore')
@observer
export default class Rentals extends Component {
  render() {
    const { RentalsStore } = this.props

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
                RentalsStore.bikes.map((bike, i) => (
                  <Card key={i + 'bike'}>
                    <Card.Title>
                      <h3>
                        {bike.name}
                      </h3>
                    </Card.Title>
                    <Card.Content>
                      {
                        bike.sizes.map((size, i) => (
                          <li key={i + 'size'}>{size}</li>
                        ))
                      }
                    </Card.Content>
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
