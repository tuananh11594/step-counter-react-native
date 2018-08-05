var firebase = require("firebase");
const config = {
  apiKey: 'AIzaSyBpOOUdT_UJMyEOORVJjw-OvFH5U4fj2NI',
  authDomain: 'stepcounter-29c7a.firebaseapp.com',
  databaseURL: 'https://stepcounter-29c7a.firebaseio.com',
  projectId: 'stepcounter-29c7a',
  storageBucket: 'stepcounter-29c7a.appspot.com',
  messagingSenderId: '224997643904',
};
console.ignoredYellowBox = [ 'Setting a timer' ];
export const firebase = firebase.initializeApp(config);

