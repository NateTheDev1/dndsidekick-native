import React from "react";
import {
  View,
  Text,
  Image,
  useColorScheme,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Linking,
} from "react-native";

import { COLOR_CONSTANTS } from "../theme/color";

import { Button } from "react-native-paper";
import {
  useFonts,
  NotoSansJP_500Medium,
  NotoSansJP_300Light,
} from "@expo-google-fonts/noto-sans-jp";
import tailwind from "tailwind-rn";
import { useHistory } from "react-router-native";
import { FadeInView } from "../components/FadeInView";

const Landing = () => {
  // const isDarkMode = useColorScheme() === 'dark

  const history = useHistory();

  const [fontsLoaded] = useFonts({
    NotoSansJP_500Medium,
    NotoSansJP_300Light,
  });

  const onSocialLink = (url: string) => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };

  if (fontsLoaded) {
    return (
      <FadeInView
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../assets/images/landing-image.png")}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                opacity: 0.3,
                fontFamily: "NotoSansJP_500Medium",
              }}
            >
              Release 0.0.1
            </Text>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Image
                source={require("../assets/images/landing-logo.png")}
                resizeMode="contain"
                style={{
                  width: 275,
                  alignSelf: "center",
                  ...tailwind("mt-28"),
                }}
              />
              <Button
                onPress={() => history.push("/login")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </Button>
              <Button onPress={() => alert("register")} mode="text">
                <Text
                  style={{
                    color: "white",
                    letterSpacing: 2,
                    fontFamily: "NotoSansJP_500Medium",
                  }}
                >
                  REGISTER
                </Text>
              </Button>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 0.1,
              }}
            >
              <Button
                onPress={() => onSocialLink("https://www.dndsidekick.com")}
              >
                <Image
                  source={require("../assets/images/brand-discord.png")}
                  resizeMode="cover"
                />
              </Button>
              <Button
                onPress={() => onSocialLink("https://twitter.com/DNDSidekick")}
              >
                <Image
                  source={require("../assets/images/brand-twitter.png")}
                  resizeMode="cover"
                />
              </Button>
              <Button
                onPress={() => onSocialLink("https://www.dndsidekick.com")}
              >
                <Image
                  source={require("../assets/images/brand-url.png")}
                  resizeMode="cover"
                />
              </Button>
              <Button
                onPress={() =>
                  onSocialLink("https://www.facebook.com/DNDSidekick")
                }
              >
                <Image
                  source={require("../assets/images/brand-facebook.png")}
                  resizeMode="cover"
                />
              </Button>
            </View>
            <Text
              style={{
                color: "white",
                opacity: 0.5,
                fontFamily: "NotoSansJP_300Light",
              }}
            >
              Copyright 2021 DNDSidekick
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </FadeInView>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_CONSTANTS.background.light,
    marginTop: 50,
    marginBottom: 20,
    width: 300,
    padding: 2,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    letterSpacing: 2,
    fontFamily: "NotoSansJP_500Medium",
  },
});

export default Landing;
