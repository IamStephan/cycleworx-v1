import React, { Component } from 'react';
import PropTypes from 'prop-types';

import globals from '../../utils/global.scss';
import styles from './carousal.module.scss';

import Icon from '../icon/icon';

export default class Carousal extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.node,
      title: PropTypes.string
    }))
  }

  static defaultProps = {
    images: []
  }

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }

    this.slideRight = this.slideRight.bind(this)
    this.slideLeft = this.slideLeft.bind(this)

    this.Interval = setInterval(() => {
      this.slideRight()
    }, 5000)
  }

  slideRight() {
    if(this.state.activeIndex < this.props.images.length - 1) {
      this.setState((prevState, prevProps) => ({
        ...prevState,
        activeIndex: prevState.activeIndex + 1
      }))
    } else {
      this.setState((prevState, prevProps) => ({
        ...prevState,
        activeIndex: 0
      }))
    }
  }

  slideLeft() {
    if(this.state.activeIndex > 0) {
      this.setState((prevState, prevProps) => ({
        ...prevState,
        activeIndex: prevState.activeIndex - 1
      }))
    } else {
      this.setState((prevState, prevProps) => ({
        ...prevState,
        activeIndex: this.props.images.length - 1
      }))
    }
  }

  render() {
    return (
      <div className={`${styles['carousal']}`}>
        
        {
          this.props.images.map((item, i) => (
            <div
              key={i}
              className={`${styles['image-container']} ${this.state.activeIndex === i ? styles['active'] : ''}`}
            >
              <img
                className={`${styles['image']}`}
                src={item.src}
                alt={item.title}
                {...this.props}
              />

              <div className={`${styles['elements']}`}>
                <div className={`${styles['overlay']}`}>
                  <h1 className={`${styles['title']}`}>
                    {item.title}
                  </h1>
                </div>

                <div className={`${styles['controls']}`}>
                  <div onClick={() => {
                    this.slideLeft()
                    clearInterval(this.Interval)
                  }} className={`${styles['left-btn']}`}>
                    <Icon name='left-arrow' type='solid' color={globals.light} />
                  </div>

                  <div onClick={() => {
                    this.slideRight()
                    clearInterval(this.Interval)
                  }} className={`${styles['right-btn']}`}>
                    <Icon name='right-arrow' type='solid' color={globals.light} />
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    );
  }
}
