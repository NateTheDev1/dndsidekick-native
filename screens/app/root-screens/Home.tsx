import {
  useFonts,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold,
} from "@expo-google-fonts/noto-sans-jp";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import BarContainer from "../../../components/BarContainer";
import { UserSelectors } from "../../../redux/User/selectors";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { HomeContent } from "./HomeContent";

const Home = () => {
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
      articleCard: {
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.paper.dark
            : COLOR_CONSTANTS.paper.light,
      },
      articleText: {
        color: theme === "dark" ? "white" : "black",
        fontFamily: "NotoSansJP_400Regular",
      },
      articleHeader: {
        color: theme === "dark" ? "white" : "black",
        fontFamily: "NotoSansJP_700Bold",
      },
      articleArrow: {
        backgroundColor: theme === "dark" ? "white" : "black",
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
      articleCard: {
        ...styles.articleCard,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.paper.dark
            : COLOR_CONSTANTS.paper.light,
      },
      articleText: {
        ...styles.articleText,
        color: theme === "dark" ? "white" : "black",
      },
      articleHeader: {
        ...styles.articleHeader,
        color: theme === "dark" ? "white" : "black",
      },
      articleArrow: {
        backgroundColor: theme === "dark" ? "white" : "black",
      },
    });
  }, [theme]);

  if (fontsLoaded) {
    return (
      <BarContainer>
        <View style={{ flex: 1, overflow: "scroll", ...styles.background }}>
          <HomeContent styles={styles} />
        </View>
      </BarContainer>
    );
  }

  return <></>;
};

export default Home;
