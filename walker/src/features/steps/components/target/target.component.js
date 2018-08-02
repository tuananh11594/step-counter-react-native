import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import NavigationBar from '../../../../common/component/navbar.component';

export default class TargetComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TargetComponent titleScreen="TargetComponent" />
        <Text>TargetComponent</Text>
      </View>
    );
  }
}

const styles = {
    container: {
        flex: 1,
    }
}