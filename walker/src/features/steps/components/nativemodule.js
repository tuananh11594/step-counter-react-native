import { NativeEventEmitter, NativeModules } from 'react-native';

let {
    PedometerModule
} = NativeModules
module.exports = {
Pedometer: {
        pedometerModule: new NativeEventEmitter(PedometerModule),
        startCountingSteps(callback){
            this.pedometerModule.addListener(
                'Pedometer', 
                (steps) => {
                callback(steps)
            })
            PedometerModule.startCountingSteps()
            
        },
        onStart(){PedometerModule.onStart()},
        onStop(){PedometerModule.onStop()}
    }
}