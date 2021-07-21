import React from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { RightArrowIcon } from "../../../components/icons/RightArrowIcon";
//@ts-ignore
import Hr from "react-native-hr-plus";
import { useHistory } from "react-router-native";
import { UserActions } from "../../../redux/User/actions";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  HelperText,
  TextInput,
} from "react-native-paper";
import {
  useSendPasswordResetMutation,
  useUpdateUserMutation,
} from "../../../business-domain/graphql";
import { UserSelectors } from "../../../redux/User/selectors";
import { ScrollView } from "react-native";

export const SettingsContent = ({ styles }: { styles: any }) => {
  const history = useHistory();
  const logoutUser = UserActions.useLogout();
  const userName = UserSelectors.useSelectUser()?.name;
  const userEmail = UserSelectors.useSelectUser()?.email;
  const getUser = UserActions.useFetchUser();
  const id = UserSelectors.useSelectUserId();

  const [sendReset, sendResetData] = useSendPasswordResetMutation();
  const [updateName, updateNameData] = useUpdateUserMutation();

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
    if (!nameError && id && formValues.name) {
      updateName({ variables: { fullName: formValues.name, id } }).then(
        (res) => {
          getUser();
        }
      );
    }
  };

  const sendPasswordReset = () => {
    if (userEmail) {
      sendReset({ variables: { email: userEmail } }).then(() =>
        setRequestedReset(true)
      );
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

      {updateNameData.loading ? (
        <ActivityIndicator
          animating={true}
          color={COLOR_CONSTANTS.accent.red}
          size="small"
        />
      ) : (
        <>
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
            onChangeText={(text) =>
              setFormValues({ ...formValues, name: text })
            }
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
          {updateNameData.error && (
            <HelperText type="error" visible={formErrors.name.length > 0}>
              Could not update your name. Try again.
            </HelperText>
          )}
          <Button
            onPress={() => onSubmit()}
            style={styles.button}
            disabled={userName === formValues.name}
          >
            <Text style={styles.buttonText}>Save Changes</Text>
          </Button>
        </>
      )}
      <Text
        style={{
          ...styles.text,
          marginTop: 40,
          opacity: !requestedReset ? 1 : 0.5,
        }}
      >
        Update Password
      </Text>
      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          ...styles.text,
          marginTop: 0,
          fontSize: 16,
          opacity: !requestedReset ? 1 : 0.5,
        }}
        onPress={() => {
          if (!requestedReset) {
            sendPasswordReset();
          }
        }}
      >
        {!requestedReset ? "Send Request To Update Password" : "Sent!"}
      </Text>
      <Text style={{ ...styles.text, opacity: 0.5, marginTop: 10 }}>
        Change Email Address
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
