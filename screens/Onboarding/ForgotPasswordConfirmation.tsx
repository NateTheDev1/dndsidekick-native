import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
} from "@expo-google-fonts/noto-sans-jp";
import { COLOR_CONSTANTS } from "../../theme/color";
import tailwind from "tailwind-rn";
import { Button } from "react-native-paper";
import { Link, useHistory } from "react-router-native";
import { FadeInView } from "../../components/FadeInView";

const ForgotPasswordConfirmation = () => {
  const history = useHistory();

  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
  });

  return (
    <FadeInView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Image
            source={require("../../assets/images/mail-icon.png")}
            resizeMode="contain"
            style={{
              ...tailwind("mb-8"),
            }}
          />
          <Text style={styles.textStyle}>Check your email</Text>
          <Text style={styles.subtitle}>
            We have sent password recovery instructions to your email.
          </Text>
          <Button onPress={() => history.push("/login")} style={styles.button}>
            <Text style={styles.buttonText}>Okay</Text>
          </Button>
        </View>
        <View style={{ width: "70%" }}>
          <Text style={{ ...styles.subtitle, textAlign: "center" }}>
            Didn't receive an email? Check your spam filter.
          </Text>
          <Link to="/forgot-password" component={TouchableOpacity}>
            <Text
              style={{
                color: COLOR_CONSTANTS.accent.green,
                fontFamily: "NotoSansJP_700Bold",
                alignSelf: "center",
                marginTop: 20,
                textDecorationLine: "underline",
              }}
            >
              Try sending one again.
            </Text>
          </Link>
        </View>
      </SafeAreaView>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "NotoSansJP_700Bold",
    fontSize: 35,
  },
  subtitle: {
    fontFamily: "NotoSansJP_500Medium",
    opacity: 0.5,
    lineHeight: 40,
    marginTop: 20,
    fontSize: 15,
    textAlign: "center",
  },
  input: {
    marginTop: 30,
  },
  button: {
    width: 350,
    backgroundColor: COLOR_CONSTANTS.paper.dark,
    padding: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 25,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "NotoSansJP_500Medium",
    textTransform: "capitalize",
  },
  linkStyle: {
    color: "black",
    opacity: 0.5,
    alignSelf: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default ForgotPasswordConfirmation;
