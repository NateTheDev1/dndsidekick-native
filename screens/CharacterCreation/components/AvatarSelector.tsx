import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Modal } from "react-native-paper";
//@ts-ignore
import Hr from "react-native-hr-plus";
import { avatarOptions } from "./avatars";

const AvatarSelector = ({
  open,
  setOpen,
  styles,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  styles: any;
}) => {
  return (
    <Modal
      visible={open}
      onDismiss={() => setOpen(false)}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.header, color: "black" }}>
          Avatar Selection
        </Text>
        <Text
          style={{
            ...styles.text,
            color: "black",
            fontSize: 12,
            opacity: 0.5,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          To upload your own images please do so on the web version
        </Text>
        <Hr color="black" style={{ marginTop: 10, width: "90%" }} />
        <ScrollView
          indicatorStyle="black"
          showsVerticalScrollIndicator={true}
          style={{
            width: "80%",
            marginTop: 30,
            borderColor: "red",
            maxHeight: 450,
          }}
        >
          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {avatarOptions.map((avatar, key) => (
              <Image
                source={{ uri: avatar, width: 75, height: 75 }}
                width={75}
                height={75}
                style={{
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 10,
                  maxWidth: "33.3%",
                  marginBottom: 25,
                  marginRight: 10,
                }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AvatarSelector;
