import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "../emotionTheme"
import { CloseIcon } from "../../assets"

const ModalHeaderWrapper = styled("div")(
  {
    position: "relative",
    paddingBottom: "8px",
  },
  ({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
  })
)

const Title = styled("h3")(
  {
    position: "relative",
    margin: "0px",
    width: "85%",
    fontSize: "24px",
    lineHeight: "32px",
  },
  ({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
  })
)

const IconButton = styled("button")({
  position: "absolute",
  top: "-4px",
  right: "-10px",
  width: "32px",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  borderRadius: "50%",

  "&:hover": {
    background: "rgba(0, 0, 0, 0.15)",
  },
})

type ModalHeaderProps = {
  onClose?: any
  title?: string
}

export default function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalHeaderWrapper>
        <Title>{title}</Title>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </ModalHeaderWrapper>
    </ThemeProvider>
  )
}
