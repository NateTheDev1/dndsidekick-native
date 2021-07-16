import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, NotoSansJP_700Bold } from "@expo-google-fonts/noto-sans-jp";

const Header = ({ title }: { title: string }) => {
  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
  });

  if (fontsLoaded) {
    return (
      <View>
        <Text style={styles.textStyle}>Hello.</Text>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "NotoSansJP_700Bold",
    fontSize: 30,
  },
});

export default Header;
