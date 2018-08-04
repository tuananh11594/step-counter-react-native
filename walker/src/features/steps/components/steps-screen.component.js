import React, { Component } from 'react';
import {
  View,
  Text,
  NativeModules,
  TouchableOpacity
} from 'react-native';
import NavigationBar from '../../../common/component/navbar.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../common/utils/colors"
// const PedometerModule = NativeModules.PedometerModule;
import LineChartGradientScreen from '../../../common/chart/LineChartGradientScreen';
import BarChartScreen from '../../../common/chart/BarChartScreen';
import LineChartScreen from '../../../common/chart/LineChartScreen';
import { renderSummary, renderDay } from './circular-progress/cicular-progress.component';
export default class AboutComponent extends Component {

  constructor(props) {
    super(props);
    this.testNative();
    // PedometerModule.onStart();
  }
  testNative = () => {
    // PedometerModule.testNative();
  }

  render() {
    const navigation = this.props.navigation;

    console.log(navigation.navigate)
    return (
      <View style={styles.container}>
        <NavigationBar titleScreen="Hôm nay" />
        <View style={styles.view_show_step}>
          {renderDay()}
        </View>
        <View style={styles.view_show_result}>
          <TouchableOpacity
            style={styles.button_sumary}
            onPress={() => { this.props.navigation.navigate('Target') }} >
            {renderSummary('ios-flame')}
            <Text style={styles.text_sumary}>57 KCAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_sumary}
            onPress={() => { this.props.navigation.navigate('Target') }}>
            {renderSummary('ios-speedometer')}
            <Text style={styles.text_sumary}>854M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_sumary}
            onPress={() => { this.props.navigation.navigate('Target') }}>
            {renderSummary('ios-timer')}
            <Text style={styles.text_sumary}>18 PHÚT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view_chart}>
          <LineChartGradientScreen />
        </View>
        <View style={styles.view_button_switch_chart}>
          <TouchableOpacity style={styles.button_switch_chart}>
            <Text style={styles.text_switch_chart}>Ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_switch_chart}>
            <Text style={styles.text_switch_chart}>Tuần</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_switch_chart}>
            <Text style={styles.text_switch_chart}>Tháng</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#262B30',
  },
  view_show_step: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  view_show_result: {
    flex: 2,
    flexDirection: 'row',

  },
  view_chart: {
    flex: 4,
  },
  view_button_switch_chart: {
    flexDirection: 'row',
    flex: 1,
  },
  button_sumary: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_sumary: {
    color: "white",
    fontWeight: "600",
    paddingTop: 5,
  },
  button_switch_chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_switch_chart: {
    color: "white",
    fontWeight: "600",
    paddingTop: 5,
  }
}