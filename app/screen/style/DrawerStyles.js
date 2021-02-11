import { Dimensions, StyleSheet, Platform } from 'react-native';
import { colors, fonts, localImages } from '../../utils/constant'
import { CustomStyles } from './CustomStyles';
const { height } = Dimensions.get('window');
export const DrawerStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.authBackGroud,
        height: height
    },
    navContainer: {
        marginTop: 15,
        marginLeft: 20
    },

})