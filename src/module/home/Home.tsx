import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import { vh, vw } from '../../utils/dimensions'
import CustomCard from '../../components/CustomCard'
import CustomPropertyCard from '../../components/CustomPropertyCard'
import CustomReviewCard from '../../components/CustomReviewCard'
import CustomNotificationCard from '../../components/CustomNotificationCard'
import CustomSearchBar from '../../components/CustomSearchBar'
import CustomLocationDropDown from '../../components/CustomLocationDropDown'
import RecommendedProperties from '../../components/RecommendedProperties'
import FlateCard from '../../components/FlateCard'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomPropertyCard/> */}
      {/* <CustomNotificationCard/> */}
      <CustomSearchBar/>
      {/* <CustomReviewCard/> */}
      
      <RecommendedProperties/>
      <FlateCard/>
      <CustomLocationDropDown location notification/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: vw(20),
    paddingVertical: vw(15)
  },

})