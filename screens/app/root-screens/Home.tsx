import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { UserActions } from "../../../redux/User/actions";

const Home = () => {
  const logout = UserActions.useLogout();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text>Home Placeholder</Text>
      </SafeAreaView>
      <Button onPress={logout}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

export default Home;
