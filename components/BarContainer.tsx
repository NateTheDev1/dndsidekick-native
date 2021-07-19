import React from "react";
import { useEffect } from "react";
import { Appearance, View } from "react-native";
import { UserActions } from "../redux/User/actions";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

const BarContainer = ({
  children,
  showSettings = true,
  showBack = false,
}: {
  children: any;
  showSettings?: boolean;
  showBack?: boolean;
}) => {
  const setTheme = UserActions.useSetTheme();

  useEffect(() => {
    const listener = (c: any) => {
      const colorScheme = c.colorScheme;

      setTheme(colorScheme);
    };
    Appearance.addChangeListener(listener);

    return () => {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  return (
    <View style={{ flex: 1, display: "flex" }}>
      <Navbar showSettings={showSettings} showBack={showBack} />
      {children}
      <BottomNav />
    </View>
  );
};

export default BarContainer;
