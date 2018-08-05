import { firebase } from './config.firebase';

export const writeDataAddTarget = (target) => {
  let ref = 'target';
  return firebase.database().ref(ref).set({
    steps: target.steps,
    kalo: target.kalo,
    km: target.km,
    minutes: target.minutes,
  });
};

export const updateDataAddTarget = (target) => {
  let ref = 'target';
  firebase.database().ref(ref).child(id).update({
    steps: target.steps,
    kalo: target.kalo,
    km: target.km,
    minutea: target.minutea,
  });
};