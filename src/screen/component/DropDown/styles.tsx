import { StyleSheet } from 'react-native'
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp, 
    widthPercentageToDP
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


export const styles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        borderColor: 'red',
        // marginLeft: wp(0.8),
        // marginRight: wp(0.8),
        width: wp(widthPercentageToDP('7%')),
        height: hp(widthPercentageToDP('1.5%')),
        paddingLeft: wp(1),
        // alignSelf: 'center'
      },
      icon: {
        paddingRight: hp(1),
      },
      item: {
        padding: hp(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textItem: {
        flex: 1,
        fontSize: RFValue(12),
      },
      placeholderStyle: {
        fontSize: RFValue(12),
        color: 'black',
        marginLeft: wp(1.9),
        marginBottom: hp(1),
      },
      selectedTextStyle: {
        color: 'blue',
        fontSize: RFValue(12),
        marginLeft: wp(1.9),
        marginBottom: hp(1),
      },
      iconStyle: {},
    
})