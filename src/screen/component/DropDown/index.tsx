import { Animated, StyleProp, Text, TextStyle, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { Octicons } from '@expo/vector-icons';
import DropDownIcon from '@/asset/icons/DropDown.svg';
import { AntDesign } from '@expo/vector-icons';

interface DropDownProps {
  data: any[];
  value: string | number;
  onChange: (item: { label: string; value: string }) => void;
  placeholder?: string;
  style?: any;
  iconColor?: string | undefined;
  selectedTextStyle?: StyleProp<TextStyle>;
  textItemStyle?: any;
  dropdownPosition?: 'auto' | 'bottom' | 'top' | undefined;
  placeholderStyle?: StyleProp<TextStyle>;
  disable?: boolean | undefined;
  testID?: string | undefined;
  customRightIcon?: () => JSX.Element;
}

const DropDownComponent = (props: DropDownProps) => {
    const {
      data,
      value,
      onChange,
      placeholder,
      style,
      iconColor,
      selectedTextStyle,
      textItemStyle,
      dropdownPosition,
      placeholderStyle,
      disable,
      testID,
      customRightIcon,
    } = props

    // const [value ,setValue] = useState('')
    const [focus, setFocus] = useState(false);

    const animationController = useRef(new Animated.Value(0)).current
    const arrowTransform = animationController.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
      extrapolate: 'clamp',
    })

    const rightIcon = () => {
      return (
        <Animated.View 
          style = {{
            transform: [{ rotate: arrowTransform }],
            paddingRight: 5,
            
          }}
        >
          {customRightIcon?. () ?? 
            <AntDesign 
              name="caretdown" 
              size={20} 
              color="black" 
            /> 
          }
        </Animated.View>
      )
    }

    const toggleAnimate = () => {
      const config = {
        toValue: focus? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }
      Animated.timing(animationController,config).start()
    }

    const renderItem = (item: { label: string; value: string }) => {
      return (
        <View style = {styles.item}>
          <Text style = {[styles.textItem, textItemStyle]}> {item.label} </Text>
          {item.value === value && (
            <Octicons 
              style={styles.icon} 
              color = 'black' 
              name = 'check' 
              size = {16} />
          )}
        </View>
      );
    };

  return (
    <Dropdown
    style={[styles.dropdown, style]}
      placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
      selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
      iconStyle={styles.iconStyle}
      iconColor={iconColor}
      renderRightIcon={rightIcon}
      data={data}
      search={false}
      maxHeight={200}
      onFocus={() => {
        setFocus(true);
        toggleAnimate();
      }}
      onBlur={() => {
        setFocus(false);
        toggleAnimate();
      }}
      labelField='label'
      valueField='value'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      renderItem={renderItem}
      dropdownPosition={dropdownPosition}
      disable={disable}
    />
  )
}

export default DropDownComponent

