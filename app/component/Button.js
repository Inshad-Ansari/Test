import React from 'react'
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');
import { colors, fonts, localImages, translate } from '../utils/constant'
import ButtonStyles from './style/ButtonStyles'

export default (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onAction()}
            style={{
                ...ButtonStyles.button,
                height: props.height,
                backgroundColor: props.backgroundColor,
                width: props.width,
                borderRadius: props.borderRadius,
                marginTop: props.marginTop,

            }}>
            <Text style={{
                color: props.labelColor,
                fontSize: props.fontSize ? props.fontSize : 19,
                fontFamily: props.fontFamily ? props.fontFamily : fonts.regularRoman,

            }}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export const ButtonWithoutShadow = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled ? props.disabled : false} onPress={() => props.onAction()} style={[ButtonStyles.buttonWithoutshadow, { height: props.height, backgroundColor: props.backgroundColor, width: props.width, borderRadius: props.borderRadius, marginTop: props.marginTop, marginBottom: props.marginBottom ? props.marginBottom : 0, marginLeft: props.marginLeft ? props.marginLeft : 0 }]}>
            <Text style={[{ color: props.labelColor, fontFamily: props.fontFamily, fontSize: props.fontSize, borderBottomWidth: props.borderBottomWidth ? props.borderBottomWidth : 0, borderBottomColor: props.borderBottomColor ? props.borderBottomColor : '#fff', }]}>{props.label}</Text>
        </TouchableOpacity>
    )
}




export const HeaderWithBack = (props) => {
    return (
        <View style={[ ButtonStyles.drawerHeader, { width: width, }]}>
            <TouchableOpacity onPress={() => props.onActionLeft()} style={{ backgroundColor: colors.white, marginLeft: 20, height: 40, width: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={localImages.left_arrow} style={{ height: 20, width: 20 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.onActionMiddle()}
                style={{
                    flexDirection: 'row',
                    width: width - 120,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={props.labelStyle}>{props.label}</Text>
            </TouchableOpacity>
            {
                props.rightIcon
                    ? <View style={{ flexDirection: 'row', position: 'absolute', right: 20 }}>
                        <TouchableOpacity
                            onPress={() => props.onActionRight()}
                            style={{
                                borderBottomRightRadius: 25,
                                borderTopRightRadius: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: colors.white,
                                height: 40,
                                width: 40,
                                borderRadius: 20
                            }}>
                            <Image source={localImages[props.rightIcon]} style={{ height: 20, width: 20 }}></Image>
                            <View style={{
                                borderRadius: 15,
                                position: 'absolute',
                                top: 0,
                                bottom: 0
                            }}>
                                <Text style={{
                                    ...props.showCardStyle,
                                    margin: 1
                                }}>{props.count}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    : null
            }
        </View>
    )
}



export const HeaderHomePage = (props) => {
    return (
        <View style={[ ButtonStyles.drawerHeader, { width: width - 40, }]}>
            <TouchableOpacity onPress={() => props.onActionLeft()} style={{ width: 80, borderBottomRightRadius: 25, borderTopRightRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={localImages.sidebar} style={{ height: 40, width: 40 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.onActionMiddle()}
                style={{
                    flexDirection: 'row',
                    width: width - 180,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
              <Text style={props.labelStyle}>{props.label}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', right: 20, width: 100 }}>
               

            </View>

        </View>
    )
}


export const SideButton = (props) => {
    let { onAction, title, image } = props
    return <>
        <TouchableOpacity style={ButtonStyles.touchableContainer} onPress={() => onAction()}>
            
            <Text style={ButtonStyles.navText}>{title}</Text>
        </TouchableOpacity></>
}


