import { firebase } from './config.firebase';

export const getTarget = (ref, callback) => {
  let starCountRef = firebase.database().ref(ref);

  starCountRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
};

