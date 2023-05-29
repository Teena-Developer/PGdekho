import { StyleSheet, TextInput, View } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import { vh, vw } from '../utils/dimensions';
import colors from '../utils/colors';

interface Props {
    setOTP: Function;
}
export const CustomOtpInput = memo((props: Props) => {
    const [OTP, setOTP] = useState<any>({ p1: null, p2: null, p3: null, p4: null,})
    const p1: any = useRef(null), p2: any = useRef(null), p3: any = useRef(null), p4: any = useRef(null)
    useEffect(() => {
        p1.current.focus()
    }, [])
    useEffect(() => {
        if (OTP.p1 && OTP.p2 && OTP.p3 && OTP.p4 ) {
            let completeOTP = OTP.p1 + OTP.p2 + OTP.p3 + OTP.p4
            props?.setOTP(completeOTP)
        }
    }, [OTP])
    return (
        <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: vh(10) }}>
            <TextInput
                ref={p1}
                onChangeText={(text: any) => {
                    console.log('text-->>',text);
                    
                    setOTP({ ...OTP, p1: text })
                    text?.length ? p2.current.focus() : null
                }}
                value={OTP.p1}
                style={OTP.p1 ? { ...styles.numberInputText, borderColor: colors?.ORANGE, backgroundColor: colors.WHITE } : styles.numberInputText}
                keyboardType='number-pad'
                selectionColor={colors?.ORANGE}
                maxLength={1}
            />
            <TextInput
                ref={p2}
                onChangeText={(text: any) => {
                    setOTP({ ...OTP, p2: text })
                    text?.length ? p3.current.focus() : p1.current.focus()
                }}
                value={OTP.p2}
                style={OTP.p2 ? { ...styles.numberInputText, borderColor: colors?.ORANGE, backgroundColor: colors.WHITE } : styles.numberInputText}
                keyboardType='number-pad'
                selectionColor={colors?.ORANGE}
                maxLength={1}
            />
            <TextInput
                ref={p3}
                onChangeText={(text: any) => {
                    setOTP({ ...OTP, p3: text })
                    text?.length ? p4.current.focus() : p2.current.focus()
                }}
                value={OTP.p3}
                style={OTP.p3 ? { ...styles.numberInputText, borderColor: colors?.ORANGE, backgroundColor: colors.WHITE } : styles.numberInputText}
                keyboardType='number-pad'
                selectionColor={colors?.ORANGE}
                maxLength={1}
            />
            <TextInput
                ref={p4}
                onChangeText={(text: any) => {
                    setOTP({ ...OTP, p4: text })
                    text?.length ? null : p3.current.focus()
                }}
                value={OTP.p4}
                style={OTP.p4 ? { ...styles.numberInputText, borderColor: colors?.ORANGE, backgroundColor: colors.WHITE } : styles.numberInputText}
                keyboardType='number-pad'
                selectionColor={colors?.ORANGE}
                maxLength={1}
            />
        </View>
    )
})
const styles = StyleSheet.create({
    numberInputText: {
        fontSize: vw(24),
        fontWeight: '700',
        borderWidth: vw(1.2),
        borderColor: colors.GRAY,
        textAlign: 'center',
        marginHorizontal: vw(5),
        borderRadius: vw(8.5),
        paddingVertical: vh(18),
        paddingHorizontal: vw(25),
        backgroundColor: colors.WHITE
    },
})