import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useState } from 'react'
import Header from '../../components/Header'
import colors from '../../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { vh, vw } from '../../utils/dimensions'
import { CustomOtpInput } from '../../components/CustomOtpInput'
import ButtonComponent from '../../components/ButtonComponent'
import FlateCard from '../../components/FlateCard'

interface Props {
    navigation: any;
    route: any
}

export default function Otp(props: Props) {
    const [otp, setOtp] = useState<string>('')
    const varifyOtp = () => {
      props?.navigation?.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'OTP Verification'} description={`Enter the verification code we just sent on your email ${'\n'}address.`} navigation={props?.navigation} />
            <CustomOtpInput setOTP={(otpValue: any) => { console.log("otp", otpValue) }} />

            <ButtonComponent title={'Verify'} onPressCustomButton={varifyOtp} extraStyle={{ marginVertical: vh(40), width: '90%', marginLeft: vw(20) }}/>
            <Text style={styles.resendOtpTxt}>Didn’t received code? <Text style={styles.resendOtBtn}>Resend</Text></Text>
            <FlateCard/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,

    },
    resendOtpView: {
        flexDirection: 'row',
        color: colors.ORANGE,
        justifyContent: 'center'
    },
    resendOtpTxt: {
        fontSize: vw(15),
        fontWeight: "500",
        color: colors.BLACK,
        textAlign: "center"
    },
    resendOtBtn: {
        color: colors.ORANGE,
        fontSize: vw(15),
        fontWeight: "500",

    }
})