import React from "react";
import { useHistory } from "react-router-native";
import * as Linking from "expo-linking";

export const DeepLinkComponent = () => {
  const history = useHistory();

  Linking.addEventListener("url", (url) => {
    const { path, queryParams } = Linking.parse(url.url);
    if (path) {
      history.push("/" + path);
    }
  });
  return <></>;
};
