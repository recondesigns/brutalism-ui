import { create } from "@storybook/theming"
// @ts-expect-error Cannot find module '../assets/readme-logo.svg' or its corresponding type declarations
import temporaryLogo from "../assets/readme-logo.svg"

export default create({
  base: "light",
  brandTitle: "brutalism-ui",
  brandUrl: "https://github.com/recondesigns/brutalism-ui#readme",
  brandImage: temporaryLogo,
  brandTarget: "_self",

  // colorPrimary: "#000000",
  //   colorSecondary: "#585C6D",

  // UI
  // appBg: "#DBFF80",
  // appContentBg: "#8DFF8C",
  // appPreviewBg: "#DC143C",
  // appBorderColor: 'none',
  appBorderRadius: 4,

  // Text colors
  // textColor: "#000000",
  // textInverseColor: "#ffffff",

  // Toolbar default and active colors
  // barTextColor: "#000000",
  // barSelectedColor: "#000000",
  // barHoverColor: "#585C6D",
  // barBg: "#E5A6FF",

  // Form colors
  // inputBg: "#FFFFFF",
  // inputBorder: "#000000",
  // inputTextColor: "#000000",
  inputBorderRadius: 4,
})
