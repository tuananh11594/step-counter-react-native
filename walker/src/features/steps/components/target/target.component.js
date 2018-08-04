import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image,
  ScrollView
} from 'react-native';
import NavigationBar from '../../../../common/component/navbar.component';
import { TargetElement } from './target-element.component'
export default class TargetComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar titleScreen="My Target" />
        <ScrollView style={styles.view_content}>
          <Image
            resizeMode="contain"
            style={styles.image_icon}
            source={require("../../../../assets/icon/target.png")}
          />
          <Text style={styles.text_description}>Bắt đầu với StepsApp và đặt thêm mục tiêu hàng ngày để theo dõi và tăng mức độ hoạt động của bạn.</Text>
          <TargetElement/>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#262B30',
  },
  view_content: {
    flex: 1,
    // backgroundColor: 'white'
  },
  image_icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    margin: 20,
    // backgroundColor: 'red'
  },
  text_description: {
    alignSelf: 'center',    
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
    textAlign: 'center'
  }
}