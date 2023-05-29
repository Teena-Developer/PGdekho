import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { vh, vw } from '../utils/dimensions'
import colors from '../utils/colors'
import { localImage } from '../utils/localImages'
import FastImage from 'react-native-fast-image'
import MarqueeView from 'react-native-marquee-view'

export default function CustomCard() {

  const roomPrice = [
    {
      type: 'Single',
      price: '₹ 19,000 '
    },
    {
      type: 'Double',
      price: '₹ 10,000 '
    },
    {
      type: 'Triple',
      price: '₹ 10,000 '
    },

  ]

  const iconTitle = ['2110 Sqft', '3 Beds', '1 Baths', '1 Garages']
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.heart}>
          <FastImage source={localImage.Heart} style={styles.heartIcon} resizeMode='contain'/>
        </View>
        <MarqueeView speed={0.7}>
          <View style={styles.imageView}>
            {
              [1, 1, 1, 1, 1, 1]?.map((item: any) => {
                return (
                  <FastImage source={localImage.KITCHEN} style={styles.img} />
                )
              })
            }
          </View>
        </MarqueeView>
        <View style={{ paddingHorizontal: vw(10) }}>
          <View style={styles.view1}>
            <View style={styles.view1LeftArea}>
              <Text style={styles.view1Title}>Sky Dandelions Apartment</Text>
              <Text style={styles.view1Subtitle}>Sector-23, Gurugram</Text>
            </View>
            <View style={styles.view1RightArea}>
              <View style={styles.Btn}>
                <FastImage source={localImage.SETTINGS} style={styles.logo} resizeMode='contain'/>
              </View>
              <View style={styles.Btn}>
                <FastImage source={localImage.PHONE} style={styles.logo} resizeMode='contain'/>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            {
              roomPrice.map((item: any, index: number) => {
                return (
                  <View style={index == 1 ? styles.view2Items : null}>
                    <Text style={styles.view2ItemTxt}>{item.type}</Text>
                    <Text style={styles.view2ItemsPrice}>{item.price}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={styles.view3}>
            <View style={styles.view3leftPart}>
              {
                iconTitle?.map((item: any) => {
                  return (
                    <View style={{ alignItems: 'center' }}>
                      <FastImage source={localImage.BED} style={styles.icon} resizeMode='contain' />
                      <Text style={styles.iconTxt}>{item}</Text>
                    </View>
                  )
                })
              }
            </View>
            <View style={styles.view3Button}>
              <Text style={styles.view3BtnTxt}>Book</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: vw(5),
    paddingTop: vh(10),
    paddingBottom: vh(10),
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: colors.WHITE
  },
  heartIcon: {
    width: vw(12),
    height: vh(11),

  },
  heart: {
    borderRadius: vw(4),
    paddingVertical: vh(5),
    paddingHorizontal: vw(6),
    backgroundColor: colors.WHITE,
    alignSelf: "flex-start",
    position: 'absolute',
    top: vw(15),
    left: vw(8),
    zIndex: 1
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: vw(8)
  },
  img: {
    marginRight: vw(15),
    width: vw(198),
    height: vh(156.22),
    borderRadius: vw(9)
  },
  view1: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: vw(9)
  },
  view1LeftArea: {
    width: '70%'
  },
  view1Title: {
    fontSize: vw(13),
    fontWeight: '700',
    color: colors.BLACK,
    lineHeight: vw(19)
  },
  view1Subtitle: {
    fontSize: vw(12),
    fontWeight: '400',
    color: colors.DARKGRAY,
    lineHeight: vw(15),
    paddingVertical: vw(10)
  },
  view1RightArea: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '30%',
    marginTop: vw(6)
  },
  Btn: {
    height: vh(35),
    width: vw(35),
    borderRadius: vw(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.GRAY
  },
  logo: {
    width: vw(14),
    height: vh(14)
  },
  view2: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: vw(8),
    backgroundColor: colors.LIGHTSILVER,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: vw(26),
    paddingVertical: vw(7)
  },
  view2Items: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: vw(30),
    borderColor: colors.GRAY
  },
  view2ItemTxt: {
    fontSize: vw(14),
    fontWeight: '400',
    color: '#7D7F88',
    textAlign: 'center'
  },
  view2ItemsPrice: {
    fontSize: vw(12),
    fontWeight: '400',
    color: colors.BLACK,
    textAlign: 'center'
  },
  view3: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: vw(10),
  },
  view3leftPart: {
    flexDirection: 'row',
    paddingVertical: vh(16),
    justifyContent: 'space-between',
    width: '60%'
  },
  icon: {
    width: vw(13),
    height: vh(12)
  },
  iconTxt: {
    fontSize: vw(9),
    fontWeight: '400',
  },
  view3Button: {
    borderWidth: 1,
    paddingHorizontal: vw(26),
    paddingVertical: vw(8.5),
    justifyContent: 'center',
    borderRadius: vw(8),
    borderColor: colors.ORANGE,
    marginTop: vw(9),
    marginVertical: vw(10)
  },
  view3BtnTxt: {
    fontSize: vw(9.19),
    fontWeight: '700',
    color: colors.ORANGE
  }
})