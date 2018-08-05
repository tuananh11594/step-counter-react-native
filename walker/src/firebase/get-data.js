import { firebase } from './config.firebase';

export const getTarget = (callback) => {
  let ref = 'target';
  let starCountRef = firebase.database().ref(ref);

  starCountRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
};
