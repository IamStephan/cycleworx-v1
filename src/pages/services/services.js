import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './services.module.scss'

import Card from '../../components/card/card'
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import BeforeAfter from '../../components/beforeAfter/beforeAfter';

import svg from '../../static/311002.svg'

@inject('AppStore', 'ServiceStore')
@observer
export default class Services extends Component {
  render() {
    const { AppStore, ServiceStore } = this.props

    return (
      <div className={`${styles['services']}`}>
        <div className={`${styles['main']}`}>
          <section className={`${styles['hero']}`}>
            <div className={`${styles['title']}`}>
              <h1>
                Workshop
              </h1>
            </div>
            <BeforeAfter
              before={require('../../static/riley-harrison-9TNGeodpVEA-unsplash.webp')}
              after={require('../../static/riley-harrison-9TNGeodpVEA-unsplash.webp')}
            />
          </section>

          <section className={`${styles['section']} ${styles['section-featured']}`}>
            <div className={`${styles['title']}`}>
              <h2>Popular Services</h2>
            </div>
            

            <div className={`${styles['content']}`}>
              {
                ServiceStore.featuredServices.map((item, i) => (
                  <Card key={i}>
                    <Card.Title>
                      <h3>
                        {item.title}
                      </h3>
                    </Card.Title>

                    <Card.Action>
                      <Button width='full' variant='ghost'  onClick={() => AppStore.OpenModal(item.title, (
                        <p>{item.description}</p>
                      ))}>
                        <Icon name='info-circle' color={globals.primary} />
                      </Button>
                    </Card.Action>
                  </Card>
                )) 
              }
            </div>
          </section>

          <section className={`${styles['section']}`}>
            <div className={`${styles['title']}`}>
              <h2>All Our Services</h2>
            </div>

            <table className={`${styles['table']}`}>
              
              <tbody>
                {
                  ServiceStore.services.map((item, i) => (
                    <tr key={i}>
                      <td className={`${styles['title']}`}>
                        {item.title}
                      </td>
                      <td>
                        
                      </td>
                      <td width='1%'>
                        <Button  onClick={() => AppStore.OpenModal(item.title, (
                          <p>{item.description}</p>
                        ))}>
                          <Icon name='info-circle' color={globals.light} />
                        </Button>
                      </td>
                    </tr>
                  )) 
                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}
