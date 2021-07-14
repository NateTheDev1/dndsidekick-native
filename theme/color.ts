import tailwind from "tailwind-rn";

export const COLOR_CONSTANTS = {
  text: {
    light: "#FFFFFF",
    dark: "#000000",
    fadedLight: "#F2F2F2",
    fadedDark: "#727272",
  },
  background: {
    light: "#FFFFFF",
    dark: "#101519",
  },
  paper: {
    light: "#FFFFFF",
    dark: "#101519",
  },
  accent: {
    green: "#00BB7C",
    red: "#EF0008",
  },
};

export const LAYOUT_CONSTANTS = {
  height: {
    full: tailwind("h-full"),
  },
  width: {
    full: tailwind("w-full"),
  },
  display: {
    hidden: tailwind("hidden"),
    flex: tailwind("flex"),
  },
  overflow: {
    scroll: tailwind("overflow-scroll"),
    hidden: tailwind("overflow-hidden"),
    visible: tailwind("overflow-visible"),
  },
};

export function getTextColor(darkMode: boolean) {
  alert(darkMode);
  return darkMode ? COLOR_CONSTANTS.text.light : COLOR_CONSTANTS.text.dark;
}
