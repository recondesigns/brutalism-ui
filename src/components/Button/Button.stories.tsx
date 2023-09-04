import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

/**
 *  Here is a description for the default variants.
 */
export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Hello world",
  },
}

/**
 * Copy for component subtitle.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
