import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"
import HelperText from "./HelperText"
// import { AlertIcon, PhoneIcon } from '../../assets'

const InputStoryTemplate: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("")

    return (
      <Input
        value={value}
        // @ts-expect-error Type '(e: React.ChangeEvent<HTMLInputElement>) => void' is not (delete for full error)
        onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        {...args}
      />
    )
  },
}

/**
 * Description copy for `Default` story and here is change.
 */
export const Default = {
  ...InputStoryTemplate,
  args: {
    // label: "Label",
  },
}

export const Label = {
  ...InputStoryTemplate,
  args: {
    label: "Label"
  },
}

export const HelpText = {
  ...InputStoryTemplate,
  args: {
    helperText: "This input has helper text and no label.",
  },
}

export const Errors = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    hasError: true,
    helperText: "This input has errors.",
  },
}

export const Disabled = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    disabled: true,
  },
}

export const Placeholder = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    placeholder: 'placeholder',
  },
}

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
