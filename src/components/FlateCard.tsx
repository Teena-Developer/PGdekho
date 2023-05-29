import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { vh, vw } from '../utils/dimensions'
import colors from '../utils/colors'
import { localImage } from '../utils/localImages'
import FastImage from 'react-native-fast-image'

export default function FlateCard() {

    let url='https://cdnb.artstation.com/p/assets/covers/images/051/898/847/large/luke-wells-luke-wells-luke-wells-landscape-midjourney.jpg?1658432056'
    return (
        <ImageBackground source={{uri:url}} style={styles.img} resizeMode="contain" borderRadius={vw(15)}>
            <View style={styles.heading}>
                <Text style={styles.headingTxt}>7k per month</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>Kos Hibrida 2</Text>
                <View style={styles.subTitle}>
                    <Text style={styles.subTitleTxt}>4.5</Text>
                    <FastImage source={localImage.STAR} resizeMode='contain' style={styles.startImg} />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: vh(186),
        marginVertical:20
    },
    heading: {
        backgroundColor: colors.ORANGE,
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingVertical: vw(6),
        paddingHorizontal: vw(10),
        borderBottomLeftRadius: vw(10),
        borderTopRightRadius: vw(10),
        
    },
    headingTxt: {
        color: colors.WHITE,
        fontSize: vw(8),
        fontWeight: '500',
        lineHeight: vh(11)
    },
    startImg: {
        height: vh(12),
        width: vw(12)
    },
    details: {
        position: 'absolute',
        bottom: vh(39),
        left: vw(22)
    },
    title: {
        fontSize: vw(16),
        fontWeight: '700',
        color: colors.WHITE,
        marginBottom: vw(4)
    },
    subTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subTitleTxt: {
        fontSize: vw(12),
        fontWeight: '700',
        color: colors.WHITE,
        paddingRight: vw(4)
    }

})