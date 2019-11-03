  import React, { Component } from 'react';

  import styles from './input.module.scss'
  
  export default class Input extends Component {
    render() {
      return (
        <input className={`${styles['input']}`} type='text' {...this.props} />
      );
    }
  }
  