import * as React from "react";
import { createDrawerNavigator } from 'react-navigation';
import HomeComponent from '../features/home/home.component';

export default MyApp = createDrawerNavigator({
    Home: {
        screen: HomeComponent,
    },
});
