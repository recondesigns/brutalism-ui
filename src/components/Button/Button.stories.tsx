import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { CloseIcon } from '../../assets'

type ButtonStory = StoryObj<typeof Button>

const clickFunc = (msg: string) => alert(`${msg} was clicked.`)

const meta: Meta<typeof Button> = {
  title: 'Form elements/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['block', 'rounded'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
}

export const Default: ButtonStory = {
  render: (args) => <Button {...args} />,
  args: {
    buttonType: 'block',
    size: 'md',
    isFullWidth: false,
    disabled: false,
    children: 'Button',
    onClick: () => clickFunc('Button was clicked.'),
  },
  parameters: {
    controls: {
      exclude: ['leftIcon', 'className', 'onClick'],
    },
  },
}

export const ButtonType = {
  ...Default,
  args: {
    buttonType: 'rounded',
    children: 'Button',
    onClick: () => clickFunc('Full width button was clicked.'),
  },
  parameters: {
    controls: {
      exclude: [
        'disabled',
        'isFullWidth',
        'leftIcon',
        'className',
        'onClick',
        'size',
      ],
    },
  },
}

export const Size = {
  ...Default,
  args: {
    size: 'xl',
    children: 'Button',
    onClick: () => clickFunc('Full width button was clicked.'),
  },
  parameters: {
    controls: {
      exclude: [
        'disabled',
        'leftIcon',
        'className',
        'onClick',
        'isFullWidth',
        'buttonType',
      ],
    },
  },
}

export const FullWidth = {
  ...Default,
  args: {
    children: 'Button',
    isFullWidth: true,
    onClick: () => clickFunc('Full width button was clicked.'),
  },
  parameters: {
    controls: {
      exclude: [
        'disabled',
        'leftIcon',
        'className',
        'onClick',
        'size',
        'buttonType',
      ],
    },
  },
}

export const LeftIcon = {
  ...Default,
  args: {
    children: 'Button',
    leftIcon: <CloseIcon />,
    onClick: () => clickFunc('Left icon button was clicked.'),
  },
  parameters: {
    controls: {
      exclude: [
        'isFullWidth',
        'disabled',
        'className',
        'onClick',
        'size',
        'buttonType',
      ],
    },
  },
}

export const Disabled = {
  ...Default,
  args: {
    children: 'Button',
    disabled: true,
    onClick: () => clickFunc('Disabled button was clicked.'),
  },
  parameters: {
    controls: {
      exclude: [
        'buttonType',
        'leftIcon',
        'className',
        'onClick',
        'size',
        'buttonType',
        'isFullWidth',
      ],
    },
  },
}

export default meta
