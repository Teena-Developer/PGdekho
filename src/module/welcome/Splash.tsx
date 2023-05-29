import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { localImage } from '../../utils/localImages'
import colors from '../../utils/colors'

interface Props {
  navigation: any;
  route: any;
}

export default function Splash(props: Props) {
  setTimeout(() => {
    props?.navigation.navigate('Onboarding')
  }, 3000)
  return (
    <SafeAreaView style={styles.container}>
      <Image source={localImage.LOGO} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.WHITE
  }
})