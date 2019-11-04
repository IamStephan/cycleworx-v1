import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './beforeAfter.module.scss'

export default class BeforeAfter extends Component {
  static propTypes = {
    before: PropTypes.node.isRequired,
    after: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      offset: 50,
      parentRatio: 0
    }

    this.calculateRatio = this.calculateRatio.bind(this)
  }

  componentDidMount() {
    this.calculateRatio()
    window.addEventListener('resize', this.calculateRatio)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateRatio)
  }

  calculateRatio() {
    this.setState({
      ...this.state,
      parentRatio: (this.Parent.getBoundingClientRect().height / this.Parent.getBoundingClientRect().width) * 25
    })
  }

  render() {
    return (
      <div {...this.props} className={`${styles['beforeAfter']}`} ref={(ref) => this.Parent = ref}>
        <img
          alt='Before'
          onMouseOver={(e) => console.log(e)}
          style={{
            clipPath: `inset(0px ${100 - this.state.offset}% 0px 0px)`
          }}
          className={`${styles['before']}`}
          src={this.props.before}
        />
        
        <img
          alt='After'
          className={`${styles['after']}`}
          src={this.props.after}
        />

        <input
          style={{
            width: `${100 + (this.state.parentRatio)}%`
          }}
          className={`${styles['slider']}`} 
          type='range' ref={ref => this.Slider = ref}
          onChange={(e) => this.setState({...this.state ,offset: e.target.value})}
        />
      </div>
    );
  }
}
