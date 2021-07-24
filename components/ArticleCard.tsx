import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";

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
}) => {
  return (
    <Link to={article.redirect} component={TouchableOpacity}>
      <View
        style={{
          ...style,
          backgroundColor,
          padding: 10,
          paddingTop: 20,
          borderRadius: 5,
        }}
      >
        <View>
          <Text>{article.title}</Text>
          <View>
            <Text>By {article.author}</Text>
            <Text>{abbreviateNumber(article.views)}</Text>
          </View>
        </View>
        <View>{/* ArrowIcon */}</View>
      </View>
    </Link>
  );
};
