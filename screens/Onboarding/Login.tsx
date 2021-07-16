import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "react-router-native";
import { FadeInView } from "../../components/FadeInView";

const Login = () => {
  return (
    <FadeInView style={{ flex: 1 }}>
      <View>
        <Text>Hello.</Text>
        <Text>Welcome Back</Text>
      </View>
      <View></View>
      <Link to="/forgot-password">
        <Text>Forgot password?</Text>
      </Link>
      <View>
        <Button onPress={() => alert("here")}>
          <Text>LOGIN</Text>
        </Button>
        <Link to="/register">
          <Text>Don't have an account?</Text>
        </Link>
      </View>
    </FadeInView>
  );
};

export default Login;
