import { Meta, StoryObj } from "@storybook/react"
import NewButton from "./NewButton"

const meta: Meta<typeof NewButton> = {
  title: "Experimental/Button",
  component: NewButton,
}

export const Default: StoryObj<typeof NewButton> = {
  render: (args) => <NewButton {...args} />,
  args: {
    label: "Button",
    size: "lg",
    disabled: false,
    onClick: () => console.log("Button clicked."),
  },
}

export const Disabled: StoryObj<typeof NewButton> = {
  render: (args) => <NewButton {...args} />,
  args: {
    label: "Button",
    size: "lg",
    disabled: true,
    onClick: () => console.log("Button clicked."),
  },
}

export default meta
