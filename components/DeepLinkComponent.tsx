import React from "react";
import { useHistory } from "react-router-native";
import * as Linking from "expo-linking";
import { useState } from "react";
import { useEffect } from "react";

export const DeepLinkComponent = () => {
  const history = useHistory();
  const [initialURL, setInitialURL] = useState("");

  Linking.addEventListener("url", (url) => {
    const { path, queryParams } = Linking.parse(url.url);
    if (path) {
      history.push("/" + path);
    }
  });

  useEffect(() => {
    if (Linking.getInitialURL() && initialURL.length < 1) {
      Linking.getInitialURL().then((res) => {
        if (res) {
          const { path, queryParams } = Linking.parse(res);
          if (path) {
            history.push("/" + path);
          }
        }
      });
    }
  }, []);

  return <></>;
};
