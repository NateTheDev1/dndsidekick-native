import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Link, useHistory } from "react-router-native";
import { COLOR_CONSTANTS } from "../theme/color";
import { BackButtonIcon } from "./icons/BackButtonIcon";
import { TopBarLogo } from "./icons/TopBarLogo";

const Navbar = ({
  showSettings,
  showBack = false,
}: {
  showSettings: boolean;
  showBack?: boolean;
}) => {
  const history = useHistory();

  const onBack = () => {
    history.goBack();
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLOR_CONSTANTS.paper.nav,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {showSettings && !showBack && <View style={{ width: "33.3%" }}></View>}
      {showBack && (
        <View
          onTouchStart={() => onBack()}
          style={{
            display: "flex",
            width: "33.3%",
            alignItems: "flex-start",
            paddingLeft: 20,
          }}
        >
          <BackButtonIcon color={"white"} />
        </View>
      )}
      <View
        style={{
          width: "33.3%",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TopBarLogo />
      </View>
      {!showSettings && showBack && <View style={{ width: "33.3%" }}></View>}

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
