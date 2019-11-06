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
      offset: 25,
      sliderWidth: 0
    }

    this.calculateWidthOfSlider = this.calculateWidthOfSlider.bind(this)
  }

  componentDidMount() {
    this.calculateWidthOfSlider()
    window.addEventListener('resize', this.calculateWidthOfSlider)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateWidthOfSlider)
  }

  calculateWidthOfSlider() {
    this.setState({
      ...this.state,
      sliderWidth: this.Parent.getBoundingClientRect().width + 50
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

        <div
          className={`${styles['divider']}`}
          style={{
            left: `${this.state.offset}%`
          }}
        />

        <input
          style={{
            width: `${this.state.sliderWidth}px`
          }}
          className={`${styles['slider']}`} 
          type='range' ref={ref => this.Slider = ref}
          onChange={(e) => this.setState({...this.state ,offset: e.target.value})}
          value={this.state.offset}
        />
      </div>
    );
  }
}
