import { Dimensions, StyleSheet, Platform } from 'react-native';
import { colors, fonts, localImages } from '../../utils/constant'

const { height, width } = Dimensions.get('window');

export const CustomStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    containerbording: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.authBackGroud,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.authBackGroud,
    },
    mainContainerBording: {
        flex: 1,
        backgroundColor: colors.authBackGroud,
    },
    scrollview: {
        flexGrow: 1,

    },
    mainContent: {
        flexGrow: 1,
        padding: 10,
    },
    sliderView: {
        width: width,
        height: height,
        // backgroundColor: 'green'
    }


});

export const IntroStyles = StyleSheet.create({

    sliderView: {
        width: width,
        height: height,

        // backgroundColor: 'green'
    },
    sliderImageView: {
        height: (height / 3) * 2.1,
        backgroundColor: colors.transparent
    },
    sliderCardView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: -50,
        borderTopRightRadius: 50,
        height: (height / 3) * .8,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: (height / 3) * 2.1,
        width: width
    },

    sliderImageView1: {
        height: (height / 3) * 1.8,

        alignItems: 'center',
        backgroundColor: colors.transparent
    },
    sliderCardView1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: -50,
        borderTopRightRadius: 50,
        height: (height / 3) * 1.55,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image1: {
        height: (width - 100) * 1.46,
        width: width - 100,
        backgroundColor: colors.white
    },


    heading: {
        fontFamily: fonts.extraBold,

        color: colors.headingColor,
        fontSize: 30,
        textAlign: 'center'
    },
    subtile: {
        fontFamily: fonts.regularRoman,
        marginTop: 20,
        color: colors.grayColor,
        fontSize: 18,
        textAlign: 'center'
    },
    logo: {

        width: width - 60,
        height: (width - 60) * .44
    }


});