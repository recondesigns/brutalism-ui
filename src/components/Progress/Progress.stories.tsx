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
    percentage: 20,
    completeMessage: 'Complete!',
    size: 'md',
  },
  parameters: {
    controls: {
      exclude: ['size'],
    },
  },
}

export const Size: ProgressStory = {
  render: (args) => <Progress {...args} />,
  args: {
    percentage: 80,
    completeMessage: 'Complete!',
    size: 'md',
  },
}

export const CompleteMessage: ProgressStory = {
  render: (args) => <Progress {...args} />,
  args: {
    percentage: 100,
    completeMessage: 'Complete!',
  },
}

export default meta
