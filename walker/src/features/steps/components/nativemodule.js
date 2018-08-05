import { NativeEventEmitter, NativeModules } from 'react-native';

let {
    PedometerModule
} = NativeModules
module.exports = {
Pedometer: {
        pedometerModule: new NativeEventEmitter(PedometerModule),
        startCountingSteps(callback){
            console.warn("Tuan Anh1");            
            this.pedometerModule.addListener(
                'Pedometer', 
                (steps) => {
                // callback(null, steps)
                // console.warn("Tuan Anh andkahsdaksjdh");
                // console.log("Tuan ANh ab aba ba")
                callback(steps)
            })
            PedometerModule.startCountingSteps()
            
        },
        onStart(){PedometerModule.onStart()},
        onStop(){PedometerModule.onStop()}
    }
}