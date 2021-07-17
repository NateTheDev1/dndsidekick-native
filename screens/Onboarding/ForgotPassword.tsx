import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
} from "@expo-google-fonts/noto-sans-jp";
import { FadeInView } from "../../components/FadeInView";
import { useState } from "react";
import validator from "validator";
import {
  ActivityIndicator,
  Button,
  HelperText,
  TextInput,
} from "react-native-paper";
import { COLOR_CONSTANTS } from "../../theme/color";
import { Link, useHistory } from "react-router-native";
import { useSendPasswordResetMutation } from "../../business-domain/graphql";

const ForgotPassword = () => {
  const history = useHistory();

  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
  });

  const [formValues, setFormValues] = useState({ email: "" });
  const [formErrors, setFormErrors] = useState({ email: "" });

  const [sendReset, sendResetData] = useSendPasswordResetMutation();

  const onSubmit = () => {
    setFormErrors({ email: "" });

    const emailError = !validator.isEmail(formValues.email);

    setFormErrors({
      email: emailError ? "Email is invalid" : "",
    });

    if (!emailError) {
      sendReset({ variables: { email: formValues.email } }).then((res) => {
        if (!res.errors && res.data?.sendPasswordReset === true) {
          history.push("/forgot-password/confirm");
        }
      });
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
          }}
        >
          <Text style={styles.textStyle}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter the email associatied with your account and we will send an
            email with instructions to reset your password.
          </Text>
          <TextInput
            label="Email Address"
            placeholder="johndoe@dndsidekick.com"
            mode="outlined"
            autoCompleteType="email"
            style={styles.input}
            autoCapitalize="none"
            outlineColor="#BCBDBC"
            returnKeyType="done"
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
          {sendResetData.loading ? (
            <ActivityIndicator
              animating={true}
              color={COLOR_CONSTANTS.accent.red}
              size="large"
            />
          ) : (
            <Button onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </Button>
          )}
          <Link component={TouchableOpacity} to="/login">
            <Text style={styles.linkStyle}>Back</Text>
          </Link>
        </SafeAreaView>
      </FadeInView>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "NotoSansJP_700Bold",
    fontSize: 35,
  },
  subtitle: {
    fontFamily: "NotoSansJP_400Regular",
    opacity: 0.5,
    lineHeight: 40,
    marginTop: 20,
    fontSize: 15,
  },
  input: {
    marginTop: 30,
  },
  button: {
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

export default ForgotPassword;
