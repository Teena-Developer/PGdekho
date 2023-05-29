import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import { useState } from 'react'
import colors from '../../utils/colors'
import { vh, vw } from '../../utils/dimensions'
import FastImage from 'react-native-fast-image'
import { localImage } from '../../utils/localImages'
import ButtonComponent from '../../components/ButtonComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'


export default function PgDescription() {
    const [count, setCount] = useState<any>()
    console.log('count', count)
    const phoneNumber = '8307676030'
    const callButton = () => {
        Linking.openURL(`tel:${phoneNumber}`)
    }

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
        }
    ]

    const facilities = [
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Air conditioner'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Air conditioner'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Kitchen'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Kitchen'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Free parking'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Free parking'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Free WiFi'
        },
        {
            logo: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-car-icon-png-image_515825.jpg',
            title: 'Free WiFi'
        },
    ]

    const nearestFacilities = [
        {
            title: 'Minimarket',
            distance: '200m',
            icon: ''

        },
        {
            title: 'Hospital',
            distance: '130m',
            icon: ''
        },
        {
            title: 'Public canteen',
            distance: '400m',
            icon: ''
        },
        {
            title: 'Train station',
            distance: '500m',
            icon: ''
        }

    ]
    return (
        <ScrollView style={styles.container}>
            <Swiper
                autoplay
                key={3}
                loop
                showsPagination
                autoplayTimeout={3}
                style={{ height: 269 }}
                dot={<View style={styles.dot}></View>}
                activeDot={<View style={styles.activeDotdot}></View>}
                onIndexChanged={(index) => setCount(index + 1)}
            >
                <FastImage source={localImage.PGIMAGE} style={styles.pgImage} resizeMode='cover' />
                <FastImage source={localImage.PGIMAGE} style={styles.pgImage} resizeMode='cover' />
                <FastImage source={localImage.PGIMAGE} style={styles.pgImage} resizeMode='cover' />
            </Swiper>
            <View style={styles.absoluteBtn}>
                <View style={styles.Btn}>
                    <FastImage source={localImage.BACKBUTTON} style={styles.img} resizeMode='contain' />
                </View>
                <View style={styles.rightPart}>
                    <View style={styles.Btn}>
                        <FastImage source={localImage.SETTINGS} style={styles.img} resizeMode='contain' />
                    </View>
                    <View style={styles.Btn}>
                        <FastImage source={localImage.Heart} style={styles.img} resizeMode='contain' />
                    </View>
                </View>
            </View>
            <View style={styles.sliderCounter}>
                <Text>{count}/11</Text>
            </View>
            <View style={styles.BottomBox}>
                <Text style={styles.title}>Entire Bromo mountain view Cabin in {'\n'}Surabaya</Text>
                <View style={styles.row2}>
                    <View>
                        <View style={styles.items}>
                            <FastImage source={localImage.STAR} style={styles.icon} resizeMode='contain' />
                            <Text style={styles.row2Txt}>4.8 (73 reviews)</Text>
                        </View>
                        <View style={styles.items}>
                            <FastImage source={localImage.COLOREDLOCATION} style={styles.icon} resizeMode='contain' />
                            <Text style={styles.row2Txt}>Sector-18, Gurugram</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.items}>
                            <FastImage source={localImage.COLOREDBED} style={styles.icon} resizeMode='contain' />
                            <Text style={styles.row2Txt}>2 room</Text>
                        </View>
                        <View style={styles.items}>
                            <FastImage source={localImage.SIZEICON} style={styles.icon} resizeMode='contain' />
                            <Text style={styles.row2Txt}>874 m2</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pgPriceontainer}>
                    {
                        roomPrice.map((item: any, index: number) => {
                            return (
                                <View style={index == 1 ? styles.view2Items : null} key={index}>
                                    <Text style={styles.pgTypesTxt}>{item.type}</Text>
                                    <Text style={styles.pgPriceTxt}>{item.price}</Text>
                                </View>
                            )
                        })
                    }
                </View>

                <View style={styles.bottomLine}></View>
                <View style={styles.userContainer}>
                    <View style={styles.userDetails}>
                        <FastImage source={localImage.USER} style={styles.userImg} resizeMode='contain' />
                        <View style={styles.userContent}>
                            <Text style={styles.userName}>Louise Vuitton</Text>
                            <Text style={styles.subTitle}>Property owner</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.phone} onPress={callButton}>
                        <FastImage source={localImage.COLOREDPHONE} style={styles.phoneImg} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={styles.facilities}>
                    <Text style={styles.facilitiesTxt1}>Home facilities</Text>
                    <Text style={styles.facilitiesTxt2}>See all facilities</Text>
                </View>
                <View style={styles.facilitiesContainer}>
                    {facilities?.map((item, index) => {
                        return (
                            <View style={{ ...styles.facilityRow, paddingLeft: index % 2 !== 0 ? vw(30) : undefined }}>
                                <FastImage source={localImage?.CAR} style={styles.facilitiesImg} resizeMode='contain' />
                                <Text style={styles.facilityTxt}>{item?.title}</Text>
                            </View>
                        )
                    })}
                </View>
                <Text style={styles.NearestFacilitiesTxt}>Nearest public facilities</Text>
                <View style={styles.NearestContainer}>
                    {nearestFacilities?.map((item: any, index: number) => {
                        return (
                            <View style={styles.nearestPleceRow} key={index}>
                                <FastImage source={localImage?.COLOREDBED} style={styles.nearestPleceImg} resizeMode='contain' key={index} />
                                <View>
                                    <Text style={styles.nearestPlaceTxt}>{item?.title}</Text>
                                    <Text style={styles.distance}>{item?.distance}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <Text style={styles.aboutLocationTxt}>About location’s neighborhood</Text>
                <Text style={styles.aboutLocationDetails}>This cabin comes with Smart Home System and beautiful viking style. You can see sunrise in the morning with City View from full Glass Window.

                    This unit is surrounded by business district of West Surabaya that offers you the city life as well as wide range of culinary.

                    This apartment equipped with Washing Machine, Electric Stove, Microwave, Refrigerator, Cutlery.</Text>
                <ButtonComponent title={'Book Site Visit'} onPressCustomButton={undefined} extraStyle={{ marginBottom: vh(25) }} />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    pgImage: {
        width: '100%',
        height: vh(269),
        borderTopLeftRadius: vw(30),
        borderTopRightRadius: vw(30)
    },
    absoluteBtn: {
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        paddingHorizontal: 25,
        paddingTop: 50
    },
    img: {
        width: vw(18),
        height: vh(19),
        // color:colors.BLACK
    },
    Btn: {
        height: vh(40),
        width: vw(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(8),
        backgroundColor: colors.WHITE,

    },
    dot: {
        backgroundColor: 'transparent'
    },
    activeDotdot: {
        backgroundColor: 'transparent'
    },
    rightPart: {
        width: '40%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sliderCounter: {
        backgroundColor: colors.WHITE,
        paddingVertical: vh(4),
        paddingHorizontal: vw(17),
        position: "absolute",
        top: vh(228),
        right: vw(16),
        borderRadius: vw(40),
    },
    title: {
        fontSize: vw(16),
        fontWeight: '500',
        lineHeight: vw(22),
        color: colors.BLACK,
        paddingBottom: vw(24),
        paddingTop: vh(18)
    },
    BottomBox: {
        paddingHorizontal: vw(16),
    },
    items: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: vw(10)
    },
    row2: {
        width: '94%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vw(24)
    },
    icon: {
        height: vh(16),
        width: vw(14),

    },
    row2Txt: {
        fontSize: vw(14),
        fontWeight: '400',
        lineHeight: vw(18),
        marginLeft: vw(8)
    },
    pgPriceontainer: {
        borderWidth: 1,
        borderColor: colors.GRAY,
        borderRadius: vw(8),
        backgroundColor: colors.LIGHTSILVER,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: vw(26),
        paddingVertical: vh(9),
        marginHorizontal: vw(4),
        paddingBottom: vw(17)
    },
    view2Items: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingHorizontal: vw(27),
        borderColor: colors.GRAY,
    },
    pgTypesTxt: {
        fontSize: vw(12),
        fontWeight: '400',
        color: '#7D7F88',
        textAlign: 'center',
        lineHeight: vw(15),
        paddingVertical: vw(3)
    },
    pgPriceTxt: {
        fontSize: vw(14),
        fontWeight: '400',
        color: colors.BLACK,
        textAlign: 'center',
        lineHeight: vw(14),
        paddingVertical: vw(3)
    },
    bottomLine: {
        borderWidth: vw(0.6),
        borderColor: colors.GRAY,
        marginVertical: vw(27)
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userDetails: {
        flexDirection: "row",
        alignItems: 'center'
    },
    userImg: {
        height: vh(42),
        width: vw(42),
        borderRadius: vw(100),
    },
    userName: {
        fontSize: vw(14),
        fontWeight: '400',
        color: colors.BLACK,
        lineHeight: vh(14),
        paddingBottom: vh(8)
    },
    subTitle: {
        fontSize: vw(12),
        fontWeight: '400',
        color: colors.DARKGRAY,
        lineHeight: vh(14),
    },
    userContent: {
        paddingLeft: vw(10)
    },
    phoneImg: {
        height: vh(17),
        width: vw(17),
    },
    phone: {
        paddingHorizontal: vw(11.30),
        paddingVertical: vh(10),
        // shadowColor: '#fff',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        elevation: vw(8),
        backgroundColor: colors.WHITE,
        borderRadius: vw(10)
    },
    facilities: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(31)
    },
    facilitiesTxt1: {
        fontSize: vw(18),
        fontWeight: '500',
        color: colors.BLACK,
        lineHeight: vh(18),
    },
    facilitiesTxt2: {
        fontSize: vw(14),
        fontWeight: '600',
        color: colors.ORANGE,
    },
    facilitiesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

    },
    facilitiesImg: {
        height: vh(17),
        width: vw(22),
        marginRight: vw(13)
    },
    facilityRow: {
        flexDirection: "row",
        alignItems: 'center',
        width: vw(171),
        paddingBottom: vh(27)
    },
    facilityTxt: {
        fontSize: vw(14),
        fontWeight: '400',
        color: colors.BLACK,
        lineHeight: vh(14),
    },
    NearestFacilitiesTxt: {
        fontSize: vw(18),
        fontWeight: '500',
        color: colors.BLACK,
        lineHeight: vh(18),
        paddingVertical: vw(24)
    },
    NearestContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    nearestPleceRow: {
        flexDirection: 'row',
        width: vw(140),
        paddingBottom: vw(30)
    },
    nearestPleceImg: {
        height: vh(20),
        width: vw(18),
        marginRight: vw(12)
    },
    nearestPlaceTxt: {
        fontSize: vw(14),
        fontWeight: '500',
        lineHeight: vw(14),
        paddingBottom: vh(13),
        color:colors.BLACK
    },
    distance: {
        fontSize: vw(14),
        fontWeight: '400',
        lineHeight: vw(14),
        color: colors.DARKGRAY
    },
    aboutLocationTxt: {
        fontSize: vw(18),
        fontWeight: '500',
        lineHeight: vw(18),
        color: colors.BLACK,
        paddingBottom: vw(20)
    },
    aboutLocationDetails: {
        fontSize: vw(14),
        fontWeight: '400',
        lineHeight: vw(21),
        color: colors.DARKGRAY,
        paddingBottom: vw(20)
    }

})