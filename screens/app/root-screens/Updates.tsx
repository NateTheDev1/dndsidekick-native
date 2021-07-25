import React from "react";
import { UserSelectors } from "../../../redux/User/selectors";
import {
  useFonts,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold,
} from "@expo-google-fonts/noto-sans-jp";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { COLOR_CONSTANTS } from "../../../theme/color";
import { useState } from "react";
import BarContainer from "../../../components/BarContainer";
import { useGetLatestUpdateQuery } from "../../../business-domain/graphql";
import { ActivityIndicator } from "react-native-paper";
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
        <View style={{ flex: 1, overflow: "scroll", ...styles.background }}>
          {!loading && data?.getLatestUpdate ? (
            <>
              <Text style={{ ...styles.header }}>
                {data.getLatestUpdate?.title}
              </Text>
              {data.getLatestUpdate.releaseDate && (
                <Text style={{ ...styles.text }}>
                  {isFutureDate(data.getLatestUpdate.releaseDate)
                    ? "Will release on"
                    : "Released"}{" "}
                  {formatDate(data.getLatestUpdate.releaseDate)}
                </Text>
              )}
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
        </View>
      </BarContainer>
    );
  }

  return <></>;
};

export default Updates;
