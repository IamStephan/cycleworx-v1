import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

class ButtonGroup extends Component {
  static propTypes = {
    flow: PropTypes.oneOf(['vertical', 'horizontal']),
    width: PropTypes.oneOf(['inline', 'full'])
  }

  static defaultProps = {
    flow: 'horizontal',
    width: 'inline'
  }

  render() {
    const { flow, width } = this.props

    return (
      <div
        className={`${styles['button-group']} ${styles[flow]} ${styles[width]}`}
        {...this.props}
      >
        {this.props.children}
      </div>
    )
  }
}

export default class Button extends Component {
  static Group = ButtonGroup

  static propTypes = {
    variant: PropTypes.oneOf(['fill', 'outline', 'ghost']),
    type: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light']),
    state: PropTypes.oneOf(['active', 'disabled', 'loading', 'toggled']),
    width: PropTypes.oneOf(['full', 'inline'])
  }

  static defaultProps = {
    variant: 'fill',
    type: 'primary',
    state: 'active',
    width: 'inline'
  }

  render() {
    const { variant, type, state, width } = this.props

    return (
      <div
        className={`${styles['button']} ${styles[variant]} ${styles[type]} ${styles[state]} ${styles[width]}`}
        {...this.props}
        onClick={state === 'disabled' || state === 'loading' ? () => {} : this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
