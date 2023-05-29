import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'

interface Props {
  title: any;
  onPressCustomButton: any;
  extraStyle?: any;
  selected: boolean;
}

export default function CustomButton(props: Props) {
  return (
    <View style={[props?.selected ? styles.selectedButton : styles.unSelectedButton, props?.extraStyle]}>
      <Text style={props?.selected ? styles.selectedText :styles.unSelectedText}>{props?.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    selectedButton: {
      paddingVertical: vh(11.30),
      paddingHorizontal: vw(20),
      backgroundColor: colors.ORANGE,
      borderRadius: vw(20),
      alignSelf: 'flex-start'
    },
    unSelectedButton:{
      paddingVertical: vh(11.30),
      paddingHorizontal: vw(20),
      backgroundColor: colors.GRAY,
      borderRadius: vw(20),
      alignSelf: 'flex-start'
    },
    selectedText: {
      fontSize: vw(10),
      fontWeight: '700',
      lineHeight: vh(12),
      color: colors.WHITE
    },
    unSelectedText: {
      fontSize: vw(10),
      fontWeight: '700',
      lineHeight: vh(12),
      color: colors.BLACK
    }
    
  })