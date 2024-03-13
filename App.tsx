import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import { ScreenOrientationTypes } from "react-native-screens";
import { DeviceMotion } from "expo-sensors";
import { useEffect, useState } from 'react';
import { isTablet } from './src/utilis/Scaling';

export default function App() {
  const [orientation, setOrientation] = useState<ScreenOrientationTypes>("default");

  useEffect(() => {
    DeviceMotion.setUpdateInterval(1000)
    DeviceMotion.addListener((data) => {
      if (data.acceleration?.x && data.acceleration?.y) {

        if (data.acceleration.x > 9 && isTablet) {
          // Shake detected!
          setOrientation('landscape_left')
        }
        else if (data.acceleration.x < -9 && isTablet) {
          setOrientation('landscape_right')
        } 
        else if (data.acceleration.y > 9 &&!isTablet) {
          setOrientation('portrait_up')
        } 
        else if (data.acceleration.y < -9 && isTablet) {
          setOrientation('portrait_down')
        }
      }
    })
      // Clean up listener
      return () => {
        DeviceMotion.removeAllListeners();
      };
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen
        orientation = {orientation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
