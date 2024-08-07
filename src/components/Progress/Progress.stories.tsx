import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import Progress from "./Progress"
import Button from "../Button"
import { defaultTheme } from "../emotionTheme"

type StyledButtonProps = {
  color: "green" | "red"
}

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, color }) => ({
  background:
    color === "green"
      ? theme?.palette?.success?.main
      : theme?.palette?.error?.main,
  "&:hover": {
    background:
      color === "green"
        ? theme?.palette?.success?.main
        : theme?.palette?.error?.main,
  },
  "&:active": {
    background:
      color === "green"
        ? theme?.palette?.success?.main
        : theme?.palette?.error?.main,
  },
}))

type ProgressStory = StoryObj<typeof Progress>

const meta: Meta<typeof Progress> = {
  title: "UI Components/Progress",
  component: Progress,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Demo: ProgressStory = {
  render: (args) => {
    const [progressValue, setProgressValue] = React.useState(args.value)

    return (
      <>
        <Progress {...args} value={progressValue} />
        <div
          style={{
            paddingTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <StyledButton
            color="green"
            size="xs"
            onClick={() => setProgressValue(progressValue + 1)}
          >
            Increase
          </StyledButton>
          <StyledButton
            color="red"
            size="xs"
            onClick={() => setProgressValue(progressValue - 1)}
          >
            Decrease
          </StyledButton>
        </div>
      </>
    )
  },
  args: {
    label: "Label",
    size: "md",
    helperText: "Helper text.",
    value: 40,
    max: 100,
    includeDecimals: 0,
    completeMessage: "Complete!",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "360px",
            minWidth: "360px",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Default: ProgressStory = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 20,
    max: 100,
    size: "md",
    includeDecimals: 0,
    completeMessage: "Complete!",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            maxWidth: "360px",
            minWidth: "360px",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Label = {
  ...Default,
  args: {
    label: "Label",
    value: 50,
  },
  parameters: {
    controls: {
      exclude: [
        "size",
        "helperText",
        "completeMessage",
        "includeDecimals",
        "max",
      ],
    },
  },
}

export const Size = {
  ...Default,
  args: {
    value: 80,
    size: "lg",
  },
  parameters: {
    controls: {
      exclude: [
        "helperText",
        "label",
        "completeMessage",
        "includeDecimals",
        "max",
      ],
    },
  },
}

export const HelperText = {
  ...Default,
  args: {
    value: 50,
    helperText: "Here is some helper text.",
  },
  parameters: {
    controls: {
      exclude: ["label", "size", "completeMessage", "includeDecimals", "max"],
    },
  },
}

export const IncludeDecimals = {
  ...Default,
  args: {
    value: 83.222,
    includeDecimals: 2,
    completeMessage: "Complete!",
  },
  parameters: {
    controls: {
      exclude: ["helperText", "label", "completeMessage", "size", "max"],
    },
  },
}

export const CompleteMessage = {
  ...Default,
  args: {
    value: 100,
    completeMessage: "Done!",
  },
  parameters: {
    controls: {
      exclude: ["helperText", "label", "includeDecimals", "size", "max"],
    },
  },
}

export default meta
