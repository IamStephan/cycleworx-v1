import React, { Component } from 'react';
import Proptypes from 'prop-types';

import styles from './card.module.scss';

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

  render() {
    const { layout, flow } = this.props
    return (
      <div className={`${styles['card']} ${styles[layout]} ${styles[flow]}`}>
        {this.props.children}
      </div>
    );
  }
}
