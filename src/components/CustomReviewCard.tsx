import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'
import FastImage from 'react-native-fast-image'
import { localImage } from '../utils/localImages'

export default function CustomReviewCard() {
    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
                <FastImage source={localImage.USER} style={styles.userImg} resizeMode='contain' />
                <View>
                    <Text style={styles.title}>Sans Jose</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FastImage source={localImage.STAR} style={styles.starImg} resizeMode='contain' />
                        <FastImage source={localImage.STAR} style={styles.starImg} resizeMode='contain' />
                        <FastImage source={localImage.STAR} style={styles.starImg} resizeMode='contain' />
                        <FastImage source={localImage.STAR} style={styles.starImg} resizeMode='contain' />
                    </View>

                </View>
            </View>
            <Text style={styles.reviewTxt}>My wife and I had a dream of downsizing from our house in Cape
                Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled
                team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new
                place we're excited to call home...  <Text style={{ ...styles.reviewTxt, color: colors.ORANGE }} onPress={undefined}>Read more</Text></Text>
        </View >
    )
}
const styles = StyleSheet.create({
    reviewCard: {
        flex: 1,
    },
    reviewHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center'
    },
    userImg: {
        width: vw(42),
        height: vh(42),
        borderRadius: vw(100),
        marginRight: vw(10),
    },
    starImg: {
        width: vw(14),
        height: vh(14),
        marginRight: vw(8)
    },
    title: {
        fontSize: vw(16),
        fontWeight: '400',
        color: colors.BLACK,
        paddingBottom:vw(10)
    },
    reviewTxt: {
        fontWeight: '600',
        fontSize: vw(12),
        lineHeight: vw(18),
        color: colors.BLACKGRAY,
        paddingVertical: vh(18)
    }

})