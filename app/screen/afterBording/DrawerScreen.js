import React from 'react'
import { ScrollView, Linking, TouchableOpacity, View, Text, Dimensions, Image, Alert, Share, SafeAreaView } from 'react-native'


import axios from '../../api'
import SharedClass from '../../utils/SharedClass'

import { localImages, colors, fonts, translate, staticData } from '../../utils/constant'
import { SideButton } from '../../component/Button';
import { DrawerStyles } from '../style/DrawerStyles';
import { actions } from "../../redux/reducer"
import { connect } from 'react-redux';
import { StackActions, CommonActions } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');


const DrawerScreen = (props) => {
    const sharedClass = new SharedClass();

    const { isGaust, user, navigation } = props
    const goToPage = (page) => {
        // navigation.navigate(page)
        props.navigation.dispatch(StackActions.replace('DrawerStack', {
           screen: 'TabStack', 
                params: {
                         screen: page,
                         
                }
        }));
    }

    const logout = () => {
        Alert.alert(
            'Alert',
            'Do you want to Logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes', onPress: () => {
                        props.setInputData(null)
                    }
                },
            ],
            { cancelable: false },
        );

    }



    return <>
        <SafeAreaView>

            <View style={{ ...DrawerStyles.mainContainer, alignItems: 'center', height: height }}>
                <ScrollView style={{ height: height, flex: 1 }}>

                    <View style={{ ...DrawerStyles.navContainer, marginBottom: 300 }}>


                        <SideButton
                            title="Home"
                            onAction={() => {
                                props.navigation.closeDrawer()
                                goToPage('HomeScreen')
                            }}
                            image={localImages.image_0}
                        />

                        <SideButton
                            title="Profile"
                            onAction={() => {
                                props.navigation.closeDrawer()
                                goToPage('ProfileScreen')
                            }}
                            image={localImages.image_0}
                        />

                        <SideButton
                            title="Settings"
                            onAction={() => {
                                props.navigation.closeDrawer()
                                goToPage('SettingScreen')
                            }}
                            image={localImages.image_0}
                        />

                        {
                            props.loginUserType == "guest"
                                ? <SideButton
                                    title="Login"
                                    onAction={() => logout()}
                                    image={localImages.logout_arrow}
                                />
                                : <SideButton
                                    title="Logout"
                                    onAction={() => logout()}
                                    image={localImages.logout_arrow}
                                />
                        }

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
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

export default connect(mapToProp, mapDispatchToProps)(DrawerScreen)