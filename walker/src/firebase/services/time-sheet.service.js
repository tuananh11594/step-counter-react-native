import { firebase } from '../config.firebase';
import GetTime from '../../shared/utils/get-time.util';
import moment from 'moment';

const URL_DEMO = 'https://us-central1-timesheet-386ff.cloudfunctions.net';


/**
 * Get data timesheet
 * @param {* dayString format YYYY/MM/DD } dayString 
 * @param {* callback is function } callack 
 */
export const getDataTimeSheet = (dayString, callack) => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  Date.prototype.getDayName = function () {
    return days[ this.getDay() ];
  };
  // write
  let arrays = [];
  clusterDay(dayString, (res) => {
    res.forEach((item, index) => {
      let dayNumber = '';
      let dayName = '';
      let status = '';
      let array = [];
      item.forEach((child) => {
        dayNumber = child.date;
        dayName = new Date(child.date).getDayName();
        status = child.status;
        array.push({
          projectId: child.projectId,
          taskId: child.taskId,
          time: child.time,
          content: child.content,
          userId: child.userId,
          id: child.key,
        });
      });
      arrays.push({
        key: index,
        dayNumber: dayNumber,
        dayName: dayName,
        status: status,
        items: array,
      });
    });
    callack(arrays);
  });
};

/**
 *  Cluster day in week
 * @param {* Day is string, format YYYY/MM/DD } dayString 
 * @param {* callback is function callback } callack 
 */
export const clusterDay = (dayString, callack) => {
  getSubTaskInWeek(dayString, (res)=>{
    let index = 1;
    let arrays = [];
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];
    let array5 = [];
    let array6 = [];
    let array7 = [];
    res.forEach((item)=>{
      switch (new Date(item.date).getDay()) {
        case 1: array1.push(item); return;
        case 2: array2.push(item); return;
        case 3: array3.push(item); return;
        case 4: array4.push(item); return;
        case 5: array5.push(item); return;
        case 6: array6.push(item); return;
        case 0: array7.push(item); return;
      }

    });
    arrays = [array1, array2, array3, array4, array5, array6, array7];
    callack(arrays);
  });

};

/**
 * Get all subtask in week
 * @param {* string day YYYY/MM/DD } dayString 
 * @param {* function callback } callback 
 * @return {* list object }
 */
export const getSubTaskFirebase = (dayString, callback) => {
  // console.disableYellowBox = true;
  const ref = 'subTask';

  const monDay = moment(dayString, 'YYYY-MM-DD').isoWeekday('Monday').toDate();
  const sunDay = moment(dayString, 'YYYY-MM-DD').isoWeekday('Sunday').toDate();

  const subTaskRef = firebase.database().ref(ref).orderByChild('date')
    .startAt(`${monDay.getFullYear()}-${GetTime.progressDate((monDay.getMonth() + 1))}-${GetTime.progressDate(monDay.getDate())}`)
    .endAt(`${sunDay.getFullYear()}-${GetTime.progressDate((sunDay.getMonth() + 1))}-${GetTime.progressDate(sunDay.getDate())}`);

  subTaskRef.once('value', (snapshot) => {
    let arrays = [];
    snapshot.forEach((child) => {
      arrays.push({
        userId: child.val().userId,
        key: child.val().id,
        content: child.val().content,
        date: child.val().date,
        time: child.val().time,
        projectId: child.val().projectId,
        taskId: child.val().taskId,
        status: child.val().status,
        isOvertime: child.val().isOvertime,
      });

    });
    callback(arrays);
  });

};

/**
 * Get SubTask In Week
 * @param {* data is object } data 
 * @param {* callback is function } callack 
 */
export const getSubTaskAPI = (data, callack) => {
  fetch(`${URL_DEMO}/api/get-subtask`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      year: data.year,
      week: data.week,
    }),

  })
    .then((res) => res.json())
    .then((res) => {
      callack(res);
    })
    .catch(error => {
      callack(JSON.stringify({
        state: false,
        message: `Please check api firebase ${error.message}`,
        data: {
          statusWeek: null,
          subtasks: [],
        },
      }));
    });
};

/**
 * Get subtask in week by userId
 * @param {* data is object } data 
 * @param {* callback is function } callack 
 */
export const getSubTaskByUserId = (data, callack) => {
  fetch(`${URL_DEMO}/api/get-subtask-by-userid`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      year: data.year,
      week: data.week,
      userId: data.userId,
    }),

  })
    .then((res) => res.json())
    .then((res) => {
      callack(res);
    })
    .catch(error => {
      // callack(JSON.stringify({
      //   state: false,
      //   message: `error please check api firebase ${error}`,
      //   data: {
      //     statusWeek: null,
      //     subtasks: [],
      //   },
      // }));
    });
};

/**
 * Update subtask 
 * @param {* id subtask is object } data 
 * @param {* callback is function } callback 
 */
export const updateSubTask = (data, callack) => {

  fetch(`${URL_DEMO}/api/update-status-subtask`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      id: data.id,
      userId: data.userId,
      status: data.status,
    }),

  })
    .then((res) => res.json())
    .then((res) => {
      callack(res);
    })
    .catch(error => {
      callack(JSON.stringify({
        state: false,
        message: `please check firebase again`,
        data: [],
      }));
    });
};
