import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors';
import { vh, vw } from '../utils/dimensions';
import FastImage from 'react-native-fast-image';
import { localImage } from '../utils/localImages';

interface Props {
  title: any;
  subtitle: any;
  img: any
}
export default function CustomNotificationCard(props: Props) {
  return (
    <View style={styles.notificationContainer}>
      <FastImage source={localImage.USER} resizeMode='contain' style={styles.userImg} />
      <View>
        <View style={styles.timeContainer}>
          <Text style={styles.title}>{props?.title}</Text>
          <Text style={styles.time}>2 min ago</Text>
        </View>

        <Text style={styles.subtitle}>{props?.subtitle}</Text>
        {
          props?.img ?
            <View style={styles.imgNotification}>
              <FastImage source={{ uri: props?.img }} resizeMode='contain' style={styles.NotificationImg} />
              <FastImage source={{ uri: props?.img }} resizeMode='contain' style={styles.NotificationImg} />
              <FastImage source={{ uri: props?.img }} resizeMode='contain' style={styles.NotificationImg} />
              <FastImage source={{ uri: props?.img }} resizeMode='contain' style={styles.NotificationImg} />
            </View> : null
        }

        <View style={styles.horizontalLine}></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  notificationContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  userImg: {
    height: vh(57),
    width: vw(57),
    borderRadius: vw(100),
    marginRight: vw(12)
  },
  timeContainer: {
    width: '72%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: vw(14),
    lineHeight: vw(21),
    color: colors.BLACK,
    paddingBottom: vh(5)
  },
  time: {
    fontWeight: '400',
    fontSize: vw(8),
    lineHeight: vw(10),
    color: colors.DARKGRAY,
  },
  subtitle: {
    width: '80%',
    fontWeight: '400',
    fontSize: vw(10),
    lineHeight: vw(12.6),
    color: colors.DARKGRAY,
    paddingBottom: vh(13)
  },
  horizontalLine: {
    borderBottomWidth: vw(0.4),
    borderBottomColor: colors.GRAY,
    marginBottom: vw(13)

  },
  imgNotification: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  NotificationImg: {
    width: vw(60),
    height: vh(60),
    borderRadius: vw(8)
  }
})