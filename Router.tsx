import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Landing from "./screens/Landing";
//@ts-ignore
import Stack from "react-router-native-stack";
import Login from "./screens/Onboarding/Login";
import Register from "./screens/Onboarding/Register";
import Home from "./screens/app/root-screens/Home";
import { UserSelectors } from "./redux/User/selectors";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserActions } from "./redux/User/actions";

export const Router = () => {
  const loggedIn = UserSelectors.useSelectAuthenticated();
  const setLoggedIn = UserActions.useLogin();

  useEffect(() => {
    setAuth();
  }, []);

  const setAuth = async () => {
    await AsyncStorage.getItem("@FIVE_E_TOKEN").then((token) => {
      if (token && token.length > 0) {
        setLoggedIn(token);
      }
    });
  };

  return (
    <NativeRouter>
      <Stack>
        <Route exact path="/login" component={loggedIn ? Home : Login} />
        <Route exact path="/register" component={loggedIn ? Home : Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={loggedIn ? Home : Landing} />
      </Stack>
    </NativeRouter>
  );
};
