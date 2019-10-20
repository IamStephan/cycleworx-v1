import React, { Component } from 'react';
import styles from './topbar.module.scss';

import Icon from '../../components/icon/icon';

export default class Topbar extends Component {
  render() {
    return (
      <nav className={`${styles['topbar']}`}>
        <Icon name='rocket' />
      </nav>
    );
  }
}
