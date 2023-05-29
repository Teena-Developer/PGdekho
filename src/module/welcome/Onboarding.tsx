import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { localImage } from '../../utils/localImages'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { screenWidth, vh, vw } from '../../utils/dimensions'
import colors from '../../utils/colors'
import Swiper from 'react-native-swiper'
import ButtonComponent from '../../components/ButtonComponent'
interface Props {
  navigation: any;
  route: any;
}
export default function Onboarding(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={localImage.LOCATIONICON} />
        <TouchableOpacity style={styles.skipBtn} onPress={() => props?.navigation.navigate('SignUp')}>
          <Text style={styles.skipBtnTxt}>skip</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Find best place to {'\n'}stay in <Text style={{ ...styles.title, color: colors.ORANGE }}>good price</Text></Text>

      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed.</Text>
      <Swiper
        loop
        key={4}
        removeClippedSubviews={false}
        scrollEnabled
        autoplay
        activeDotStyle={{ backgroundColor: 'transparent' }}
        dotStyle={{ backgroundColor: 'transparent' }}
        style={{ position: 'absolute', bottom: vh(-39)}}
      >
        {
          [1, 1, 1, 1]?.map((_: any, index: number) => {
            return (
              <Image key={index} source={localImage.ROOM} style={styles.img} />
            )
          })
        }
      </Swiper>
      <ButtonComponent title={'Next'} onPressCustomButton={undefined} extraStyle={{width:'45%',position:'absolute',bottom:vh(42),alignSelf:'center'}}/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: vw(21),
    paddingVertical: vh(26)
  },
  skipBtn: {
    paddingHorizontal: vw(30),
    paddingVertical: vh(8),
    backgroundColor: colors.GRAY,
    borderRadius: vw(100)
  },
  skipBtnTxt: {
    fontSize: vw(12),
    fontWeight: '400',
    color: colors.DARKPURPLE
  },
  title: {
    fontSize: vw(25),
    fontWeight: '800',
    color: colors.BLACK,
    paddingHorizontal: vw(22),
    lineHeight: vw(40)
  },
  description: {
    fontWeight: '400',
    fontSize: vw(12),
    color: "#292929",
    paddingHorizontal: vw(24),
    lineHeight: vh(20),
    marginTop: vh(20)
  },
  img: {
    width: screenWidth-20,
    alignSelf: "center",
    borderRadius: vw(40),
    
  }

})