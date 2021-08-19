import {
  useFonts,
  NotoSansJP_700Bold,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BarContainer from "../../components/BarContainer";
import { COLOR_CONSTANTS } from "../../theme/color";
import { UserSelectors } from "../../redux/User/selectors";
import { useState, useEffect } from "react";

import {
  ActivityIndicator,
  Button,
  HelperText,
  ProgressBar,
  TextInput,
} from "react-native-paper";
import AvatarSelector from "./components/AvatarSelector";
import { useHistory } from "react-router-native";

import faker from "faker";
import { useInitializeCharacterMutation } from "../../business-domain/graphql";

const Start = () => {
  const theme = UserSelectors.useSelectTheme();
  const history = useHistory();

  const [formValues, setFormValues] = useState<{
    name: string;
    avatar: null | string;
  }>({ name: "", avatar: null });
  const [formErrors, setFormErrors] = useState({ name: "", avatar: "" });

  const userId = UserSelectors.useSelectUserId()!;

  const [initCharacter, initCharData] = useInitializeCharacterMutation();

  const [editingAvatar, setEditingAvatar] = useState(false);

  const [fontsLoaded] = useFonts({
    NotoSansJP_700Bold,
    NotoSansJP_400Regular,
  });

  const [styles, setStyles] = useState<any>(
    StyleSheet.create({
      background: {
        paddingTop: 30,
        paddingHorizontal: 15,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.background.dark
            : COLOR_CONSTANTS.background.light,
      },
      header: {
        color: theme === "dark" ? "white" : "black",
        fontFamily: "NotoSansJP_700Bold",
        letterSpacing: 5,
        fontSize: 20,
        textTransform: "uppercase",
      },

      text: {
        marginVertical: 25,
        color: theme === "dark" ? "white" : "black",
        fontSize: 15,
        fontFamily: "NotoSansJP_400Regular",
      },
      hr: {
        color: theme === "dark" ? "white" : "black",
      },
      button: {
        backgroundColor: COLOR_CONSTANTS.accent.green,
        padding: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 30,
      },
      buttonText: {
        color: "white",
        fontFamily: "NotoSansJP_500Medium",
        textTransform: "none",
      },
      arrow: {
        backgroundColor: theme === "dark" ? "white" : "black",
      },
      newCard: {
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.paper.dark
            : COLOR_CONSTANTS.paper.light,
        padding: 10,
      },
      characterImage: {
        color: theme === "dark" ? "white" : COLOR_CONSTANTS.accent.red,
      },
      input: {
        color: theme === "dark" ? "white" : "black",
        backgroundColor: COLOR_CONSTANTS.background.dark,
      },
    })
  );

  useEffect(() => {
    setStyles({
      ...styles,
      background: {
        ...styles.background,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.background.dark
            : COLOR_CONSTANTS.background.light,
      },

      text: {
        ...styles.text,
        color: theme === "dark" ? "white" : "black",
      },
      hr: {
        color: theme === "dark" ? "white" : "black",
      },
      header: {
        ...styles.header,
        color: theme === "dark" ? "white" : "black",
      },
      arrow: {
        backgroundColor: theme === "dark" ? "white" : "black",
      },
      newCard: {
        ...styles.characterCard,
        backgroundColor:
          theme === "dark"
            ? COLOR_CONSTANTS.paper.dark
            : COLOR_CONSTANTS.paper.light,
      },
      characterImage: {
        color: theme === "dark" ? "white" : COLOR_CONSTANTS.accent.red,
      },
      input: {
        color: theme === "dark" ? "white" : "black",
        backgroundColor:
          theme === "dark" ? COLOR_CONSTANTS.background.dark : "white",
        borderColor: theme === "dark" ? "#BCBDBC" : "#878A8C",
      },
    });
  }, [theme]);

  const handleSubmit = () => {
    const nameError = formValues.name.length < 1;

    if (nameError) {
      setFormErrors({ ...formErrors, name: "A name is required" });
    } else {
      initCharacter({
        variables: {
          input: {
            character: {
              name: formValues.name,
              avatar: formValues.avatar ?? "",
            },
            userId: userId,
          },
        },
      }).then((res) => {
        if (res.data?.initializeCharacter) {
          history.push("/characters/race");
        }
      });
    }
  };

  const generateRandomName = () => {
    setFormValues({
      ...formValues,
      name: faker.name.firstName() + " " + faker.name.lastName(),
    });
  };

  if (fontsLoaded) {
    return (
      <BarContainer showBack={true} showSettings={false}>
        <View style={{ flex: 1, ...styles.background }}>
          <AvatarSelector
            formValues={formValues}
            setFormValues={setFormValues}
            open={editingAvatar}
            setOpen={setEditingAvatar}
            styles={styles}
          />
          {!editingAvatar && (
            <>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 10,
                  opacity: 0.5,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Step 1/6
              </Text>
              <ProgressBar
                progress={1 / 6}
                style={{ marginBottom: 25 }}
                color="red"
              />

              <Text style={styles.header}>The Basics</Text>
              <View style={{ marginTop: 30 }}>
                <Text
                  style={{ ...styles.text, marginTop: 0, marginBottom: 10 }}
                >
                  Tap to choose an avatar
                </Text>
                {!editingAvatar && (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {!formValues.avatar && (
                      <TouchableOpacity onPress={() => setEditingAvatar(true)}>
                        <View
                          style={{
                            backgroundColor: "gray",
                            width: 100,
                            height: 100,
                            marginBottom: 40,
                            marginTop: 10,
                            borderRadius: 5,
                          }}
                        ></View>
                      </TouchableOpacity>
                    )}
                    {formValues.avatar && (
                      <TouchableOpacity onPress={() => setEditingAvatar(true)}>
                        <Image
                          source={{ uri: formValues.avatar }}
                          style={{
                            backgroundColor: "gray",
                            width: 100,
                            height: 100,
                            marginBottom: 40,
                            marginTop: 10,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                )}
                <TouchableOpacity onPress={() => generateRandomName()}>
                  <Text
                    style={{
                      ...styles.text,
                      textDecorationLine: "underline",
                      opacity: 0.8,
                      marginTop: 0,
                      fontSize: 12,
                    }}
                  >
                    Tap to randomize character name
                  </Text>
                </TouchableOpacity>
                <TextInput
                  label="Character Name"
                  placeholder="Bertrum The Great"
                  mode="outlined"
                  autoCompleteType="name"
                  outlineColor="#BCBDBC"
                  returnKeyType="next"
                  clearButtonMode="unless-editing"
                  value={formValues.name}
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
              </View>
              {initCharData.loading ? (
                <ActivityIndicator
                  animating={true}
                  color={COLOR_CONSTANTS.accent.red}
                  size="large"
                />
              ) : (
                <Button style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Continue</Text>
                </Button>
              )}

              <Text
                style={{ ...styles.text, textAlign: "center", opacity: 0.5 }}
              >
                More in depth details will be available to edit after choosing a
                few more details about your character.
              </Text>
            </>
          )}
        </View>
      </BarContainer>
    );
  }

  return <></>;
};

export default Start;
