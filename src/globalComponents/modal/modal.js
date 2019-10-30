import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import globals from '../../utils/global.scss';
import styles from './modal.module.scss';

import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';

@inject('AppStore')
@observer
export default class Modal extends Component {
  render() {
    const { AppStore } = this.props

    return AppStore.modal.isOpen && (
      <div className={`${styles['modal']}`}>
        <div className={`${styles['content']}`}>
          <div className={`${styles['title']}`}>
            <h2>
              {AppStore.modal.title}
            </h2>

            <Button onClick={() => AppStore.CloseModal()} variant='ghost' type='light'>
              <Icon name='x-circle' color={globals.light} />
            </Button>
          </div>
          {AppStore.modal.content}
        </div>

        <div className={`${styles['dimmer']}`} onClick={() => AppStore.CloseModal()} />
      </div>
    );
  }
}
