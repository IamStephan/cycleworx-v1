import React, { Component } from 'react';

import globals from '../../utils/global.scss';
import styles from './services.module.scss'

import Card from '../../components/card/card'
import Button from '../../components/button/button';

const customCardStyle = {
  margin: globals.margin,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
}


export default class Services extends Component {
  render() {
    return (
      <div className={`${styles['services']}`}>
        <div className={`${styles['main']}`}>
          <section className={`${styles['section']}`}>
            <h1>Popular Services</h1>

            <div className={`${styles['content']}`}>

              {
                [1,1,1,1,1].map(i => (
                  <Card style={customCardStyle}>
                    <h2 className={`${styles['title']}`}>Full Service</h2>
                    <p className={`${styles['content']}`}>
                      Give your bike a fresh start and feel.
                    </p>
                    <div className={`${styles['btn']}`}>
                      <Button width='full' variant='ghost'>
                        Details
                      </Button>
                    </div>
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
