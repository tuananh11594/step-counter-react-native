import { firebase } from './config.firebase';

export const getTasks = (callback) => {
  let ref = 'Task';
  let starCountRef = firebase.database().ref(ref);

  starCountRef.on('value', (snapshot) => {
    var tasks = [];
    snapshot.forEach((child, index) => {
      tasks.push({
        category: child.val().category,
        tasks: child.val().task,
        key: index,
      });
    });
    callback(tasks);
  });
};

export const getProjects = (callback) => {
  let ref = 'project';
  let starCountRef = firebase.database().ref(ref);

  starCountRef.on('value', (snapshot) => {
    var projects = [];
    snapshot.forEach((child, index) => {
      projects.push({
        endDate: child.val().endDate,
        id: child.val().id,
        name: child.val().name,
        programId: child.val().programId,
        startDate: child.val().startDate,
        key: child.val().id,
      });
    });
    callback(projects);
  });
};

export const getPrograms = (callback) => {
  let ref = 'program';
  let starCountRef = firebase.database().ref(ref);

  starCountRef.on('value', (snapshot) => {
    var programs = [];
    snapshot.forEach((child) => {
      programs.push({
        id: child.val().id,
        name: child.val().name,
      });
    });
    callback(programs);
  });
};

export const getTypeOfLeave = (callback) => {
  let ref = 'leave';
  let starCountRef = firebase.database().ref(ref).child('information');

  starCountRef.on('value', (snapshot) => {
    var typeOfLeaves = [];
    snapshot.forEach((child) => {
      typeOfLeaves.push({
        id: child.val().id,
        typeOfLeave: child.val().typeOfLeave,
        nameIcon: child.val().nameIcon,
        remaining: child.val().remaining,
        availabelForBooking: child.val().availabelForBooking,        
      });
    });
    callback(typeOfLeaves);
  });
};
