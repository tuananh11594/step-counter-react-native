import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar
} from 'react-native';
import Colors from '../../common/constants/colors';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status_bar}/>
        <View style={styles.app_bar}>
        
          <View style={styles.view_left}>
          {/* Button left */}
          </View>
        
          <View style={styles.view_center}>
            <Text style={styles.text_title}>{this.props.titleScreen}</Text>
          </View>

          <View style={styles.view_right}>
          {/* Button right */}
          </View>

        </View>
      </View>
    );
  }
}

const status_bar_height = Platform.OS === "ios" ? 20 : 0;
const app_bar_height = Platform.OS === "ios" ? 44 : 60;


const styles = {
  container: {
    width: '100%',
  },
  status_bar: {
    height: status_bar_height,
  },
  app_bar: {
    height: app_bar_height,
    width: '100%',
    flexDirection: 'row',
  },
  view_left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  view_right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',        
  },
  text_title: {
    fontSize: 16,
    fontWeight: 'bold',
  }
}