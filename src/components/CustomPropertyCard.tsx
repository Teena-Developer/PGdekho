import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { vh, vw } from '../utils/dimensions'
import colors from '../utils/colors'
import FastImage from 'react-native-fast-image'
import { localImage } from '../utils/localImages'

export default function CustomPropertyCard() {
    const iconTitle = ['2110 Sqft', '3 Beds', '1 Baths', '1 Garages']
    return (
        <View style={styles.propertyCard}>
            <FastImage source={localImage.BUILDING} style={styles.img} resizeMode='stretch' />
            <View style={styles.Container}>
                <View style={styles.details}>
                    <View style={styles.leftPart}>
                        <Text style={styles.leftTxt1}>Eaton Garth PG</Text>
                        <View style={styles.address}>
                            <FastImage source={localImage.LOCATION} style={styles.locationIcon} />
                            <Text style={styles.leftTxt2}>Sector-22 A, Gur...</Text>
                        </View>

                    </View>
                    <View style={styles.rightPart}>
                        <Text style={styles.rightTxt1}>Starting at</Text>
                        <Text style={styles.rightTxt2}>₹  20,000 / Month </Text>
                    </View>

                </View>
                <View style={styles.iconContainer}>
                    {
                        iconTitle?.map((item: any) => {
                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <FastImage source={localImage.BED} style={styles.iconImg} resizeMode='contain' />
                                    <Text style={styles.iconTxt}>{item}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonsLeftPart}>
                        <View style={styles.Btn}>
                            <FastImage source={localImage.SETTINGS} style={styles.logo} resizeMode='contain' />
                        </View>
                        <View style={styles.Btn}>
                            <FastImage source={localImage.PHONE} style={styles.logo} resizeMode='contain' />
                        </View>
                    </View>
                    <View style={styles.bookBtn}>
                        <Text style={styles.BtnTxt}>Book</Text>
                    </View>
                </View>
            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    propertyCard: {
        width: '50%',
        borderRadius: vw(5),
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 10,
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: colors.WHITE
    },
    img: {
        width: '100%',
        height: vh(102),

    },
    Container: {
        padding: vw(9)
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    leftPart: {
        width: '50%'
    },
    locationIcon: {
        width: vw(3.30),
        height: vh(5.29),

    },
    leftTxt1: {
        fontSize: vw(9.19),
        fontWeight: '700',
        lineHeight: vw(11.58),
        color: colors.BLACK
    },
    leftTxt2: {
        fontSize: vw(7.29),
        fontWeight: '600',
        lineHeight: vw(19.41),
        color: colors.BLACK,
        marginLeft: vw(3)
    },
    address: {
        flexDirection: 'row',
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: "center",
    },
    rightPart: {
        marginTop: vw(5)
    },
    rightTxt1: {
        fontSize: vw(5.41),
        lineHeight: vw(8.11),
        color: colors.ORANGE
    },
    rightTxt2: {
        fontSize: vw(7.23),
        fontWeight: '400',
        lineHeight: vw(11),
        color: colors.ORANGE
    },
    iconContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconImg: {
        width: vw(9),
        height: vh(7)
    },
    iconTxt: {
        fontSize: vw(7),
        fontWeight: '300'
    },
    buttonsContainer: {
        width: '100%',
        marginTop: vw(6.29),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: vw(3)
    },
    logo: {
        width: vw(8),
        height: vh(10)
    },
    Btn: {
        width: vw(19.67),
        height: vh(19.67),
        borderRadius: vw(100),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.GRAY
    },
    buttonsLeftPart: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bookBtn: {
        borderWidth: vw(1),
        paddingVertical: vh(4),
        paddingHorizontal: vw(18.30),
        borderColor: colors.ORANGE,
        borderRadius: vw(6),
    },
    BtnTxt:{
        fontSize:vw(9),
        fontWeight:'700',
        color:colors.ORANGE
    }

})