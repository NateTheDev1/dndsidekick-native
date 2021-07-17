import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import { COLOR_CONSTANTS } from "../theme/color";

const Navbar = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLOR_CONSTANTS.paper.nav,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ width: "33.3%" }}></View>
      <View
        style={{
          width: "33.3%",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/top-bar-logo.png")}
          resizeMode="center"
        />
      </View>

      <Link
        to="/settings"
        component={TouchableOpacity}
        style={{
          display: "flex",
          width: "33.3%",
          alignItems: "flex-end",
        }}
      >
        <Image source={require("../assets/images/dots-vertical.png")} />
      </Link>
    </SafeAreaView>
  );
};

export default Navbar;
