import React from 'react'
import {
  View,
  Text,
  Image,
  useColorScheme,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { COLOR_CONSTANTS } from '../theme/color'

import { Button } from 'react-native-paper'

const Landing = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require('../assets/images/landing-image.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/images/landing-logo.png')}
          style={tailwind('mb-4')}
        />
        <Button
          onPress={() => alert('login')}
          mode="contained"
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Button>
        <Button onPress={() => alert('register')} mode="text">
          <Text style={{ color: 'white', letterSpacing: 2 }}>REGISTER</Text>
        </Button>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_CONSTANTS.background.light,
    marginTop: 50,
    marginBottom: 20,
    width: '70%',
    padding: 5,
  },
  buttonText: {
    color: 'black',
    letterSpacing: 2,
  },
})

export default Landing
