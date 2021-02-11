import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/constant'
import { CustomStyles } from './../../screen/style/CustomStyles'
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    button: {
        shadowColor: colors.loginshadow,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 6,
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWithoutshadow: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        padding: 4,
        marginTop: 10
    },
    navText: {
        ...CustomStyles.textLine,
        marginTop: 0,
        marginLeft: 20,
        lineHeight: 30,
        fontSize: 16,
        marginRight: 30,
        color: colors.text
    },
    drawerHeader: {
        flexDirection: 'row',
        height: 60,
        width: width,
        alignItems: 'center',
        backgroundColor: colors.ornageButton,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
       
    },


})