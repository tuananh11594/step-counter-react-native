import { firebase } from '../../config.firebase';
import * as _ from 'lodash';

export const getI = (uid) => {
  let ref = 'userInformation';
  let userDataRef = firebase.database().ref('userInformation');
  let projectRef = firebase.database().ref('project');

  userDataRef.orderByChild('id').equalTo(uid).on('value', (userInfo) => {
    let imageMember = '';

    //collect user information
    userInfo.forEach((child) => {
      imageMember = child.val().image;
      return imageMember;
    });
  });
};
