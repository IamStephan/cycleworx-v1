import React, { Component } from 'react';
import styles from './pageLoader.module.scss'

export default class componentName extends Component {
  render() {
    return (
      <div className={`${styles['loader']}`} />
    );
  }
}
