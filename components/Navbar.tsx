import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import { COLOR_CONSTANTS } from "../theme/color";
import { TopBarLogo } from "./icons/TopBarLogo";

const Navbar = ({ showSettings }: { showSettings: boolean }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLOR_CONSTANTS.paper.nav,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {showSettings && <View style={{ width: "33.3%" }}></View>}
      {showSettings && (
        <View
          style={{
            width: "33.3%",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TopBarLogo />
        </View>
      )}
      {!showSettings && (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TopBarLogo />
        </View>
      )}
      {showSettings && (
        <Link
          to="/home/settings"
          component={TouchableOpacity}
          style={{
            display: "flex",
            width: "33.3%",
            alignItems: "flex-end",
          }}
        >
          <Image source={require("../assets/images/dots-vertical.png")} />
        </Link>
      )}
    </SafeAreaView>
  );
};

export default Navbar;
