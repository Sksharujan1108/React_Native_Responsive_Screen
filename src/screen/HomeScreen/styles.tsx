import { StyleSheet } from 'react-native'
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    landscapeContainer: {
        marginTop: hp('5%'),
        width: wp('80%'),
        height: hp('80%'),
        backgroundColor: 'yellow',
    },
    portraitContainer: {
        marginTop: hp('5%'),
        width: wp('130%'),
        height: hp('80%'),
        backgroundColor: 'yellow',
    },
    
    TxtIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: hp('3%'),
    },
    FirstTxt: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: 'black',
    },
    MainTxtContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: hp('2%'),
    },
    TxtStyle: {
        fontWeight: 'bold',
        fontSize: RFValue(16),
        paddingBottom: hp('2%'),
    },
    placeholderStyle: {
        marginLeft: wp('2.3%'),
        marginBottom: hp('1.2%'),
    },
    selectedTextStyle: {
        marginLeft: wp('2.3%'),
        marginBottom: hp('1.2%'),
    },
    OddsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: hp('28%'),
    },
    OddsTxt: {
        fontSize: RFValue(14),
        color: 'black',
        paddingRight: wp('2%'),
    },
    OddsBoxContainer: {
        width: wp('13%'),
        height: hp('4%'),
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})