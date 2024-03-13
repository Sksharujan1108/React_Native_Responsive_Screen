import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import DropDownComponent from '../component/DropDown';
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp, 
    widthPercentageToDP
} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({orientation}: any) => {

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    const defaultSelectedId = data[0].value; // Setting the default selected value

    const [selectedId, setSelectedId] = useState(defaultSelectedId);

    const handleIdChange = (item: any) => {
        setSelectedId(item.value);
    };

    const { width, height } = Dimensions.get('window');
    const isLandscape = width > height;

  return (
    <SafeAreaView 
      style = {
        styles.rootContainer
        }
    >

            <View 
              style =  { isLandscape ? styles.landscapeContainer : styles.portraitContainer  }
            >
              <ScrollView contentContainerStyle = {{ flexGrow: 1 }} >
                <View style={styles.TxtIconContainer}>
                    <Text style={styles.FirstTxt}>Hello World!</Text>
                    <TouchableOpacity>
                        <AntDesign name="closecircle" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={[styles.MainTxtContainer, { paddingRight: wp(2) }]}>
                    <View>
                        <Text style={styles.TxtStyle}>Home Team :</Text>

                        <DropDownComponent
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={data}
                            placeholder=''
                            value={selectedId}
                            onChange={handleIdChange}
                        />

                        <View style={styles.OddsContainer}>
                            <Text 
                              style = {[
                                styles.OddsTxt,
                                {paddingLeft: 3}
                              ]}> 
                              ODDS : 
                            </Text>
                            <View 
                              style={[
                                styles.OddsBoxContainer,
                                
                            ]}>
                                <View>
                                  <Feather 
                                    style={{ alignSelf: 'center' }}
                                    name="check" 
                                    size={30} 
                                    color="black" 
                                  />
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style = {{paddingRight: 8}}>
                        <Text style={styles.TxtStyle}>Visit Team:</Text>

                        <DropDownComponent
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={data}
                            placeholder='Id Type'
                            value={selectedId}
                            onChange={handleIdChange}
                        />

                        <View style={styles.OddsContainer}>
                            <Text 
                              style = {[
                                styles.OddsTxt,
                                {paddingRight: 6}
                              ]}> 
                              ODDS : 
                            </Text>
                            <View style={styles.OddsBoxContainer}>
                                <View></View>
                            </View>
                        </View>

                    </View>

                </View>
              </ScrollView>
            </View>
        </SafeAreaView>
  )
}

export default HomeScreen
