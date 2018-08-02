import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeComponent from '../features/home/components/home-screen.component';
import TabbarBottom from './tabbar-bottom';
import TargetComponent from '../features/steps/components/target/target.component';
import Colors from '../common/utils/colors';

export default createStackNavigator(
    {
        Tabbar: TabbarBottom,
        Target: TargetComponent,
    },
    {
        headerMode: 'screen',
        navigationOptions:{
            header: null,
            headerStyle: {
                backgroundColor: Colors.background_color
            }
        },
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);
