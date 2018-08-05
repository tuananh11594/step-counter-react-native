import { firebase } from '../../config.firebase';

const createPdpPrs = (data, callback) => {

  let refPdpPrs = 'pdp-prs';
  let timeStamp = new Date().getTime();

  firebase.database().ref(refPdpPrs)
    .child(timeStamp).set({
      key: timeStamp,
      userId: data.userId,
      quarterId: data.quarterId,
      dayDeadline: data.dayDeadline,
      daySubmitted: data.daySubmitted,
      statusPDP: data.statusPDP,
      statusPRS: data.statusPDP,
      pdp: data.pdp,
      prs: data.prs,
    }, (error) => {
      if (!error) {
        callback({
          state: true,
          message: 'add successfully',
        });
      } else {
        callback({
          state: true,
          message: 'add fail',
        });
      }
    });

};

const updatePdpStatus = (data, callback) => {

  let refPdpPrs = 'pdp-prs';

  firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId).update({
      statusPDP: data.statusPDP,
    }, (error) => {
      if (!error) {
        callback({
          state: true,
          message: 'update status successfully',
        });
      } else {
        callback({
          state: true,
          message: 'update status fail',
        });
      }
    });

  

};

const updatePrsStatus = (data, callback) => {

  let refPdpPrs = 'pdp-prs';

  firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId).update({
      statusPRS: data.statusPRS,
    }, (error) => {
      if (!error) {
        callback({
          state: true,
          message: 'update status successfully',
        });
      } else {
        callback({
          state: true,
          message: 'update status fail',
        });
      }
    });
};

const getAllQuarter = (callback) => {

  let arrays = [];
  let refQuarter = 'quarter';
  let listQuarter = firebase.database().ref(refQuarter).once('value')
    .then((snap) => {
      snap.forEach((child) => {
        arrays.push(child.val());
      });
      callback(arrays);
      return arrays;
    });

  return listQuarter;
};

const getAllUserInfo = (callback) => {

  let arrays = [];
  let refUser = 'userInformation';
  let listUser = firebase.database().ref(refUser).once('value')
    .then((snap) => {
      snap.forEach((child) => {
        arrays.push(child.val());
      });
      callback(arrays);
      return arrays;
    });

  return listUser;

};

const getPdpPrsByUserId = (userId, callback) => {

  let arrays = [];
  let refPdpPrs = 'pdp-prs';

  let listPdpPrs = firebase.database().ref(refPdpPrs).orderByChild('userId').equalTo(userId)
    .once('value', )
    .then((snap) => {
      snap.forEach((child) => {
        arrays.push(child.val());
      });
      callback(arrays);
      return arrays;
    });
  return listPdpPrs;
};

const addObjectInPdp = (data, callback) => {

  let refPdpPrs = 'pdp-prs';
  let refPdp = 'pdp';

  let promisePdpPrs = firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId)
    .child(refPdp)
    .child(data.key).set({
      key: data.key,
      developmentObjective: data.developmentObjective,
      supportWhichKPI: data.supportWhichKPI,
      methodCourseIndentified: data.methodCourseIndentified,
      internalOrExternal: data.internalOrExternal,
      actionPlan: data.actionPlan,
    },
    (error)=>{
      if (!error) {
        callback({
          state: true,
          message: 'add pdp successfully',
          data: {},
        });
      }
    });

  return promisePdpPrs;
};

const updateObjectInPdp = (data, callback) => {

  let refPdpPrs = 'pdp-prs';
  let refPdp = 'pdp';

  let promisePdpPrs = firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId)
    .child(refPdp)
    .set(data.items);

  callback({
    state: true,
    message: 'add pdp successfully',
    data: {},
  });

  return promisePdpPrs;
};

const getAllPdp = (data, callback) => {

  const refPdpPrs = 'pdp-prs';
  const refPdp = 'pdp';

  let arrays = [];

  let promisePdpPrs = firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId)
    .child(refPdp)
    .once('value')
    .then((snap) => {
      snap.forEach((child) => {
        arrays.push(child.val());
      });
      callback(arrays);
    });
  return promisePdpPrs;
};

const deletePdp = (data, fn1, fn2 ) => {
  fn2();
  const refPdpPrs = 'pdp-prs';
  const refPdp = 'pdp';

  let promisePdpPrs = firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId)
    .child(refPdp).child(data.key).remove((error) => {
      console.log(error);
      fn1({
        state: true,
        message: 'delete pdp successfully',
        data: {},
      });
    });

  return promisePdpPrs;
};

const getAllPrs = (data, callback) => {
  const refPdpPrs = 'pdp-prs';
  const refPrds = 'prs';

  let arrays = [];

  firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId)
    .child(refPrds)
    .once('value')
    .then((snap) => {
      snap.forEach((child) => {
        arrays.push(child.val());
      });
      callback(arrays);
    }).catch((error) => {
      console.log(error);
    });
};

const updatePrs = (data, callback) => {

  let refPdpPrs = 'pdp-prs';
  let refPrs = 'prs';

  let promisePdpPrs = firebase.database().ref(refPdpPrs)
    .child(data.pdpPrsId)
    .child(refPrs)
    .set(data.items);

  callback({
    state: true,
    message: 'add pdp successfully',
    data: {},
  });

  return promisePdpPrs;
};

export default {
  createPdpPrs: createPdpPrs,
  updatePdpStatus: updatePdpStatus,
  updatePrsStatus: updatePrsStatus,
  getAllQuarter: getAllQuarter,
  getPdpPrsByUserId: getPdpPrsByUserId,
  addObjectInPdp: addObjectInPdp,
  getAllUserInfo: getAllUserInfo,
  getAllPdp: getAllPdp,
  deletePdp: deletePdp,
  updateObjectInPdp: updateObjectInPdp,
  getAllPrs: getAllPrs,
  updatePrs: updatePrs,
};
