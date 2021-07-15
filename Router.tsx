import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Landing from "./screens/Landing";
//@ts-ignore
import Stack from "react-router-native-stack";
import Login from "./screens/Onboarding/Login";

export const Router = () => {
  return (
    <NativeRouter>
      <Stack>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
      </Stack>
    </NativeRouter>
  );
};
