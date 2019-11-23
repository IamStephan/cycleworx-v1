import React, { Component } from 'react';

import styles from './pill.module.scss'

export default class Pill extends Component {
  render() {
    return (
      <div
        {...this.props}
        className={`${styles['pill']}`}
      >
        {this.props.children}
      </div>
    );
  }
}
