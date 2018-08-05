import { firebase } from '../../config.firebase';
import GetTime from '../../../shared/utils/get-time.util';
import moment from 'moment';

const URL_DEMO = 'https://us-central1-timesheet-386ff.cloudfunctions.net';

export const getQuaterByUserId = (data, callack) => {
  fetch(`${URL_DEMO}/api/get-quater-by-userid`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      userId: data.userId,
    }),

  })
    .then((res) => res.json())
    .then((res) => {
      callack(res);
    })
    .catch(error => {
      console.log(error);
      // callack(JSON.stringify({
      //   state: false,
      //   message: `error please check api firebase ${error}`,
      //   data: {
      //     quaters: [],
      //   },
      // }));
    });
};

export const getPdpQuaterByQuaterId = (data, callback) => {
  fetch(`${URL_DEMO}/api/get-pdp-by-quaterid`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      quaterId: data.quaterId,
    }),

  })
    .then((res) => res.json())
    .then((res) => callback(res))
    .catch(error => {
      console.log(error);
    });
};

export const deletePdpQuater = (data, callback1, callack2) => {
  callack2();
  fetch(`${URL_DEMO}/api/delete-pdp`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      key: data.key,
    }),

  })
    .then((res) => res.json())
    .then((res) => callback1(res))
    .catch(error => {
      console.log(error);
    });
};

export const addPdpQuater = (data, callback) => {
  fetch(`${URL_DEMO}/api/add-pdp`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      key: data.key,
      quaterId: data.quaterId,
      developmentObjective: data.developmentObjective,
      supportWhichKPI: data.supportWhichKPI,
      methodCourseIndentified: data.methodCourseIndentified,
      internalOrExternal: data.internalOrExternal,
      actionPlan: data.actionPlan,
    }),

  })
    .then((res) => res.json())
    .then((res) => callback(res))
    .catch(error => {
      console.log(error);
    });
};
