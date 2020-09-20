import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleFitted extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top'>
        <Menu.Item name='default' onClick={this.handleItemClick}>
          Prince's Theatre
        </Menu.Item>
      </Menu>
    );
  }
}
