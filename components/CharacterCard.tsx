import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLOR_CONSTANTS } from "../theme/color";
import { RightArrowIcon } from "./icons/RightArrowIcon";

export const CharacterCard = ({
  styles,
  name,
  race,
  cls,
  level,
  avatar,
  style = {},
}: {
  styles: any;
  name: string;
  race: string;
  cls: string;
  level: number | string;
  avatar: string;
  style?: any;
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          ...style,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            source={{ uri: avatar, cache: "reload", width: 50, height: 50 }}
            width={50}
            height={50}
            style={{
              borderWidth: 2,
              borderColor: styles.characterImage.color,
              borderRadius: 10,
            }}
          />

          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                ...styles.header,
                marginVertical: 0,
                textTransform: "uppercase",
                fontSize: 14,
                letterSpacing: "none",
              }}
            >
              {name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  ...styles.text,
                  marginVertical: 0,
                  textTransform: "uppercase",
                }}
              >
                {race}
              </Text>
              <Text
                style={{
                  ...styles.text,
                  marginVertical: 0,
                  textTransform: "uppercase",
                  marginLeft: 10,
                }}
              >
                {cls}
              </Text>
              <Text
                style={{
                  ...styles.text,
                  marginVertical: 0,
                  textTransform: "uppercase",
                  marginLeft: 10,
                  color: COLOR_CONSTANTS.accent.red,
                }}
              >
                LEVEL {level}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: "10%", opacity: 0.7 }}>
          <RightArrowIcon color={styles.arrow.backgroundColor} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
