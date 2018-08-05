import React, { Component } from 'react';
import {
  View,
  Text,
  NativeModules,
  TouchableOpacity
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../../common/utils/colors"

const tintColor = "#8BBF71";
const backgroundColor = "#717BA5";
const rotation = 360;
const summaryDim = {
  size: 40,
  width: 5,
  iconSize: 20,
};
const dayDim = {
  size: 270,
  width: 10,
  iconSize: 50
};

const calculatorFill = (value, goals) => {
  return (value/goals)*100;
}

export const renderSummary = (icon, value, goals) => {
  return (
    <View>
      <View>
        <AnimatedCircularProgress
          size={summaryDim.size}
          width={summaryDim.width}
          fill={calculatorFill(value, goals)}
          tintColor={tintColor}
          backgroundColor={backgroundColor}
          rotation={rotation}
        >
          {
            (fill) => (
              <View style={styles.weekFill}>
                <Ionicons name={icon} size={summaryDim.iconSize} color='#29b8e5' />
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>
    </View>
  )
}



export const renderDay = (steps, goals) => {
  return (
    <AnimatedCircularProgress
      size={dayDim.size}
      width={dayDim.width}
      fill={calculatorFill(steps, goals)}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
      rotation={rotation}
    >
      {
        (fill) => (
          <TouchableOpacity style={styles.dayFill}>
            <Ionicons name='ios-walk' size={dayDim.iconSize} color='#29b8e5' />
            <Text style={styles.steps}>
              {steps} Steps
              </Text>
            <Text style={styles.goal}>
              Goal: {goals}
              </Text>
          </TouchableOpacity>
        )
      }
    </AnimatedCircularProgress>
  )
}

const styles = {
  weekFill: {
    backgroundColor: 'tranparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30
  },
  dayFill: {
    backgroundColor: 'tranparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250
  },
  day: {
    color: Colors.text_color,
    fontWeight: '800'
  },
  steps: {
    backgroundColor: 'transparent',
    fontSize: 30,
    textAlign: 'center',
    color: Colors.text_color
  },
  goal: {
    color: Colors.text_color
  },
}
