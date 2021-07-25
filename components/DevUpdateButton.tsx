import {
  useFonts,
  NotoSansJP_300Light,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import React from "react";
import { Text, View } from "react-native";
import { COLOR_CONSTANTS } from "../theme/color";
import { BookIcon } from "./icons/BookIcon";

export const DevUpdateButton = () => {
  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_400Regular,
  });

  if (fontsLoaded) {
    return (
      <View
        style={{
          backgroundColor: COLOR_CONSTANTS.accent.green,
          padding: 20,
          borderRadius: 5,
          marginTop: 20,
          height: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "NotoSansJP_700Bold",
              fontSize: 16,
            }}
          >
            What's New?
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "NotoSansJP_400Regular",
              fontSize: 13,
              marginTop: 10,
            }}
          >
            Check out weekly updates from the team
          </Text>
        </View>
        <View>
          <BookIcon width={30} height={30} />
        </View>
      </View>
    );
  }

  return <></>;
};

export default DevUpdateButton;
