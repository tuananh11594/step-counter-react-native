import * as fb from 'firebase';

const config = {
  apiKey: 'AIzaSyAbHqsvaHLSbuQZ-6hH3d0RzAXyjrVNONY',
  authDomain: 'timesheet-386ff.firebaseapp.com',
  databaseURL: 'https://timesheet-386ff.firebaseio.com',
  projectId: 'timesheet-386ff',
  storageBucket: 'timesheet-386ff.appspot.com',
  messagingSenderId: '45610362409',
};
console.ignoredYellowBox = [ 'Setting a timer' ];
export const firebase = fb.initializeApp(config);

