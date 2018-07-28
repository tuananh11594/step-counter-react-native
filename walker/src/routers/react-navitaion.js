import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeComponent from '../features/home/components/home-screen.component';
import TabbarBottom from './tabbar-bottom';
import Colors from '../common/constants/colors';
export default createStackNavigator(
    {
        Tabbar: TabbarBottom,
    },
    {
        headerMode: 'screen',
        navigationOptions:{
            header: null,
            headerStyle: {
                backgroundColor: Colors.background_color
            }
        }
    }
);
