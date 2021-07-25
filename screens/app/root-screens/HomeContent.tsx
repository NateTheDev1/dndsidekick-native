import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { UserSelectors } from "../../../redux/User/selectors";
//@ts-ignore
import Hr from "react-native-hr-plus";

import { DevUpdateButton } from "../../../components/DevUpdateButton";
import { Link } from "react-router-native";
import { ArticleCard } from "../../../components/ArticleCard";
import { Button } from "react-native-paper";
import { COLOR_CONSTANTS } from "../../../theme/color";

export const HomeContent = ({ styles }: { styles: any }) => {
  const userName = UserSelectors.useSelectUser()?.name;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ ...styles.header }}>WELCOME BACK</Text>
      <Text
        style={{
          ...styles.header,
          fontSize: 12,
          marginTop: 10,
          opacity: 0.7,
          letterSpacing: 2,
        }}
      >
        LOGGED IN AS {userName?.toUpperCase()}
      </Text>
      <Hr color={styles.hr.color} style={{ opacity: 0.5, marginTop: 15 }} />
      <Link component={TouchableOpacity} to="/updates">
        <DevUpdateButton />
      </Link>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 32,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...styles.header,
            fontSize: 18,
            opacity: 0.8,
            letterSpacing: 3,
          }}
        >
          COMMUNITY
        </Text>
        <TouchableOpacity
          onPress={() => console.log("route to articles")}
          style={{
            padding: 5,
            width: "20%",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLOR_CONSTANTS.accent.red,
          }}
        >
          <Text
            style={{ ...styles.articleHeader, fontSize: 12, color: "white" }}
          >
            More
          </Text>
        </TouchableOpacity>
      </View>
      <ArticleCard
        article={{
          title: "Tips For Character Creation",
          views: 3900,
          redirect: "https://google.com",
          author: "Elean Jane",
          top: true,
        }}
        backgroundColor={styles.articleCard.backgroundColor}
        style={{ marginTop: 20 }}
        styles={styles}
      />
      <Hr color={styles.hr.color} style={{ opacity: 0.5, marginTop: 30 }} />
      <ArticleCard
        article={{
          title: "Tips For Character Creation 2",
          views: 1200,
          redirect: "/",
          author: "Elean Jane",
          top: false,
        }}
        backgroundColor={styles.articleCard.backgroundColor}
        style={{ marginTop: 20 }}
        styles={styles}
      />
      <ArticleCard
        article={{
          title: "Tips For Character Creation 3",
          views: 120,
          redirect: "/",
          author: "Elean Jane",
          top: false,
        }}
        backgroundColor={styles.articleCard.backgroundColor}
        style={{ marginTop: 20 }}
        styles={styles}
      />
    </ScrollView>
  );
};
