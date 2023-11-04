import { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const CardStoryTemplate: StoryObj<typeof Card> = {
  render: args => <Card {...args} />
}

/**
 *  Here is a description for the default variants.
 */
export const Default: StoryObj<typeof Card> = {
  ...CardStoryTemplate,
  args: {
    shouldHavePadding: true
  }
}

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs']
}

export default meta