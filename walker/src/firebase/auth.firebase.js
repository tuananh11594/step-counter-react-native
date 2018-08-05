import { firebase } from './config.firebase';

export const login = async (email, password, callback) => {
  let res = {
    isSuccess: true,
    message: 'success',
  };
  await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      callback(res);
    })
    .catch((error) => {
      callback({ isSuccess: false, message: `${error.message}` });
    });
};

export const logout = async (callback) => {
  await firebase.auth().signOut()
    .then(() => {
      callback('logout sucess');
    }).catch((error) => {
      //callback(error);
      console.warn(error);
    });
};
