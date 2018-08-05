import { firebase } from '../firebase/config.firebase';

export const getIdToken = (callback) => {
  firebase.auth().currentUser.getIdToken(true).then((idToken) => {
    callback(idToken, firebase.auth().currentUser.uid);
  }).catch((error) => {
    console.log(error);
  });
};
