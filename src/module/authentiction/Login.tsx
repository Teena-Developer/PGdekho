import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../utils/colors'
import Header from '../../components/Header'
import ButtonComponent from '../../components/ButtonComponent';
import { vh, vw } from '../../utils/dimensions';
import { TextInput } from 'react-native-gesture-handler';
import { localImage } from '../../utils/localImages';
import DeviceNumber from 'react-native-device-number';
import DeviceInfo from 'react-native-device-info';

interface Props {
  navigation: any;
  route: any;

}
export default function Login(props: Props) {

  useEffect(() => {
    DeviceInfo?.getPhoneNumber()?.then(
      (res: any) => {
        console.log('res of number is-->>', res);
      },
      (error: any) => {
        console.log('error in num-->>', error);
      })
  }, [])

  const LogIn = () => {
    props?.navigation.navigate('Otp')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Welcome Back!'}
        description={`Are you ready to uproot and start over in a new ${'\n'}area? Placoo will help you on your journey!`}
        navigation={props?.navigation} />

      <TextInput
        style={styles.inputTxt}
        placeholder='Enter your phone number'
      />
      <ButtonComponent title='Log in' extraStyle={{  }} onPressCustomButton={LogIn} />
      <View style={styles.horizontalLineView}>
        <View style={styles.line} />
        <View>
          <Text style={{ textAlign: 'center', paddingHorizontal: vw(10), color: colors.DARKGRAY }}>Or Login with</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.btn}>
          <Image source={localImage.FACEBOOK} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Image source={localImage.GOOGLE} /></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Image source={localImage.APPLE} /></TouchableOpacity>
      </View>
      {/* <View style={styles.bottomView}> */}
      <Text style={styles.BottomTxt}>Don’t have an account?<Text style={styles.bottombtn}>Register Now</Text></Text>

      {/* </View> */}
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  inputTxt: {
    fontSize: vw(15),
    fontWeight: '500',
    paddingVertical: vh(18),
    paddingLeft: vw(18),
    borderWidth: 1,
    marginHorizontal: vw(22),
    borderColor: colors.SLATEGRAY,
    marginBottom: vh(30),
    borderRadius: vw(10),
    color: colors.SLATEGRAY
  },
  horizontalLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: vw(22),
    marginTop: vh(62),
    marginBottom: vh(22)
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.GRAY
  },
  iconsContainer: {
    flexDirection: "row",
    marginHorizontal: vw(22),
    justifyContent: 'space-between',
    marginBottom: vh(181)
  },
  btn: {
    paddingHorizontal: vw(40),
    paddingVertical: vh(16),
    borderWidth: 1,
    borderRadius: vw(8),
    borderColor: colors.GRAY

  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  BottomTxt: {
    fontSize: vw(15),
    fontWeight: '700',
    color: colors.BLACK,
    textAlign: "center",

  },
  bottombtn: {
    fontSize: vw(15),
    fontWeight: '700',
    color: colors.ORANGE,
    textAlign: "center",

  }
})