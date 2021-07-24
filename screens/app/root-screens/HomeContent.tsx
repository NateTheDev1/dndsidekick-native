import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { UserSelectors } from "../../../redux/User/selectors";
//@ts-ignore
import Hr from "react-native-hr-plus";

import { DevUpdateButton } from "../../../components/DevUpdateButton";
import { Link } from "react-router-native";
import { ArticleCard } from "../../../components/ArticleCard";

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
      <Text
        style={{
          ...styles.header,
          fontSize: 18,
          marginTop: 32,
          opacity: 0.8,
          letterSpacing: 3,
        }}
      >
        COMMUNITY
      </Text>
      <ArticleCard
        article={{
          title: "Tips For Character Creation",
          views: 3900,
          redirect: "/",
          author: "Elean Jane",
          top: true,
        }}
        backgroundColor="white"
        style={{ marginTop: 20 }}
      />
      <Hr color={styles.hr.color} style={{ opacity: 0.5, marginTop: 35 }} />
    </ScrollView>
  );
};
