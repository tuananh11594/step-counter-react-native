import { firebase } from './config.firebase';

export const getTimeOffData = (callback) => {
  let ref = 'subTask';
  let timeOffDataRef = firebase.database().ref(ref);
  let userId = firebase.auth().currentUser.uid;

  timeOffDataRef.on('value', (snapshot) => {
    let listTimeOff = [];
    snapshot.forEach((child) => {
      if (child.val().userId === userId) {
        if (child.val().type === 'leave') {
          listTimeOff.push(child.val());
        }
      }
    });
    callback(listTimeOff);
  });
};