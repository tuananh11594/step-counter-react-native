import React from 'react';
import { Button, Text, View } from 'react-native';
import { TabNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ToolsComponent from '../features/tools/components/tools-screen.component';
import MoreComponent from '../features/more/components/more.component';

const setIconButtonTabbar = (iconScreenTabbar, nameIconVector, focused) => {
    iconScreenTabbar.icon = nameIconVector + `${focused ? '' : '-outline'}`;
}

export default createBottomTabNavigator(

    {
        Tools: {
            screen: ToolsComponent
        },
        More: {
            screen: MoreComponent
        }

    }, {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                var iconScreenTabbar = { "icon": null };
                switch (routeName) {
                    case 'Tools':
                        setIconButtonTabbar(iconScreenTabbar, 'ios-construct');
                        break;
                    case 'More':
                        setIconButtonTabbar(iconScreenTabbar, 'ios-more');
                        break;
                    default:
                        break;
                }
                return <Ionicons name={iconScreenTabbar.icon} size={25} color={tintColor} />;
            }
        }),
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabbarOption: {
            activeTintColor: 'red'
        }
    }
)

