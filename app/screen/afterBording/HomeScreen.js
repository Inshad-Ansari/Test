import React, { Component, useState, useEffect } from 'react'
import { Text, Image, FlatList, StyleSheet, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView, Platform, Dimensions } from 'react-native'
// import HTML from 'react-native-render-html';


import axios from '../../api'
import { HeaderWithBack, HeaderHomePage } from '../../component/Button'
import PromoImages, { BannerImage, } from '../../component/PromoImages'
import { CustomStyles } from '../style/CustomStyles'
import { colors, fonts, translate, staticData, localImages } from '../../utils/constant'

import SharedClass from '../../utils/SharedClass'

import { actions } from "../../redux/reducer"
import { connect } from 'react-redux';


const bannerImages = [
    {
        image: 'banner'
    }
]

const promoImages = [
    {
        image: 'promo'
    },
    {
        image: 'promo'
    },
    {
        image: 'promo'
    },
    {
        image: 'promo'
    }
]
const { height, width } = Dimensions.get('window')
const routes = [
    { key: 'categories', title: 'Categories' },
    { key: 'zainDeals', title: 'Special Offers' },
]
const HomeScreen = (props) => {
    const { navigation } = props
    const sharedClass = new SharedClass();

   

   


   
    useEffect(() => {
       
    }, [])

    return <>
        <View style={CustomStyles.containerbording}>
            <SafeAreaView style={CustomStyles.mainContainerBording}>
                <StatusBar barStyle="dark-content" backgroundColor={colors.statusBarColor} />
                <HeaderHomePage
                    onActionRight={(item) => {
                    }}
                    onActionMiddle={() => { }}
                    onActionLeft={() => { props.navigation.openDrawer() }}
                    label="Home"
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
                >

                    <View style={{ height: 170, marginTop: -20 }}>
                        <BannerImage
                            onAction={() => { }}
                            width={width}
                            height={(width) * .497}
                            data={bannerImages}
                        ></BannerImage>
                    </View>
                    <View style={{ height: 200, marginTop: -20 }}>
                        <PromoImages
                            onAction={() => { }}
                            data={promoImages}
                        ></PromoImages>
                    </View>
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
        inputData:state.localStates.inputData,
       
    }
}

export default connect(mapToProp, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        //  paddingTop: Constants.statusBarHeight,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        marginBottom: 15
    },
});