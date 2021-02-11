import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StatusBar, ScrollView, Platform, Dimensions } from 'react-native'
import { HeaderHomePage } from '../../component/Button'
import { CustomStyles } from '../style/CustomStyles'
import { colors, fonts } from '../../utils/constant'

import SharedClass from '../../utils/SharedClass'
import { actions } from "../../redux/reducer"
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window')

const ProfileScreen = (props) => {
    const { navigation } = props
    const sharedClass = new SharedClass();
    const [scrollEnabled, setScrollEnabled] = useState(true)

    useEffect(() => {

    }, [])

    const onContentSizeChange = (contentWidth, contentHeight) => {
        setScrollEnabled(Platform.OS == 'ios' ? true : contentHeight > height)
    };
    return <>
        <View style={CustomStyles.container}>
            <SafeAreaView style={CustomStyles.mainContainer}>
                <StatusBar barStyle="dark-content" backgroundColor={colors.statusBarColor} />
                <HeaderHomePage
                    onActionRight={(item) => {
                    }}
                    onActionMiddle={() => { }}
                    onActionLeft={() => { props.navigation.openDrawer() }}
                    label="Profile"
                    backgroundColor={1}
                    labelStyle={{
                        color: colors.headingColor,
                        fontFamily: fonts.bold,
                        fontSize: 22
                    }}
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

                </ScrollView>
            </SafeAreaView>
        </View>
    </>
}


const mapDispatchToProps = dispatch => {
    return {
        setInputData: token => {
            dispatch(actions.setInputData(token));
        },

    };
};
const mapToProp = state => {
    console.log(state)
    return {
        inputData: state.localStates.inputData,

    }
}

export default connect(mapToProp, mapDispatchToProps)(ProfileScreen)
