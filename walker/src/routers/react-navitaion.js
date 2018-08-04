import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeComponent from '../features/home/components/home-screen.component';
import TabbarBottom from './tabbar-bottom';
import TargetComponent from '../features/steps/components/target/target.component';
import AboutComponent from '../features/about/components/about-screen.component';
import Colors from '../common/utils/colors';

export default createStackNavigator(
    {
        Tabbar: {
            screen: TabbarBottom,
            navigationOptions: {
                title: "Tabbar bottom",
                header: null,
            },
        },
        Target: {
            screen: TargetComponent,
            navigationOptions: {
                title: "Target",
                header: null,
            },
        },
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            header: null,
            headerStyle: {
                backgroundColor: Colors.background_color
            }
        },
        mode:'modal',
    }
);
