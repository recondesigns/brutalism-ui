import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

/**
 *  Here is a description for the default variants.
 */
const ButtonStoryTemplate: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
}

/**
 *  Here is a description for the default variants.
 */
export const LabelProp: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: 'Label'
  }
}

/**
 *  Here is a description for the default variants.
 */
export const CustomProp: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    children: <span>Howdy</span>
  }
}

/**
 *  Here is a description for the default variants.
 */
export const ClassNameProp: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: 'Class name',
    className: 'BUC-Button'
  }
}

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: { control: 'select' }
  }
}

export default meta
