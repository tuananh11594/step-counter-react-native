import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import NavigationBar from '../../../../common/component/navbar.component';
import { TouchableCustom } from '../../../../common/component/touchable-custom.component'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ViewLine } from '../../../../common/component/view-line.component';
import Entypo from 'react-native-vector-icons/Entypo';

const ValueTagerElement = ({ iconMetaStep, value, type, backgroundColor }) => {
  return (
    <View style={[stylesValueTagerElement.button_set_value, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity>
        <Ionicons name={'ios-remove-circle'} size={40} color='#454545' />
      </TouchableOpacity>
      <View style={stylesValueTagerElement.content_button_set_value}>
        <Text style={stylesValueTagerElement.text_value}>{value}</Text>
        <View style={stylesValueTagerElement.view_bellow_value}>
          <Ionicons name={iconMetaStep} size={15} color='#8B8B8B' />
          <Text style={stylesValueTagerElement.text_type}>{type}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name={'ios-add-circle'} size={40} color='#454545' />
      </TouchableOpacity>
    </View>
  );
}

const stylesValueTagerElement = {
  button_set_value: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
  },
  content_button_set_value: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_bellow_value: {
    flexDirection: 'row',
  },
  text_value: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  text_type: {
    color: '#8B8B8B',
    marginLeft: 6,
  }
}



export default class TargetComponent extends Component {
  render() {
    return (
      <View
        style={styles.container}
      // opacity={0.6}
      >
        <NavigationBar titleScreen="My Target" />
        <ScrollView style={styles.view_content}>
          <Image
            resizeMode="contain"
            style={styles.image_icon}
            source={require("../../../../assets/icon/target.png")}
          />
          <Text style={styles.text_description}>Bắt đầu với StepsApp và đặt thêm mục tiêu hàng ngày để theo dõi và tăng mức độ hoạt động của bạn.</Text>
          <TouchableOpacity style={styles.view_notification}>
            <Ionicons name={'ios-notifications'} size={35} color='#41F6FE' />
            <View style={styles.view_content_noti}>
              <View style={styles.view_noti_text}>
                <Text style={styles.text_noti}>Thông báo</Text>
                <Entypo name={'chevron-right'} size={25} color='#454545' />
              </View>
              <ViewLine />
            </View>
          </TouchableOpacity>
          <ValueTagerElement
            iconMetaStep={'ios-flame'}
            value={300}
            type={'KCAL'}
          />
          <ValueTagerElement
            iconMetaStep={'ios-speedometer'}
            value={'3,0'}
            type={'KM'}
            backgroundColor={'#1D1F1E'}
          />
          <ValueTagerElement
            iconMetaStep={'ios-timer'}
            value={30}
            type={'PHÚT'}
          />
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
    // backgroundColor: 'black',
    // position: 'absolute',
  },
  image_icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    margin: 20,
  },
  text_description: {
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
    textAlign: 'center'
  },
  //Butotn set value
  button_set_value: {
    flexDirection: 'row',
    width: '100%',
  },
  content_button_set_value: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_bellow_value: {
    flexDirection: 'row',
  },
  ////
  view_notification: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  view_content_noti: {
    flex: 1,
  },
  view_noti_text: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  text_noti: {
    color: 'white',
    fontWeight: '700',
    flex: 1
  }
}