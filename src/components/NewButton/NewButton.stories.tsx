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
  },
}

export const Disabled: StoryObj<typeof NewButton> = {
  render: (args) => <NewButton {...args} />,
  args: {
    label: "Button",
    size: "lg",
    disabled: true,
  },
}

export default meta
