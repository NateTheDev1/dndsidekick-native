import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Router } from "./Router";

import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./business-domain/ApolloClient";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const _cacheResourcesAsync = async () => {
    const images = [
      require("./assets/images/brand-discord.png"),
      require("./assets/images/brand-facebook.png"),
      require("./assets/images/brand-twitter.png"),
      require("./assets/images/brand-url.png"),
      require("./assets/images/landing-image.png"),
      require("./assets/images/landing-logo.png"),
      require("./assets/images/top-bar-logo.png"),
      require("./assets/images/mail-icon.png"),
      require("./assets/images/dots-vertical.png"),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
  };

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setAppLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <Router />
          <StatusBar style="light" />
        </View>
      </ApolloProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
