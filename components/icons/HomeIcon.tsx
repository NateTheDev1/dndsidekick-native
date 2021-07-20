import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export const HomeIcon = ({
  color = "black",
  width = 18,
  height = 18,
}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M9.7966 0.329389C9.5853 0.118481 9.29877 0 9 0C8.70123 0 8.41469 0.118481 8.2034 0.329389L0.316287 8.20449C0.111043 8.41667 -0.00252457 8.70086 4.25934e-05 8.99583C0.00260976 9.29081 0.121107 9.57297 0.330012 9.78156C0.538917 9.99015 0.821515 10.1085 1.11694 10.111C1.41236 10.1136 1.69698 10.0002 1.90948 9.79527L2.23962 9.46564V16.875C2.23962 17.1734 2.35832 17.4595 2.56963 17.6705C2.78093 17.8815 3.06752 18 3.36635 18H5.61981C5.91863 18 6.20522 17.8815 6.41653 17.6705C6.62783 17.4595 6.74654 17.1734 6.74654 16.875V14.625C6.74654 14.3266 6.86525 14.0404 7.07655 13.8294C7.28785 13.6185 7.57444 13.4999 7.87327 13.4999H10.1267C10.4256 13.4999 10.7121 13.6185 10.9234 13.8294C11.1348 14.0404 11.2535 14.3266 11.2535 14.625V16.875C11.2535 17.1734 11.3722 17.4595 11.5835 17.6705C11.7948 17.8815 12.0814 18 12.3802 18H14.6337C14.9325 18 15.2191 17.8815 15.4304 17.6705C15.6417 17.4595 15.7604 17.1734 15.7604 16.875V9.46564L16.0905 9.79527C16.303 10.0002 16.5876 10.1136 16.8831 10.111C17.1785 10.1085 17.4611 9.99015 17.67 9.78156C17.8789 9.57297 17.9974 9.29081 18 8.99583C18.0025 8.70086 17.889 8.41667 17.6837 8.20449L9.7966 0.329389Z"
        fill={color}
      />
    </Svg>
  );
};