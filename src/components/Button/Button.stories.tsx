import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"
import { CloseIcon } from "../../assets"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
}

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    size: "lg",
    isFullWidth: false,
    disabled: false,
    onClick: () => console.log("Button clicked."),
  },
}

export const FullWidth: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    isFullWidth: true,
    onClick: () => console.log("Button clicked."),
  },
}

export const LeftIcon: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    leftIcon: <CloseIcon />,
    onClick: () => console.log("Button clicked."),
  },
}

export const Disabled: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    disabled: true,
    onClick: () => console.log("Button clicked."),
  },
}

export default meta
