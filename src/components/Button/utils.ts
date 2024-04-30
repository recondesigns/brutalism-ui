import { defaultTheme } from "../emotionTheme"

type ButtonSize = "small" | "medium" | "large"

function setButtonSize(buttonSize: ButtonSize) {
  let width, height

  switch (buttonSize) {
    case "small":
      width = "140px"
      height = "32px"
      break
    case "medium":
      width = "176px"
      height = "40px"
      break
    case "large":
    default:
      width = "232px"
      height = "48px"
      break
  }

  return { width, height }
}

type ButtonVariant = "primary" | "secondary" | "ghost"

function setButtonVariant(buttonVariant: ButtonVariant) {
  let backgroundColor, border, contrastColor, isShadowVisible

  switch (buttonVariant) {
    case "primary":
      backgroundColor = defaultTheme.palette.primary.main
      border = `1px solid ${defaultTheme.palette.common.border}`
      contrastColor = defaultTheme.palette.primary.contrastColor
      isShadowVisible = true
      break
    case "secondary":
      backgroundColor = "none"
      border = `1px solid ${defaultTheme.palette.primary.main}`
      contrastColor = defaultTheme.palette.primary.main
      isShadowVisible = false
      break
    case "ghost":
      backgroundColor = "none"
      border = "none"
      contrastColor = defaultTheme.palette.primary.main
      isShadowVisible = false
      break
    default:
      backgroundColor = defaultTheme.palette.primary.main
      border = `1px solid ${defaultTheme.palette.common.border}`
      contrastColor = defaultTheme.palette.primary.contrastColor
      isShadowVisible = true
      break
  }

  return { backgroundColor, border, contrastColor, isShadowVisible }
}

export { setButtonSize, setButtonVariant }
