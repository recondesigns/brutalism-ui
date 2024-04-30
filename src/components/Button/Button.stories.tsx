import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const ButtonStoryTemplate: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
}

/**
 *  Here is a description for the variant story.
 */
export const Variant: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    variant: 'primary',
    label: 'Button',
    onClick: () => alert('Click was fired.'),
  },
  parameters: {
    controls: {
      exclude: [
        'size',
        'className',
        'disabled',
        'fullWidth',
        'onClick',
        'type',
      ],
    },
  },
}

/**
 *  Here is a description for the size story.
 */
export const Size: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button',
    onClick: () => alert('Click was fired.'),
  },
  parameters: {
    controls: {
      exclude: ['className', 'disabled', 'fullWidth', 'onClick', 'type'],
    },
  },
}

/**
 *  Here is a description for the fullWidth story.
 */
export const FullWidth: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    variant: 'primary',
    size: 'large',
    fullWidth: true,
    label: 'Button',
    onClick: () => alert('Click was fired.'),
  },
  parameters: {
    controls: {
      exclude: ['size', 'onClick', 'type', 'className', 'disabled'],
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

/**
 *  Here is a description for the disabled story.
 */
export const Disabled: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    variant: 'primary',
    disabled: true,
    label: 'Button',
    onClick: () => alert('Click was fired.'),
  },
  parameters: {
    controls: {
      exclude: ['size', 'className', 'fullWidth', 'onClick', 'type'],
    },
  },
}

/**
 *  Here is a description for the Kitchen sink story.
 */
export const KitchenSink: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
    label: 'Button',
    disabled: false,
    onClick: () => alert('Click was fired.'),
  },
  parameters: {
    controls: {
      exclude: ['onClick', 'type', 'className'],
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

/**
 * Here is a description.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio' },
    type: { control: 'select' },
  },
}

export default meta
