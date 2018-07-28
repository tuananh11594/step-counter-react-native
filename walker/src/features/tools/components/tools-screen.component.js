import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import NavigationBar from '../../../common/component/navbar.component';

export default class AboutComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar titleScreen="Tools" />
        <Text>Tools component</Text>
      </View>
    );
  }
}

const styles = {
    container: {
        flex: 1,
    }
}