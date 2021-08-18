import React from "react";
import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BarContainer from "../../components/BarContainer";
import { COLOR_CONSTANTS } from "../../theme/color";
import { UserSelectors } from "../../redux/User/selectors";
import { useState, useEffect } from "react";
//@ts-ignore
import Hr from "react-native-hr-plus";
import { Button, HelperText, ProgressBar, TextInput } from "react-native-paper";
import AvatarSelector from "./components/AvatarSelector";

const Race = () => {
  const theme = UserSelectors.useSelectTheme();

  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_400Regular,
  });

  const [styles, setStyles] = useState<any>(
    StyleSheet.create({
      background: {
        paddingTop: 30,
        paddingHorizontal: 15,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.background.dark
            : COLOR_CONSTANTS.background.light,
      },
      header: {
        color: theme === "dark" ? "white" : "black",
        fontFamily: "NotoSansJP_700Bold",
        letterSpacing: 5,
        fontSize: 20,
        textTransform: "uppercase",
      },

      text: {
        marginVertical: 25,
        color: theme === "dark" ? "white" : "black",
        fontSize: 15,
        fontFamily: "NotoSansJP_400Regular",
      },
      hr: {
        color: theme === "dark" ? "white" : "black",
      },
      button: {
        backgroundColor: COLOR_CONSTANTS.accent.green,
        padding: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 30,
      },
      buttonText: {
        color: "white",
        fontFamily: "NotoSansJP_500Medium",
        textTransform: "none",
      },
      arrow: {
        backgroundColor: theme === "dark" ? "white" : "black",
      },
      newCard: {
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.paper.dark
            : COLOR_CONSTANTS.paper.light,
        padding: 10,
      },
      characterImage: {
        color: theme === "dark" ? "white" : COLOR_CONSTANTS.accent.red,
      },
      input: {
        color: theme === "dark" ? "white" : "black",
        backgroundColor: COLOR_CONSTANTS.background.dark,
      },
    })
  );

  useEffect(() => {
    setStyles({
      ...styles,
      background: {
        ...styles.background,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.background.dark
            : COLOR_CONSTANTS.background.light,
      },

      text: {
        ...styles.text,
        color: theme === "dark" ? "white" : "black",
      },
      hr: {
        color: theme === "dark" ? "white" : "black",
      },
      header: {
        ...styles.header,
        color: theme === "dark" ? "white" : "black",
      },
      arrow: {
        backgroundColor: theme === "dark" ? "white" : "black",
      },
      newCard: {
        ...styles.characterCard,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.paper.dark
            : COLOR_CONSTANTS.paper.light,
      },
      characterImage: {
        color: theme === "dark" ? "white" : COLOR_CONSTANTS.accent.red,
      },
      input: {
        color: theme === "dark" ? "white" : "black",
        backgroundColor:
          theme === "dark" ? COLOR_CONSTANTS.background.dark : "white",
        borderColor: theme === "dark" ? "#BCBDBC" : "#878A8C",
      },
    });
  }, [theme]);

  if (fontsLoaded) {
    return (
      <BarContainer>
        <View style={{ flex: 1, ...styles.background }}>
          <Text
            style={{
              ...styles.text,
              fontSize: 10,
              opacity: 0.5,
              marginTop: 0,
              marginBottom: 10,
            }}
          >
            Step 2/6
          </Text>
          <ProgressBar
            progress={2 / 6}
            style={{ marginBottom: 25 }}
            color="red"
          />

          <Text style={styles.header}>Race Selection</Text>
        </View>
      </BarContainer>
    );
  }

  return <></>;
};

export default Race;
