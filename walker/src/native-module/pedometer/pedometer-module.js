import { NativeEventEmitter, NativeModules } from 'react-native';
import { Platform } from 'react-native';
let {
    PedometerModule
} = NativeModules
module.exports = {
    Pedometer: {
        pedometerModule: new NativeEventEmitter(PedometerModule),
        startCountingSteps(callback) {
            this.subscription = this.pedometerModule.addListener(
                'Pedometer',
                (steps) => {
                    callback(steps)
                })
            if (Platform.OS === 'ios') {
                PedometerModule.startCountingSteps()
            } else if (Platform.OS === 'android') {
                console.log("Android not yet native module");
            }

        },
        onStart() {
            if (Platform.OS === 'ios') {
                PedometerModule.onStart()

            } else if (Platform.OS === 'android') {
                console.log("Android not yet native modulet");
            }
        },
        onStop() { 
            if (Platform.OS === 'ios') {
                this.subscription.remove()
                PedometerModule.onStop() 

            } else if (Platform.OS === 'android') {
                console.log("Android not yet native module");
            }
        }
    }
}