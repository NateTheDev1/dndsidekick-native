import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export const BookIcon = ({
  color = "white",
  width = 24,
  height = 24,
}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.1285 21.1666H3.82328C3.2055 21.1666 2.61303 20.912 2.1762 20.4588C1.73937 20.0055 1.49396 19.3909 1.49396 18.7499V4.24992C1.49396 3.60898 1.73937 2.99429 2.1762 2.54108C2.61303 2.08786 3.2055 1.83325 3.82328 1.83325H15.4699C16.0876 1.83325 16.6801 2.08786 17.1169 2.54108C17.5538 2.99429 17.7992 3.60898 17.7992 4.24992V5.45825L20.1285 21.1666ZM20.1285 21.1666C19.5107 21.1666 18.9183 20.912 18.4814 20.4588C18.0446 20.0055 17.7992 19.3909 17.7992 18.7499V5.45825L20.1285 21.1666ZM20.1285 21.1666C20.7463 21.1666 21.3387 20.912 21.7756 20.4588C22.2124 20.0055 22.4578 19.3909 22.4578 18.7499V7.87492C22.4578 7.23398 22.2124 6.61929 21.7756 6.16608C21.3387 5.71286 20.7463 5.45825 20.1285 5.45825H17.7992L20.1285 21.1666ZM13.1405 1.83325H8.48191H13.1405ZM6.15259 16.3333H13.1405H6.15259ZM6.15259 6.66658H13.1405V11.4999H6.15259V6.66658Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};