import React from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { RightArrowIcon } from "../../../components/icons/RightArrowIcon";
//@ts-ignore
import Hr from "react-native-hr-plus";
import { useHistory } from "react-router-native";
import { UserActions } from "../../../redux/User/actions";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { useState } from "react";
import { Button, HelperText, TextInput } from "react-native-paper";
import { useSendPasswordResetMutation } from "../../../business-domain/graphql";
import { UserSelectors } from "../../../redux/User/selectors";
import { ScrollView } from "react-native";

export const SettingsContent = ({ styles }: { styles: any }) => {
  const history = useHistory();
  const logoutUser = UserActions.useLogout();
  const userName = UserSelectors.useSelectUser()?.name;
  const userEmail = UserSelectors.useSelectUser()?.email;

  const [sendReset, sendResetData] = useSendPasswordResetMutation();

  const [formValues, setFormValues] = useState({ name: userName });
  const [formErrors, setFormErrors] = useState({ name: "" });
  const [requestedReset, setRequestedReset] = useState(false);

  const onClickLink = (url: string) => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };

  const logout = () => {
    logoutUser();
    history.push("/");
  };

  const onSubmit = () => {
    setFormErrors({ name: "" });
    const nameError = formValues.name && formValues.name.length < 2;

    setFormErrors({ name: nameError ? "Name is too short." : "" });
    if (!nameError) {
      // patch user
    }
  };

  const sendPasswordReset = () => {
    if (userEmail) {
      sendReset({ variables: { email: userEmail } });
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>SETTINGS</Text>
      <TouchableOpacity
        onPress={() => onClickLink("https://www.dndsidekick.com")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Support</Text>
        <RightArrowIcon color={styles.icon.color} opacity={0.7} />
      </TouchableOpacity>
      <Hr color={styles.hr.color} style={{ opacity: 0.5 }} />
      <TouchableOpacity
        onPress={() => onClickLink("https://www.dndsidekick.com")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Terms Of Service</Text>
        <RightArrowIcon color={styles.icon.color} opacity={0.7} />
      </TouchableOpacity>
      <Hr color={styles.hr.color} style={{ opacity: 0.5 }} />
      <TouchableOpacity
        onPress={() => onClickLink("https://www.dndsidekick.com")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Privacy Policy</Text>
        <RightArrowIcon color={styles.icon.color} opacity={0.7} />
      </TouchableOpacity>
      <Hr color={styles.hr.color} style={{ opacity: 0.5 }} />
      <TouchableOpacity
        onPress={() => logout()}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...styles.text, color: COLOR_CONSTANTS.accent.red }}>
          Logout
        </Text>
        <RightArrowIcon color={COLOR_CONSTANTS.accent.red} opacity={1} />
      </TouchableOpacity>
      <Text style={styles.header}>ACCOUNT</Text>
      <TextInput
        label="Full Name"
        placeholder="John Doe"
        mode="outlined"
        autoCompleteType="name"
        outlineColor={styles.input.color}
        returnKeyType="done"
        clearButtonMode="unless-editing"
        value={formValues.name}
        style={{ marginTop: 20 }}
        onChangeText={(text) => setFormValues({ ...formValues, name: text })}
        error={formErrors.name.length > 0}
        theme={{
          colors: {
            primary: styles.input.borderColor,
            background: styles.input.backgroundColor,
            text: styles.input.color,
            placeholder: styles.input.borderColor,
          },
          roundness: 10,
        }}
      />
      <HelperText type="error" visible={formErrors.name.length > 0}>
        {formErrors.name}
      </HelperText>
      <Button
        onPress={() => onSubmit()}
        style={styles.button}
        disabled={userName === formValues.name}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </Button>
      <Text style={{ ...styles.text, marginTop: 40 }}>Update Password</Text>
      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          ...styles.text,
          marginTop: 0,
          fontSize: 16,
        }}
      >
        Change Email Address
      </Text>
      <Text style={{ ...styles.text, opacity: 0.5, marginTop: 10 }}>
        Update Password
      </Text>
      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          ...styles.text,
          marginTop: 0,
          fontSize: 16,
          opacity: 0.5,
        }}
      >
        Currently Unavailable
      </Text>
    </ScrollView>
  );
};
