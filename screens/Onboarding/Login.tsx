import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { Link } from "react-router-native";
import { FadeInView } from "../../components/FadeInView";
import {
  useFonts,
  NotoSansJP_500Medium,
} from "@expo-google-fonts/noto-sans-jp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import validator from "validator";

const Login = () => {
  const [fontsLoaded] = useFonts({
    NotoSansJP_500Medium,
  });

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const onLogin = () => {
    setFormErrors({ email: "", password: "" });

    const emailError = validator.isEmail(formValues.email);
    const passwordError = formValues.password.length < 1;

    if (emailError) {
      setFormErrors({ ...formErrors, email: "Email is invalid" });
    }

    if (passwordError) {
      setFormErrors({ ...formErrors, password: "Password is invalid" });
    }
  };

  if (fontsLoaded) {
    return (
      <FadeInView
        style={{
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 75,
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Header title="Welcome Back" />
          <View>
            <TextInput
              label="Email"
              placeholder="johndoe@dndsidekick.com"
              mode="outlined"
              autoCompleteType="email"
              autoCapitalize="none"
              outlineColor="gray"
              value={formValues.email}
              onChangeText={(text) =>
                setFormValues({ ...formValues, email: text })
              }
              error={formErrors.email.length > 0}
              theme={{ colors: { primary: "gray" } }}
            />
            <HelperText type="error" visible={formErrors.email.length > 0}>
              {formErrors.email}
            </HelperText>
            <TextInput
              style={{
                marginTop: 25,
                marginBottom: formErrors.password.length > 0 ? 10 : 15,
              }}
              label="Password"
              mode="outlined"
              autoCompleteType="password"
              outlineColor="gray"
              placeholder="**********"
              value={formValues.password}
              onChangeText={(text) =>
                setFormValues({ ...formValues, password: text })
              }
              theme={{ colors: { primary: "gray" } }}
              secureTextEntry
              returnKeyType="done"
              error={formErrors.password.length > 0}
            />
            <HelperText type="error" visible={formErrors.password.length > 0}>
              {formErrors.password}
            </HelperText>
            <Link to="/forgot-password">
              <Text
                style={{
                  alignSelf: "flex-end",
                  color: "black",
                  opacity: 0.5,
                  textDecorationLine: "underline",
                }}
              >
                Forgot password?
              </Text>
            </Link>
          </View>
          <Footer
            title="LOGIN"
            linkTitle="Don't have an account?"
            linkURL="/register"
            buttonAction={onLogin}
          />
        </SafeAreaView>
      </FadeInView>
    );
  }

  return <></>;
};

export default Login;
