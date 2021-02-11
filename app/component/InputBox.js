import React from 'react'
import { Dimensions, View, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import { colors, localImages, fonts, translate } from '../utils/constant'



const { width } = Dimensions.get('window');
export default (props) => {
    return (
        <View style={{ marginTop: props.marginTop, }}>
            <View style={{ width: props.width, backgroundColor: colors.transparent, marginBottom: 5 }}>

                <Text style={{ color: props.labelColor, fontSize: 18, fontFamily: fonts.regularRoman }}>{props.label}</Text>

            </View>
            <View
                style={{
                    // ...styles.card,
                    width: props.width,

                    flexDirection: 'row',
                    backgroundColor: props.backgroundColor,
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    // borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderWidth: 1,
                    // borderWidth: 1,
                    borderColor: colors.inputBorderColor,
                    borderRadius: 8
                }}
            >

                <TextInput
                    // placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderColor}
                    secureTextEntry={props.secureTextEntry}
                    editable={props.editable}
                    value={props.value}
                    multiline={props.multiline ? props.multiline : false}
                    maxLength={props.maxLength}
                    inputTextColor={props.inputTextColor}
                    onChangeText={(text) => props.onChangeText(text)}
                    keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                    style={{
                        width: props.width - 30,
                        paddingLeft: 10,
                        borderRadius: 8,
                        color: props.inputTextColor,
                        height: props.height,
                        marginLeft: 0,
                        fontSize: 18,
                        fontFamily: fonts.semiBold,
                    }}>
                </TextInput>
                {
                    props.iconName ? <TouchableOpacity onPress={() => props.onIconClick()}>
                        <Image
                            source={localImages[props.iconName]}
                            style={{ height: 20, width: 20, marginRight: 15 }}
                        />
                    </TouchableOpacity> : null
                }
            </View >
        </View>
    )
}



var styles = StyleSheet.create({
    card: {
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        justifyContent: 'center',
        // borderRadius: 8

    },
    button: {

        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLine: {
        color: colors.red,
        fontSize: 17,
        fontFamily: Platform.OS == 'ios' ? fonts.regular : fonts.regular,
        fontStyle: Platform.OS == 'ios' ? 'normal' : null,
        fontWeight: Platform.OS == 'ios' ? 'normal' : null
    },

});