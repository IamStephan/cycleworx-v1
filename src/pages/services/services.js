import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './services.module.scss'

import Card from '../../components/card/card'
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';

import svg from '../../static/311002.svg'

@inject('AppStore', 'ServiceStore')
@observer
export default class Services extends Component {
  render() {
    const { AppStore, ServiceStore } = this.props

    return (
      <div className={`${styles['services']}`}>
        <div className={`${styles['main']}`}>
          <div className={`${styles['hero']}`}>
            <img src={svg} />
            <h1 className={`${styles['title']}`}>Workshop</h1>
          </div>

          <section className={`${styles['section']} ${styles['section-featured']}`}>
            <h1>Popular Services</h1>

            <div className={`${styles['content']}`}>
              {
                ServiceStore.featuredServices.map((item, i) => (
                  <Card key={i}>
                    <Card.Title>
                      <h2>
                        {item.title}
                      </h2>
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
            <h1>All Our Services</h1>

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
