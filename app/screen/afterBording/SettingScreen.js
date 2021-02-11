import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StatusBar, ScrollView, Platform, Dimensions } from 'react-native'

import { HeaderWithBack, ButtonWithoutShadow } from '../../component/Button'
import { CustomStyles } from '../style/CustomStyles'
import { colors, fonts } from '../../utils/constant'
import SharedClass from '../../utils/SharedClass'
import InputBox, { ErrorMsg } from '../../component/InputBox'
const { height, width } = Dimensions.get('window')
import { actions } from "../../redux/reducer"
import { connect } from 'react-redux';

const SettingScreen = (props) => {
    const { navigation } = props
    const sharedClass = new SharedClass();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [scrollEnabled, setScrollEnabled] = useState(true)

    useEffect(() => {

        if(props.inputData){
            setFirstName(props.inputData.firstName)
            setLastName(props.inputData.lastName)
        }
        // getOffer()
    }, [])



    const onsubmit = () => {



        if (!firstName) {
            sharedClass.ShowSnakBar({
                message: 'Please enter first name',
                type: 'danger',
                delay: 0
            })
            return
        }

        if (!lastName) {
            sharedClass.ShowSnakBar({
                message: 'Please enter last name',
                type: 'danger',
                delay: 0
            })
            return
        }
        props.setInputData({

            firstName: firstName,
            lastName: lastName

        })
    }
    const onContentSizeChange = (contentWidth, contentHeight) => {
        setScrollEnabled(Platform.OS == 'ios' ? true : contentHeight > height)
    };
    return <>
        <View style={CustomStyles.container}>
            <SafeAreaView style={CustomStyles.mainContainer}>

                <StatusBar barStyle="dark-content" backgroundColor={colors.statusBarColor} />
                <HeaderWithBack
                    backgroundColor={1}
                    onActionRight={() => { }}
                    onActionMiddle={() => { }}
                    onActionLeft={() => { props.navigation.goBack() }}
                    label="Settings"
                    labelStyle={{
                        color: colors.headingColor,
                        fontFamily: fonts.bold,
                        fontSize: 22
                    }}
                // rightIcon="search"
                />

                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={CustomStyles.scrollview}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={onContentSizeChange}
                >

                    {props.inputData ? <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ color: colors.red, fontFamily: fonts.semiBold, fontSize: 18, marginLeft: 10 }}>First Name: {props.inputData.firstName}</Text>
                        <Text style={{ color: colors.red, fontFamily: fonts.semiBold, fontSize: 18, marginLeft: 10 }}>Last Name: {props.inputData.lastName}</Text>
                    </View> : null}
                    <View style={{ marginHorizontal: 20 }}>
                        <InputBox
                            height={60}
                            backgroundColor={colors.white}
                            width={(width - 40)}
                            borderRadius={30}
                            marginTop={30}
                            // placeholder="Enter your Username"
                            label="Firstname *"
                            labelColor={colors.labelColor}
                            placeholderColor={colors.placeHolderColor}
                            inputTextColor={colors.text}
                            secureTextEntry={false}
                            editable={true}
                            value={firstName}
                            maxLength={50}

                            onIconClick={() => { }}
                            onChangeText={(text) => {
                                setFirstName(text)
                            }}
                        />
                    </View>

                    <View style={{ marginHorizontal: 20 }}>
                        <InputBox
                            height={60}
                            backgroundColor={colors.white}
                            width={(width - 40)}
                            borderRadius={30}
                            marginTop={30}
                            // placeholder="Enter your Username"
                            label="Lastname *"
                            labelColor={colors.labelColor}
                            placeholderColor={colors.placeHolderColor}
                            inputTextColor={colors.text}
                            secureTextEntry={false}
                            editable={true}
                            value={lastName}
                            maxLength={50}

                            onIconClick={() => { }}
                            onChangeText={(text) => {
                                setLastName(text)
                            }}
                        />
                    </View>

                    <View style={{ width: width, alignItems: 'center', marginTop: 30 }}>
                        <ButtonWithoutShadow
                            height={50}
                            backgroundColor={colors.lightGreen}
                            width={width - 40}
                            borderRadius={5}
                            fontFamily={fonts.whitneysemibold}
                            fontSize={18}
                            labelColor={colors.greenColor}
                            label="Submit"
                            onAction={() => {
                                onsubmit()
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    </>
}


const mapDispatchToProps = dispatch => {
    return {
        setInputData: inputData => {
            dispatch(actions.setInputData(inputData));
        },

    };
};
const mapToProp = state => {
    console.log(state)
    return {
        inputData: state.localStates.inputData,

    }
}

export default connect(mapToProp, mapDispatchToProps)(SettingScreen)
