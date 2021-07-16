import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
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
import { useLoginMutation } from "../../business-domain/graphql";
import { COLOR_CONSTANTS } from "../../theme/color";
import { UserActions } from "../../redux/User/actions";
import { UserSelectors } from "../../redux/User/selectors";

const Login = () => {
  const loggedIn = UserSelectors.useSelectAuthenticated();

  const [fontsLoaded] = useFonts({
    NotoSansJP_500Medium,
  });

  const history = useHistory();

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [viewPassword, setViewPassword] = useState(false);
  const [login, loginData] = useLoginMutation();
  const setLoggedIn = UserActions.useLogin();
  const onLogin = () => {
    setFormErrors({ email: "", password: "" });

    const emailError = !validator.isEmail(formValues.email);
    const passwordError = formValues.password.length < 1;

    setFormErrors({
      email: emailError ? "Email is invalid" : "",
      password: passwordError ? "Password is invalid" : "",
    });

    if (!emailError && !passwordError) {
      login({ variables: { credentials: { ...formValues } } })
        .then((res) => {
          if (!res.errors && res.data) {
            setLoggedIn(res.data.login.token as string);
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
          <Header title="Welcome Back" />
          <View>
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
            <Link component={TouchableOpacity} to="/forgot-password">
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
            {loginData.error &&
              loginData.error?.message.length > 0 &&
              !loginData.loading && (
                <HelperText
                  type="error"
                  style={{
                    marginTop: 25,
                    alignSelf: "center",
                    fontSize: 14,
                  }}
                  visible={true}
                >
                  Invalid credentials
                </HelperText>
              )}
          </View>

          {loginData.loading ? (
            <ActivityIndicator
              animating={true}
              color={COLOR_CONSTANTS.accent.red}
              size="large"
            />
          ) : (
            <Footer
              title="LOGIN"
              linkTitle="Don't have an account?"
              linkURL="/register"
              buttonAction={onLogin}
            />
          )}
        </SafeAreaView>
      </FadeInView>
    );
  }

  return <></>;
};

export default Login;
