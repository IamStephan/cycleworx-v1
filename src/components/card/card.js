import React, { Component } from 'react';
import Proptypes from 'prop-types';

import styles from './card.module.scss';

class CardTitle extends Component {
  render() {
    return (
      <div className={`${styles['card-title']}`}>
        {this.props.children}
      </div>
    )
  }
}

class CardContent extends Component {
  render() {
    return (
      <div className={`${styles['card-content']}`}>
        {this.props.children}
      </div>
    )
  }
}

class CardAction extends Component {
  render() {
    return (
      <div className={`${styles['card-action']}`}>
        {this.props.children}
      </div>
    )
  }
}

export default class Card extends Component {
  static propTypes = {
    layout: Proptypes.oneOf(['vertical', 'horizontal']),
    flow: Proptypes.oneOf(['normal', 'reverse']),
    image: Proptypes.node
  }

  static defaultProps = {
    layout: 'vertical',
    flow: 'normal'
  }

  static Title = CardTitle

  static Content = CardContent

  static Action = CardAction

  render() {
    const { layout, flow } = this.props
    return (
      <div
        className={`${styles['card']} ${styles[layout]} ${styles[flow]}`}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}
