import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BarContainer from "../../../components/BarContainer";
import { CharacterCard } from "../../../components/CharacterCard";
import { UserSelectors } from "../../../redux/User/selectors";
import { COLOR_CONSTANTS } from "../../../theme/color";

const exampleChar = {
  name: "Doredren the blacksmith",
  race: "Half-ELf",
  cls: "Rogue",
  level: 1,
  avatar:
    "https://cdn.vox-cdn.com/thumbor/E8R9K3FeNaM8iLWvRpL0qNRBW5c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20074680/nim.jpg",
};

async function getLastUsedCharacters() {
  return await AsyncStorage.getItem("@LAST_USED_CHARACTER");
}

const Characters = () => {
  const theme = UserSelectors.useSelectTheme();
  const [lastUsedChar, setLastUsedChar] = useState<string | null>(null);

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
    });
  }, [theme]);

  useEffect(() => {
    getLastUsedChar();
  }, []);

  const getLastUsedChar = async () => {
    getLastUsedCharacters().then((char) => {
      setLastUsedChar(char);
    });
  };

  AsyncStorage.setItem("@LAST_USED_CHARACTER", "1");

  if (fontsLoaded) {
    return (
      <BarContainer>
        <View style={{ flex: 1, ...styles.background }}>
          <Text style={{ ...styles.header, fontSize: 22 }}>CHARACTERS</Text>
          {lastUsedChar !== null && (
            <>
              <Text
                style={{
                  ...styles.header,
                  opacity: 0.5,
                  fontSize: 16,
                  marginTop: 25,
                }}
              >
                LAST USED
              </Text>
              <CharacterCard
                avatar={exampleChar.avatar}
                name={exampleChar.name}
                cls={exampleChar.cls}
                race={exampleChar.race}
                level={exampleChar.level}
                styles={styles}
              />
            </>
          )}
        </View>
      </BarContainer>
    );
  }

  return <></>;
};

export default Characters;
