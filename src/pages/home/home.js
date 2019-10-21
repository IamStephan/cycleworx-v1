import React, { Component } from 'react';

import Button from '../../components/button/button'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button.Group>
          <Button onClick={() => alert('asdtasd')}>Button</Button>
          <Button onClick={() => alert('asdtasd')}>Button</Button>
        </Button.Group>
        <Button onClick={() => alert('asdtasd')}>Button</Button>
      </div>
    );
  }
}
