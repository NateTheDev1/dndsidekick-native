import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import BarContainer from "../../../components/BarContainer";
import { UserSelectors } from "../../../redux/User/selectors";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { SettingsContent } from "./SettingsContent";

const Settings = () => {
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
        backgroundColor: COLOR_CONSTANTS.background.dark,
      },
      header: {
        fontFamily: "NotoSansJP_700Bold",
        fontSize: 20,
        color: "white",
        letterSpacing: 5,
      },
      text: {
        marginVertical: 25,
        color: "white",
        fontSize: 15,
        fontFamily: "NotoSansJP_400Regular",
      },
      hr: {
        color: "white",
      },
      icon: {
        color: "white",
      },
      input: {
        color: "white",
        backgroundColor: COLOR_CONSTANTS.background.dark,
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
      },
      buttonText: {
        color: "white",
        textTransform: "capitalize",
        fontFamily: "NotoSansJP_400Regular",
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
      header: {
        ...styles.header,
        color: theme === "dark" ? "white" : "black",
      },
      text: {
        ...styles.text,
        color: theme === "dark" ? "white" : "black",
      },
      hr: {
        color: theme === "dark" ? "white" : "black",
      },
      icon: {
        color: theme === "dark" ? "white" : "black",
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
      <BarContainer showSettings={false} showBack={true}>
        <View style={{ flex: 1, ...styles.background }}>
          <SettingsContent styles={styles} />
        </View>
      </BarContainer>
    );
  }

  return <></>;
};

export default Settings;
