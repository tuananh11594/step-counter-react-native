
const URL_DEMO = 'https://us-central1-timesheet-386ff.cloudfunctions.net';

export const updateSubtask = (data, callback) => {
  fetch(`${URL_DEMO}/api/update-subtask`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      id: data.id,
      content: data.content,
      date: data.date,
      isOvertime: data.isOvertime,
      projectId: data.projectId,
      taskId: data.taskId,
      status: data.status,
      time: data.time,
      userId: data.userId,
      informationLeaveId: '',
      type: 'work',
    }),

  })
    .then((res) => res.json())
    .then((res) => {
      callback(res);
    })
    .catch(error => {
      callback(JSON.stringify({
        state: false,
        message: `update substak error ${error}`,
        data: { },
      }));
    });
};

export const deleteSubtask = (data, callback) => {
  fetch(`${URL_DEMO}/api/delete-subtask`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': data.idToken,
    },
    body: JSON.stringify({
      id: data.id,
    }),

  })
    .then((res) => res.json())
    .then((res) => {
      callback(res);
    })
    .catch(error => {
      callback(JSON.stringify({
        state: false,
        message: error,
        data: { },
      }));
    });
};

