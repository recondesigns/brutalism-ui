import { Meta, StoryObj } from '@storybook/react'
import Progress from './Progress'

type ProgressStory = StoryObj<typeof Progress>

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress
}

export const Default: ProgressStory = {
  // @ts-expect-error ignoring for now is all
  render: args => <Progress {...args} />
}

export default meta