import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import Tabbar from '../../../routers/tabbar-bottom';
import RootStack from '../../../routers/react-navitaion';

class HomeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack style={{flex: 1}}/>
      </View>
    );
  }
}

export default HomeComponent;

const styles = {
    container : {
        flex: 1,
    }
    
}