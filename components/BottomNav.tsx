import React from "react";
import { SafeAreaView, Text } from "react-native";
import { COLOR_CONSTANTS } from "../theme/color";

const BottomNav = () => {
  return (
    <SafeAreaView
      style={{
        alignSelf: "flex-end",
        backgroundColor: COLOR_CONSTANTS.paper.nav,
        width: "100%",
      }}
    >
      <Text style={{ color: "white", paddingHorizontal: 20, paddingTop: 30 }}>
        Home
      </Text>
    </SafeAreaView>
  );
};

export default BottomNav;
