import React from "react";
import { UserSelectors } from "../../../redux/User/selectors";
import {
  useFonts,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold,
} from "@expo-google-fonts/noto-sans-jp";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { useState } from "react";
import BarContainer from "../../../components/BarContainer";
import { useGetLatestUpdateQuery } from "../../../business-domain/graphql";
import { ActivityIndicator, Button } from "react-native-paper";
import moment from "moment";

function isFutureDate(value: any) {
  const d_now = new Date();
  const d_inp = new Date(value);
  return d_now.getTime() <= d_inp.getTime();
}

const Updates = () => {
  const theme = UserSelectors.useSelectTheme();

  const { data, loading, error } = useGetLatestUpdateQuery({
    fetchPolicy: "no-cache",
  });

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
      },
      buttonText: {
        color: "white",
        fontFamily: "NotoSansJP_500Medium",
        textTransform: "none",
      },
    })
  );

  const formatDate = (date: string) => {
    return moment(date).fromNow();
  };

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
    });
  }, [theme]);

  if (fontsLoaded) {
    return (
      <BarContainer showSettings={false} showBack={true}>
        <ScrollView
          style={{ flex: 1, overflow: "scroll", ...styles.background }}
        >
          {!loading && data?.getLatestUpdate ? (
            <>
              <Text style={{ ...styles.header }}>
                {data.getLatestUpdate?.title}
              </Text>
              {data.getLatestUpdate.releaseDate && (
                <Text style={{ ...styles.text, marginBottom: 0 }}>
                  {isFutureDate(data.getLatestUpdate.releaseDate)
                    ? "Will release on"
                    : "Released"}{" "}
                  {formatDate(data.getLatestUpdate.releaseDate)}
                </Text>
              )}
              <Text style={{ ...styles.text, opacity: 0.7, marginBottom: 0 }}>
                Version {data.getLatestUpdate.version}
              </Text>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 25 }}
              >
                {data.getLatestUpdate.tags.map((tag, key) => (
                  <View
                    key={key}
                    style={{
                      backgroundColor: tag?.includes("Bug")
                        ? COLOR_CONSTANTS.accent.red
                        : COLOR_CONSTANTS.accent.green,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.text,
                        marginBottom: 0,
                        marginTop: 0,
                        fontSize: 12,
                      }}
                    >
                      {tag}
                    </Text>
                  </View>
                ))}
              </View>

              {data.getLatestUpdate.paragraphs.map((p, key) => {
                return (
                  <Text
                    key={key}
                    style={{ ...styles.text, lineHeight: 40, marginBottom: 10 }}
                  >
                    {p}
                  </Text>
                );
              })}
              <Button
                onPress={() => console.log("here")}
                style={{ ...styles.button, marginTop: 25 }}
              >
                <Text style={styles.buttonText}>View More Updates</Text>
              </Button>
            </>
          ) : (
            <View>
              <Text
                style={{ textAlign: "center", ...styles.text, fontSize: 15 }}
              >
                No updates available.
              </Text>
            </View>
          )}
          {loading && (
            <ActivityIndicator
              animating={true}
              color={COLOR_CONSTANTS.accent.red}
              size="large"
            />
          )}
        </ScrollView>
      </BarContainer>
    );
  }

  return <></>;
};

export default Updates;
