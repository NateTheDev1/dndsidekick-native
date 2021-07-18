import React from "react";
import { View } from "react-native";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

const BarContainer = ({ children }: { children: any }) => {
  return (
    <View style={{ flex: 1, display: "flex" }}>
      <Navbar />
      {children}
      <BottomNav />
    </View>
  );
};

export default BarContainer;
