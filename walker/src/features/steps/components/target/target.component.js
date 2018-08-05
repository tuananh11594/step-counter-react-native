import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert
} from 'react-native';
import NavigationComponent from '../../../../common/component/navi.component';
import { TouchableCustom } from '../../../../common/component/touchable-custom.component'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ViewLine } from '../../../../common/component/view-line.component';
import Entypo from 'react-native-vector-icons/Entypo';
import { writeDataAddTarget } from '../../../../firebase/set-data.firebase';
import { getTarget } from '../../../../firebase/get-data';

const ValueTagerElement = ({ iconMetaStep, value, type, backgroundColor, callbackMinus, callbackPlus }) => {
  return (
    <View style={[stylesValueTagerElement.button_set_value, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity
        onPress={callbackMinus}>
        <Ionicons name={'ios-remove-circle'} size={40} color='#454545' />
      </TouchableOpacity>
      <View style={stylesValueTagerElement.content_button_set_value}>
        <Text style={stylesValueTagerElement.text_value}>{value}</Text>
        <View style={stylesValueTagerElement.view_bellow_value}>
          <Ionicons name={iconMetaStep} size={15} color='#8B8B8B' />
          <Text style={stylesValueTagerElement.text_type}>{type}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={callbackPlus}>
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
  constructor(props){
    super(props);
    this.state = ({
      steps: 10000,
      kalo: 300,
      km: 3,
      minutes: 30,
    })
  }

  minusSteps = () => {
    if(this.state.kalo >= 1){
      this.setState({
        steps: (this.state.steps - 1)
      })
    }
  }

  plusSteps = () => {
    this.setState({
      steps: (this.state.steps + 1)
    })
  }

  minusKalo = () => {
    if(this.state.kalo >= 1){
      this.setState({
        kalo: (this.state.kalo - 1)
      })
    }
  }
  plusKalo = () => {
    this.setState({
      kalo: (this.state.kalo + 1)
    })
  }
  minusKm = () => {
    if(this.state.km >= 1){
      this.setState({
        km: (this.state.km - 1)
      }) 
    }
  }
  plusKm = () => {
    this.setState({
      km: (this.state.km + 1)
    })   
  }
  minusMinute = () => {
    if(this.state.minutes >= 1){
      this.setState({
        minutes: (this.state.minutes - 1)
      })  
    }
  }
  plusMinute = () => {
    this.setState({
      minutes: (this.state.minutes + 1)
    })  
  }

  doneSetTarget = () => {
    let target = {
      steps: this.state.steps,
      kalo: this.state.kalo,
      km: this.state.km,
      minutes: this.state.minutes,
    };
    writeDataAddTarget(target);
    this.props.navigation.goBack()
  }

  render() {
    this.props
    return (
      <View
        style={styles.container}
      // opacity={0.6}
      >
        <NavigationComponent 
        titleScreen="My Target" 
        buttonDone={() => {
          this.doneSetTarget()
        }}
        />
        <ScrollView style={styles.view_content}>
          <Image
            resizeMode="contain"
            style={styles.image_icon}
            source={require("../../../../assets/icon/target.png")}
          />
          <Text style={styles.text_description}>Bắt đầu với Step Counter và đặt thêm mục tiêu hàng ngày để theo dõi và tăng mức độ hoạt động của bạn.</Text>
          <View style={styles.view_notification}>
            <Ionicons name={'ios-ribbon'} size={35} color='#41F6FE' />
            <View style={styles.view_content_noti}>
              <View style={styles.view_noti_text}>
                <Text style={styles.text_noti}>Mục tiêu hàng ngày</Text>
                <Switch />
              </View>
              <ViewLine />
            </View>
          </View>
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
            iconMetaStep={'ios-walk'}
            value={this.state.steps}
            type={'Steps'}
            callbackMinus={() => this.minusSteps()}
            callbackPlus={() => this.plusSteps()}
          />
          <ValueTagerElement
            iconMetaStep={'ios-flame'}
            value={this.state.kalo}
            type={'KCAL'}
            callbackMinus={() => this.minusKalo()}
            callbackPlus={() => this.plusKalo()}
          />
          <ValueTagerElement
            iconMetaStep={'ios-speedometer'}
            value={this.state.km}
            type={'KM'}
            // backgroundColor={'#1D1F1E'}
            callbackMinus={() => this.minusKm()}
            callbackPlus={() => this.plusKm()}
          />
          <ValueTagerElement
            iconMetaStep={'ios-timer'}
            value={this.state.minutes}
            type={'PHÚT'}
            callbackMinus={() => this.minusMinute()}
            callbackPlus={() => this.plusMinute()}
          />
        </ScrollView>
      </View>
    );
  }

  getTargetAndFill = () => {
    getTarget((target) => {
      this.setState({
        steps: target.steps,
        kalo: target.kalo,
        km: target.km,
        minutes: target.minutes,
      })
    })
  }

  componentDidMount() {
    this.getTargetAndFill()
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#262B30',
  },
  view_content: {
    flex: 1,
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
    marginBottom: 10,
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