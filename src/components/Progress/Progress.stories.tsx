import { Meta, StoryObj } from '@storybook/react'
import Progress from './Progress'

type ProgressStory = StoryObj<typeof Progress>

const meta: Meta<typeof Progress> = {
  title: 'UI Components/Progress',
  component: Progress,
}

export const Default: ProgressStory = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 20,
    max: 100,
    completeMessage: 'Complete!',
    size: 'md',
  },
  parameters: {
    controls: {
      exclude: ['size'],
    },
  },
}

export const Size = {
  ...Default,
  args: {
    value: 80,
    completeMessage: 'Complete!',
    size: 'md',
  },
}

export const CompleteMessage = {
  ...Default,
  args: {
    value: 100,
    completeMessage: 'Complete!',
  },
}

export default meta
