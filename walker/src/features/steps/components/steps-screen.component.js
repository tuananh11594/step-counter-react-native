import React, { Component } from 'react';
import {
  View,
  Text,
  NativeModules,
  TouchableOpacity,
  NativeEventEmitter,
  Alert,
  Vibration
} from 'react-native';
import NavigationBar from '../../../common/component/navbar.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../common/utils/colors"
import LineChartGradientScreen from '../../../common/chart/LineChartGradientScreen';
import BarChartScreen from '../../../common/chart/BarChartScreen';
import LineChartScreen from '../../../common/chart/LineChartScreen';
import { renderSummary, renderDay } from './circular-progress/cicular-progress.component';
import { Pedometer } from '../../../native-module/pedometer/pedometer-module'
import { getTarget } from '../../../firebase/get-data';
// import NotifService from '../../../noti-service/noti-service';

// var PushNotification = require('react-native-push-notification');

const PedometerModule = NativeModules.PedometerModule;

const stepsMeta = {
  //One step equal 1s
  timeOfStep: 1 / 60,
  //One step equal 1/3m 
  meterOfStep: 1 / 3,
}

const PATTERN = [1000, 2000, 3000]

// Lượng Calo bị đốt cháy trong 1 phút đi bộ = (0,035 x trọng lượng cơ thể) + [(vận tốc ^2) / Chiều cao] x 0,029 x trọng lượng cơ thể. 
export default class AboutComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      isListentEmit: false,
      steps: 0,
      stepsChart: 0,
      kalo: 0,
      meter: 0,
      minutes: 0,
      goalStepsDay: 10000,
      goalKalos: 100,
      goalMinutes: 60,
      goalMeters: 1000,
      yourHeight: 1.74,
      yourWeight: 78,
      dataChart: {
        mo: 0,
        tu: 0,
        we: 0,
        th: 0,
        fr: 0,
        sa: 0,
        su: 0
      },
      isDone: false
    }

    // this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));

  }

  // onRegister(token) {
  //   Alert.alert("Registered !", JSON.stringify(token));
  //   console.log(token);
  //   this.setState({ registerToken: token.token, gcmRegistered: true });
  // }

  // onNotif(notif) {
  //   console.log(notif);
  //   Alert.alert(notif.title, notif.message);
  // }

  caculatorCalo = (time, yourWeight, yourHeight, ) => {
    let kalo = time * [(0.035 * yourWeight) + [(5 ^ 2) * yourHeight] * 0.029 * yourHeight];
    this.setState({ kalo: kalo.toFixed(2) });
  }

  caculatorMinutesAndCalo = (steps) => {
    let minutes = steps * stepsMeta.timeOfStep;
    this.setState({ minutes: minutes.toFixed(2) });
    this.caculatorCalo(minutes, this.state.yourWeight, this.state.yourHeight)
  }

  caculatorMeter = (steps) => {
    let meter = steps * stepsMeta.meterOfStep
    this.setState({ meter: meter.toFixed(2) });

  }

  caculatorMetaSteps = (steps) => {
    this.caculatorMinutesAndCalo(steps);
    this.caculatorMeter(steps);
  }

  turnOnOffPedometer = () => {
    if (this.state.isStart) {
      this.showAlerConfirmStopPedometer()
    } else {
      this.startPedometer()
    }
  }

  showAlerConfirmStopPedometer = () => {
    Alert.alert(
      'Confirm!',
      'Do you want stop?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'OK', onPress: () => {
            this.stopPedometer()
          }
        },
      ],
      { cancelable: false }
    )
  }

  stopPedometer = () => {
    Pedometer.onStop()
    this.setState({
      isStart: false,
      steps: 0,
      kalo: 0,
      meter: 0,
      minutes: 0,
    })
  }

  startPedometer = () => {
    Pedometer.onStart();
    this.setState({
      isStart: true,
      isListentEmit: true
    })
  }

  startStepCounter = () => {
    if (this.state.isStart && this.state.isListentEmit) {
      Pedometer.startCountingSteps((steps) => {
        // if (error) {
        // } else {
        this.setState({
          steps: steps,
          stepsChart: steps,
          isListentEmit: false
        });
        this.caculatorMetaSteps(steps)
        // }
      })
    }
  }

  navigateTarget = () => {
    const navigation = this.props.navigation;
    navigation.navigate('Target');
  }

  notiDone = () => {
    if (!this.state.isDone) {
      Alert.alert("Done");
      this.setState({
        isDone: true
      });
    }

  }

  doneTarget = () => {
    if (
      this.state.steps >= this.state.goalStepsDay ||
      this.state.kalo >= this.state.goalKalos ||
      this.state.meter >= this.state.goalMeters ||
      this.state.minutes >= this.state.goalMinutes) {
      Vibration.vibrate(PATTERN)
      this.notiDone()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar titleScreen="Hôm nay" />
        <TouchableOpacity
          style={styles.view_show_step}
          onPress={() => this.turnOnOffPedometer()}>
          {renderDay(this.state.isStart, this.state.steps, this.state.goalStepsDay)}
        </TouchableOpacity>
        <View style={styles.view_show_result}>
          <TouchableOpacity
            style={styles.button_sumary}
            onPress={() => this.navigateTarget()}>
            {renderSummary('ios-flame', this.state.kalo, this.state.goalKalos)}
            <Text style={styles.text_sumary}>{this.state.kalo} KCAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_sumary}
            onPress={() => this.navigateTarget()}>
            {renderSummary('ios-speedometer', this.state.meter, this.state.goalMeters)}
            <Text style={styles.text_sumary}>{this.state.meter} M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_sumary}
            onPress={() => this.navigateTarget()}>
            {renderSummary('ios-timer', this.state.minutes, this.state.goalMinutes)}
            <Text style={styles.text_sumary}>{this.state.minutes} PHÚT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view_chart}>
          <LineChartGradientScreen
            steps={this.state.stepsChart}
            dataChart={this.state.dataChart}
          />
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

  componentDidUpdate() {
    this.startStepCounter()
    this.doneTarget()
  }

  getTargetAndFill = () => {
    getTarget('target', (target) => {
      this.setState({
        goalStepsDay: target.steps,
        goalKalos: target.kalo,
        goalMeters: target.km * 1000,
        goalMinutes: target.minutes,
      })
    })
  }

  getDataChart = () => {
    getTarget('chart', (target) => {
      this.setState({
        dataChart: target,
      })
    })
  }

  componentDidMount() {
    this.getTargetAndFill()
    this.getDataChart()
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