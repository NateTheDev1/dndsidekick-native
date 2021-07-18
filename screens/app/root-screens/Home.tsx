import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { UserActions } from "../../../redux/User/actions";
import BarContainer from "../../../components/BarContainer";

const Home = () => {
  const logout = UserActions.useLogout();

  return (
    <BarContainer>
      <View style={{ flex: 1, overflow: "scroll" }}>
        <View>
          <Text>Home Placeholder</Text>
        </View>
        <Button onPress={logout}>
          <Text>Logout</Text>
        </Button>
      </View>
    </BarContainer>
  );
};

export default Home;
