import React from 'react'
import { View, Text, useColorScheme } from 'react-native'
import { getTextColor } from '../theme/color'

const Landing = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View>
      <Text style={{ color: getTextColor(isDarkMode) }}>Landing</Text>
    </View>
  )
}

export default Landing
