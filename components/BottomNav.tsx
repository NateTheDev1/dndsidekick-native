import {
  useFonts,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useLocation } from "react-router-native";
import { COLOR_CONSTANTS } from "../theme/color";
import { CharactersIcon } from "./icons/CharactersIcon";
import { CompendiumIcon } from "./icons/CompendiumIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { SoundboardsIcon } from "./icons/SoundboardsIcon";

const BottomNav = () => {
  const location = useLocation();

  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
  });

  if (fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Link component={TouchableOpacity} to="/home">
          <View
            style={{
              opacity: location.pathname.includes("/home") ? 1 : 0.5,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <HomeIcon
              color={
                location.pathname.includes("/home")
                  ? COLOR_CONSTANTS.accent.red
                  : "white"
              }
            />
            <Text style={styles.subtitle}>Home</Text>
          </View>
        </Link>
        <Link component={TouchableOpacity} to="/characters">
          <View
            style={{
              opacity: location.pathname.includes("/characters") ? 1 : 0.5,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <CharactersIcon
              color={
                location.pathname.includes("/characters")
                  ? COLOR_CONSTANTS.accent.red
                  : "white"
              }
            />
            <Text style={styles.subtitle}>Characters</Text>
          </View>
        </Link>
        <Link component={TouchableOpacity} to="/search">
          <View
            style={{
              opacity: location.pathname.includes("/search") ? 1 : 0.5,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <SearchIcon
              color={
                location.pathname.includes("/search")
                  ? COLOR_CONSTANTS.accent.red
                  : "white"
              }
            />
            <Text style={styles.subtitle}>Search</Text>
          </View>
        </Link>
        <Link component={TouchableOpacity} to="/soundboards">
          <View
            style={{
              opacity: location.pathname.includes("/soundboards") ? 1 : 0.5,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <SoundboardsIcon
              color={
                location.pathname.includes("/soundboards")
                  ? COLOR_CONSTANTS.accent.red
                  : "white"
              }
            />
            <Text style={styles.subtitle}>Sounds</Text>
          </View>
        </Link>
        <Link component={TouchableOpacity} to="/compendium">
          <View
            style={{
              opacity: location.pathname.includes("/compendium") ? 1 : 0.5,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <CompendiumIcon
              color={
                location.pathname.includes("/compendium")
                  ? COLOR_CONSTANTS.accent.red
                  : "white"
              }
            />
            <Text style={styles.subtitle}>Read</Text>
          </View>
        </Link>
      </SafeAreaView>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 5,
    fontFamily: "NotoSansJP_400Regular",
    color: "white",
    fontSize: 11,
  },
  container: {
    alignSelf: "flex-end",
    backgroundColor: COLOR_CONSTANTS.paper.nav,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default BottomNav;
