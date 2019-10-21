import React, { Component } from 'react';
import styles from './topbar.module.scss';

export default class Topbar extends Component {
  render() {
    return (
      <nav className={`${styles['topbar']}`}>
        <div className={`${styles['left']}`}>

        </div>

        <div className={`${styles['right']}`}>
          
        </div>
      </nav>
    );
  }
}
