import { firebase } from './config.firebase';

export const writeDataAddTask = (id, task) => {
  let ref = 'subTask';
  return firebase.database().ref(ref).child(id).set({
    content: task.content,
    date: task.date,
    id: task.id,
    projectId: task.projectId,
    informationLeaveId: task.informationLeaveId,
    status: task.status,
    taskId: task.taskId,
    time: task.time,
    userId: task.userId,
    isOvertime: task.isOvertime,
    type: task.type,
  });
};

export const updateDataAddTask = (id, task) => {
  let ref = 'subTask';
  firebase.database().ref(ref).child(id).update({
    content: task.content,
    date: task.date,
    id: task.id,
    projectId: task.projectId,
    informationLeaveId: task.informationLeaveId,
    status: task.status,
    taskId: task.taskId,
    time: task.time,
    userId: task.userId,
    isOvertime: task.isOvertime,
    type: task.type,
  });
};