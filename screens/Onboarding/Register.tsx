import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import {
  ActivityIndicator,
  Button,
  HelperText,
  TextInput,
} from "react-native-paper";
import { Link, useHistory } from "react-router-native";
import { FadeInView } from "../../components/FadeInView";
import {
  useFonts,
  NotoSansJP_500Medium,
} from "@expo-google-fonts/noto-sans-jp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import validator from "validator";
import { useSignupMutation } from "../../business-domain/graphql";
import { UserActions } from "../../redux/User/actions";
import { COLOR_CONSTANTS } from "../../theme/color";

const Register = () => {
  const [fontsLoaded] = useFonts({
    NotoSansJP_500Medium,
  });

  const [signup, signupData] = useSignupMutation();
  const history = useHistory();
  const setLoggedIn = UserActions.useLogin();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [viewPassword, setViewPassword] = useState(false);

  const onRegister = () => {
    setFormErrors({ email: "", password: "", name: "" });

    const emailError = !validator.isEmail(formValues.email);
    const passwordError = formValues.password.length < 1;
    const nameError = formValues.name.length < 2;

    setFormErrors({
      email: emailError ? "Email is invalid" : "",
      password: passwordError ? "Password is invalid" : "",
      name: nameError ? "Name is invalid" : "",
    });

    if (!emailError && !passwordError && !nameError) {
      signup({ variables: { user: { ...formValues } } })
        .then((res) => {
          if (!res.errors && res.data) {
            setLoggedIn(res.data.signup.token as string);
            history.push("/home");
          }
        })
        .catch((e) => console.error(e));
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
          <Header title="Let's Get Started" />
          <View>
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              mode="outlined"
              autoCompleteType="name"
              outlineColor="#BCBDBC"
              returnKeyType="next"
              clearButtonMode="unless-editing"
              value={formValues.name}
              style={{ marginTop: 50 }}
              onChangeText={(text) =>
                setFormValues({ ...formValues, name: text })
              }
              error={formErrors.name.length > 0}
              theme={{ colors: { primary: "#BCBDBC" }, roundness: 10 }}
            />
            <HelperText type="error" visible={formErrors.name.length > 0}>
              {formErrors.name}
            </HelperText>
            <TextInput
              label="Email"
              placeholder="johndoe@dndsidekick.com"
              mode="outlined"
              autoCompleteType="email"
              autoCapitalize="none"
              outlineColor="#BCBDBC"
              returnKeyType="next"
              clearButtonMode="unless-editing"
              value={formValues.email}
              onChangeText={(text) =>
                setFormValues({ ...formValues, email: text })
              }
              style={{ marginTop: 25 }}
              error={formErrors.email.length > 0}
              theme={{ colors: { primary: "#BCBDBC" }, roundness: 10 }}
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
              clearButtonMode="unless-editing"
              mode="outlined"
              autoCompleteType="password"
              outlineColor="#BCBDBC"
              placeholder="**********"
              value={formValues.password}
              onChangeText={(text) =>
                setFormValues({ ...formValues, password: text })
              }
              theme={{ colors: { primary: "#BCBDBC" }, roundness: 10 }}
              secureTextEntry={!viewPassword}
              returnKeyType="done"
              error={formErrors.password.length > 0}
              right={
                <TextInput.Icon
                  name="eye"
                  onPress={() => setViewPassword(!viewPassword)}
                  style={{ opacity: formValues.password.length > 0 ? 0.5 : 0 }}
                />
              }
            />
            <HelperText type="error" visible={formErrors.password.length > 0}>
              {formErrors.password}
            </HelperText>
            {signupData.error &&
              signupData.error?.message.length > 0 &&
              !signupData.loading && (
                <HelperText
                  type="error"
                  style={{
                    marginTop: 25,
                    alignSelf: "center",
                    fontSize: 14,
                  }}
                  visible={true}
                >
                  There was an error registering your account. This email may
                  already be in use.
                </HelperText>
              )}
          </View>
          {signupData.loading ? (
            <ActivityIndicator
              animating={true}
              color={COLOR_CONSTANTS.accent.red}
              size="large"
            />
          ) : (
            <Footer
              title="REGISTER"
              linkTitle="Already have an account?"
              linkURL="/login"
              buttonAction={onRegister}
            />
          )}
        </SafeAreaView>
      </FadeInView>
    );
  }

  return <></>;
};

export default Register;
