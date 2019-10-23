import React, { Component } from 'react';

import globals from '../../utils/global.scss';
import styles from './footer.module.scss'

import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';

export default class Footer extends Component {
  render() {
    return (
      <div className={`${styles['footer']}`}>
        <div className={`${styles['info']}`}>
          <Icon name='copyright' color={globals.light} />
          <Button variant='ghost' type='light'>2019 Cycleworx Langebaan</Button>
          |
          <Button variant='ghost' type='light'>Sitemap</Button>
        </div>
        <div className={`${styles['social']}`}>
          <Button.Group>
            <Button>
              <Icon color={globals.light} name='facebook' type='logo' />
            </Button>
            <Button>
              <Icon color={globals.light} name='mail-send' type='logo' />
            </Button>
          </Button.Group>
          
        </div>
      </div>
    );
  }
}
