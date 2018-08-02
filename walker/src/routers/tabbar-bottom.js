import React from 'react';
import { TabNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepsComponent from '../features/steps/components/steps-screen.component';
import MoreComponent from '../features/more/components/more.component';

const setIconButtonTabbar = (iconScreenTabbar, nameIconVector, focused) => {
    iconScreenTabbar.icon = nameIconVector + `${focused ? '' : '-outline'}`;
}
//Test
export default createBottomTabNavigator(

    {
        Steps: {
            screen: StepsComponent
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
                    case 'Steps':
                        // setIconButtonTabbar(iconScreenTabbar, 'ios-stats');
                        iconScreenTabbar.icon = 'ios-stats' + `${focused ? '' : '-outline'}`;
                        break;
                    case 'More':
                        // setIconButtonTabbar(iconScreenTabbar, 'ios-more');
                        iconScreenTabbar.icon = 'ios-more' + `${focused ? '' : '-outline'}`;
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

