import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../../component/Button';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: '#841584'
    };
  }

  updateButtonColor = () => {
    this.setState({
      buttonColor: randomColorGenerator()
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          color={this.state.buttonColor}
          onPress={this.updateButtonColor}
          title={this.state.buttonColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const randomColorGenerator = () => {
  return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;
};
