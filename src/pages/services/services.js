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
                    <Card.Title>
                      <h2 className={`${styles['title']}`}>Full Service</h2>
                    </Card.Title>
                    
                    <Card.Content>
                      <p>
                        Give your bike a fresh start and feel.
                      </p>
                    </Card.Content>
                    

                    <Card.Action>
                      <Button width='full' variant='ghost'>
                        Details
                      </Button>
                    </Card.Action>
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
