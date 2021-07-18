import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { RightArrowIcon } from "../../../components/icons/RightArrowIcon";
//@ts-ignore
import Hr from "react-native-hr-plus";

export const SettingsContent = ({ styles }: { styles: any }) => {
  const onClickLink = (url: string) => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };

  return (
    <View>
      <Text style={styles.header}>SETTINGS</Text>
      <TouchableOpacity
        onPress={() => onClickLink("https://www.dndsidekick.com")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Support</Text>
        <RightArrowIcon color={styles.icon.color} opacity={0.7} />
      </TouchableOpacity>
      <Hr color={styles.hr.color} style={{ opacity: 0.5 }} />
      <TouchableOpacity
        onPress={() => onClickLink("https://www.dndsidekick.com")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Terms Of Service</Text>
        <RightArrowIcon color={styles.icon.color} opacity={0.7} />
      </TouchableOpacity>
      <Hr color={styles.hr.color} style={{ opacity: 0.5 }} />
      <TouchableOpacity
        onPress={() => onClickLink("https://www.dndsidekick.com")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Privacy Policy</Text>
        <RightArrowIcon color={styles.icon.color} opacity={0.7} />
      </TouchableOpacity>
      <Hr color={styles.hr.color} style={{ opacity: 0.5 }} />
    </View>
  );
};
