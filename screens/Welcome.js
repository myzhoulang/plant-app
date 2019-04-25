import React, { Component } from 'react'
import { Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView, Text } from 'react-native';

import { Block } from '../components';
import { theme } from '../constants';

// TODO: 动画 幻灯片
class Welcome extends Component {
  static navigationOptions = {
    headerTitle: 'Welcome',
  }
  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Text>Welcome to home page.</Text>
      </Block>
    )
  }
}

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
})
 