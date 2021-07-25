import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import { COLOR_CONSTANTS } from "../theme/color";
import { canOpenURL, openURL } from "expo-linking";
import { RightArrowIcon } from "./icons/RightArrowIcon";

function abbreviateNumber(value: number) {
  var newValue: any = value;
  if (value >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue: any = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}
export const ArticleCard = ({
  article,
  backgroundColor,
  style = {},
  styles,
}: {
  article: {
    title: string;
    redirect: string;
    author: string;
    views: number;
    top: boolean;
  };
  backgroundColor: string;
  style?: any;
  styles: any;
}) => {
  const handleOpenUrl = () => {
    if (canOpenURL(article.redirect)) {
      openURL(article.redirect);
    }
  };

  const content = (
    <View
      style={{
        ...style,
        backgroundColor,
        padding: 20,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View>
        <Text style={{ ...styles.articleHeader }}>{article.title}</Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Text style={{ ...styles.articleText, fontSize: 15 }}>
            By {article.author}
          </Text>
          <Text style={{ ...styles.articleText, marginLeft: 10, fontSize: 15 }}>
            {abbreviateNumber(article.views)}
          </Text>
        </View>
        {article.top && (
          <View
            style={{
              marginTop: 15,
              padding: 5,
              width: "50%",
              alignItems: "center",
              borderRadius: 5,
              backgroundColor: COLOR_CONSTANTS.accent.red,
            }}
          >
            <Text
              style={{ ...styles.articleHeader, fontSize: 13, color: "white" }}
            >
              TRENDING
            </Text>
          </View>
        )}
      </View>
      <View style={{ width: "10%", opacity: 0.7 }}>
        <RightArrowIcon color={styles.articleArrow.backgroundColor} />
      </View>
    </View>
  );

  if (article.redirect.includes("http")) {
    return <View onTouchStart={handleOpenUrl}>{content}</View>;
  } else {
    return (
      <Link to={article.redirect} component={TouchableOpacity}>
        {content}
      </Link>
    );
  }
};
