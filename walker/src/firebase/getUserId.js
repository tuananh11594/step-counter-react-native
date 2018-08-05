import { firebase } from './config.firebase';

export const getUserId = () => {
  return firebase.auth().currentUser.uid;
};