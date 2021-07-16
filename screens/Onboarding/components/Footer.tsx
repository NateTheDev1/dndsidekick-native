import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_500Medium,
} from "@expo-google-fonts/noto-sans-jp";
import { Button } from "react-native-paper";
import { Link } from "react-router-native";
import { COLOR_CONSTANTS } from "../../../theme/color";

const Footer = ({
  title,
  linkTitle,
  linkURL,
  buttonAction,
}: {
  title: string;
  linkTitle: string;
  linkURL: string;
  buttonAction: () => void;
}) => {
  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_500Medium,
  });

  if (fontsLoaded) {
    return (
      <View>
        <Button onPress={buttonAction} style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </Button>
        <Link to={linkURL}>
          <Text style={styles.linkStyle}>{linkTitle}</Text>
        </Link>
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
  button: {
    backgroundColor: COLOR_CONSTANTS.accent.green,
    padding: 2,
  },
  buttonText: {
    color: "white",
    letterSpacing: 2,
    fontFamily: "NotoSansJP_500Medium",
  },
  linkStyle: {
    color: "black",
    opacity: 0.5,
    alignSelf: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default Footer;
