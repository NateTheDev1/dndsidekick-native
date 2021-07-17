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
import {
  ActivityIndicator,
  Button,
  HelperText,
  TextInput,
} from "react-native-paper";
import { COLOR_CONSTANTS } from "../../theme/color";
import { Link, useHistory, useParams } from "react-router-native";
import { useResetPasswordFromCodeMutation } from "../../business-domain/graphql";

const ResetPassword = () => {
  const { code }: { code: string } = useParams();
  const history = useHistory();

  const [viewPassword, setViewPassword] = useState(false);

  const [resetPassword, resetPasswordData] = useResetPasswordFromCodeMutation();

  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
  });

  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const onSubmit = () => {
    setFormErrors({ password: "", confirmPassword: "" });

    const passwordError = formValues.password.length < 5;
    const confirmError = formValues.password !== formValues.confirmPassword;

    setFormErrors({
      password: passwordError ? "Password must be at least 5 characters" : "",
      confirmPassword: confirmError ? "Passwords do not match" : "",
    });

    if (!passwordError && !confirmError) {
      resetPassword({
        variables: {
          credentials: { code: code, newPassword: formValues.password },
        },
      }).then((res) => {
        if (!res.errors) {
          history.push("/login");
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
            Your new password must be unique from previously used passwords.
          </Text>
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
          <TextInput
            style={{
              marginTop: 25,
              marginBottom: formErrors.password.length > 0 ? 10 : 15,
            }}
            label="Confirm Password"
            clearButtonMode="unless-editing"
            mode="outlined"
            autoCompleteType="password"
            outlineColor="#BCBDBC"
            placeholder="**********"
            value={formValues.confirmPassword}
            onChangeText={(text) =>
              setFormValues({ ...formValues, confirmPassword: text })
            }
            theme={{ colors: { primary: "#BCBDBC" }, roundness: 10 }}
            secureTextEntry={!viewPassword}
            returnKeyType="done"
            error={formErrors.confirmPassword.length > 0}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => setViewPassword(!viewPassword)}
                style={{
                  opacity: formValues.confirmPassword.length > 0 ? 0.5 : 0,
                }}
              />
            }
          />
          <HelperText
            type="error"
            visible={formErrors.confirmPassword.length > 0}
          >
            {formErrors.confirmPassword}
          </HelperText>
          {resetPasswordData.error &&
            resetPasswordData.error?.message.length > 0 &&
            !resetPasswordData.loading && (
              <HelperText
                type="error"
                style={{
                  marginTop: 25,
                  alignSelf: "center",
                  fontSize: 14,
                }}
                visible={true}
              >
                Code may be expired or invalid. Try sending another request.
              </HelperText>
            )}
          {resetPasswordData.loading ? (
            <ActivityIndicator
              animating={true}
              color={COLOR_CONSTANTS.accent.red}
              size="large"
            />
          ) : (
            <Button onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </Button>
          )}
          <Link component={TouchableOpacity} to="/login">
            <Text style={styles.linkStyle}>Cancel</Text>
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

export default ResetPassword;
