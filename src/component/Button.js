import React, {Component} from 'react';
import {Button} from 'react-native';

export default class extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPress}
        title={this.props.title}
        color={this.props.color}
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
