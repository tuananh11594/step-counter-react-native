import { firebase } from '../../config.firebase';
import * as _ from 'lodash';
import store from '../../../store/store-timesheet';
import { setCurrentUserDataCreator } from '../../../actions/setting/setting.action';

export const getUserData = () => {
  let ref = 'userInformation';
  let userDataRef = firebase.database().ref('userInformation');
  let projectRef = firebase.database().ref('project');
  let userId = firebase.auth().currentUser.uid;

  userDataRef.orderByChild('id').equalTo(userId).on('value', (userInfo) => {
    let userData = {
      userInfo: {},
      projectData: {},
      memberData: [],
      managerInformation: [],
    };

    //collect user information
    userInfo.forEach((child) => {
      userData.userInfo = child.val();
    });

    projectRef.orderByChild('id').equalTo(userData.userInfo.projectId).once('value')
      .then((projectData) => {

        //collect user current project 
        projectData.forEach((child) => {
          userData.projectData = child.val();
        });
      })
      .then(() => {
        let membersDataPromises = [];
        _.each(userData.userInfo.memberId, (userItemId) => {
          membersDataPromises.push(userDataRef.orderByChild('id').equalTo(userItemId).once('value'));
        });
        return Promise.all(membersDataPromises);
      })
      .then((memberData) => {

        //collect member data that user manage
        _.each(memberData, (memberItem) => {
          _.each(memberItem.val(), (member) => {

            if (!_.isUndefined(member)) {
              userData.memberData.push(member);
            }
          });
        });

        _.each(userData.userInfo.manager, (managerId) => {
          userDataRef.orderByChild('id').equalTo(managerId).on('value', (managerInfo) => {
            managerInfo.forEach((child) => {
              userData.managerInformation.push(child.val());
            });
          });
        });
        let userDataSettingState = {
          userName: userData.userInfo.name,
          image: userData.userInfo.image,
          managerInformation: userData.managerInformation,
          role: userData.userInfo.role,
          members: userData.memberData,
          currentProject: userData.projectData.name,
        };
        store.dispatch(setCurrentUserDataCreator(userDataSettingState));
      });
  });
};
