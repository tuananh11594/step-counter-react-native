import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import NavigationBar from '../../../common/component/navbar.component';

export default class MoreComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar titleScreen="More" />
        <Text>More Component</Text>
      </View>
    );
  }
}

const styles = {
    container: {
        flex: 1,
    }
}