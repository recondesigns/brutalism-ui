import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"
import { CloseIcon } from "../../assets"

type ButtonStory = StoryObj<typeof Button>

const clickFunc = (msg: string) => alert(`${msg} was clicked.`)

const meta: Meta<typeof Button> = {
  title: "Form elements/Button",
  component: Button,
}

export const Default: ButtonStory = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    onClick: () => clickFunc("Button was clicked."),
  },
}

export const FullWidth = {
  ...Default,
  args: {
    children: "Button",
    isFullWidth: true,
    onClick: () => clickFunc("Full width button was clicked."),
  },
}

export const LeftIcon = {
  ...Default,
  args: {
    children: "Button",
    leftIcon: <CloseIcon />,
    onClick: () => clickFunc("Left icon button was clicked."),
  },
}

export const Disabled = {
  ...Default,
  args: {
    children: "Button",
    disabled: true,
    onClick: () => clickFunc("Disabled button was clicked."),
  },
}

export default meta
