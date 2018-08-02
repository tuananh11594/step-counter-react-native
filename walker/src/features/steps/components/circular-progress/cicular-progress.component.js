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

export const renderSummary = (icon, fill) => {
    return (
      <View>
        <View>
          <AnimatedCircularProgress
            size={summaryDim.size}
            width={summaryDim.width}
            fill={12321}
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

export const renderDay = (steps) => {
    return (
      <AnimatedCircularProgress
        size={dayDim.size}
        width={dayDim.width}
        fill={123}
        tintColor={tintColor}
        backgroundColor={backgroundColor}
        rotation={rotation}
      >
        {
          (fill) => (
            <View style={styles.dayFill}>
              <Ionicons name='ios-walk' size={dayDim.iconSize} color='#29b8e5' />
              <Text style={styles.steps}>
                {steps} Steps
              </Text>
              <Text style={styles.goal}>
                Goal: 10000
              </Text>
            </View>
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
