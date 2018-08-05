import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import NavigationBar from '../../../common/component/navbar.component';
import Colors from '../../../common/utils/colors'
import { TouchableCustom } from '../../../common/component/touchable-custom.component';
import { TextScreen } from '../../../common/component/text-screen.component';
import { ViewLine } from '../../../common/component/view-line.component'

export default class MoreComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar titleScreen="" />
        <ScrollView style={styles.scroll_view}>
          <TextScreen content="Khác"/>
          <ViewLine/>
          {/* <Text>Bạn phải sao lưu số điện thoại trước khi thực hiện bất kì thay đổi nào. Hoặc hệ thống sẽ làm việc đó trước khi bạn thay đổi</Text> */}
          <View style={styles.view_group_button}>
          <ViewLine/>
            <TouchableCustom
              sourceImage={require('../../../assets/icon/conversation.png')}
              content="Câu hỏi"
              showIconRight={false}
            />
            <TouchableCustom
              sourceImage={require('../../../assets/icon/reaction.png')}
              content="Gửi phản hồi"
              showIconRight={false}
            />
            <TouchableCustom
              sourceImage={require('../../../assets/icon/star.png')}
              content="Đánh giá ứng dụng"
              showIconRight={false}
            />
            <TouchableCustom
              sourceImage={require('../../../assets/icon/settings-work-tool.png')}
              content="Cài đặt"
              showIconRight={false}
              showLine={false}
            />
            <ViewLine/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#262B30'
  },
  scroll_view: {
  },
  view_group_button: {
    backgroundColor: "white", marginTop: 35
  },
}