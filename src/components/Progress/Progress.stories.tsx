import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import Progress from "./Progress"

type ProgressStory = StoryObj<typeof Progress>

const meta: Meta<typeof Progress> = {
  title: "UI Components/Progress",
  component: Progress,
}

export const Demo: ProgressStory = {
  render: (args) => <Progress {...args} />,
  args: {
    label: "Label",
    size: "md",
    helperText: "Helper text.",
    value: 20,
    max: 100,
    includeDecimals: 0,
    completeMessage: "Complete!",
  },
  parameters: {
    controls: {
      disable: true,
    },
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
