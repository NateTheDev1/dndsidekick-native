import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { RightArrowIcon } from "../../../components/icons/RightArrowIcon";
//@ts-ignore
import Hr from "react-native-hr-plus";
import { useHistory } from "react-router-native";
import { UserActions } from "../../../redux/User/actions";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import { useGetUserQuery } from "../../../business-domain/graphql";
import { UserSelectors } from "../../../redux/User/selectors";
import { useEffect } from "react";

export const SettingsContent = ({ styles }: { styles: any }) => {
  const history = useHistory();
  const logoutUser = UserActions.useLogout();
  const userName = UserSelectors.useSelectUser()?.name;

  const [formValues, setFormValues] = useState({ name: userName });
  const [formErrors, setFormErrors] = useState({ name: "" });

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

  return (
    <View>
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
        style={{ marginTop: 50 }}
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
    </View>
  );
};
