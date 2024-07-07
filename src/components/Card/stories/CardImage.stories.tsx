import { Meta, StoryObj } from '@storybook/react'
import { Card } from '../Card'
import CardImage from '../CardImage'

type CardImageStory = StoryObj<typeof CardImage>

const meta: Meta<typeof CardImage> = {
  title: 'Components/Card/Building Blocks/Card Image',
  component: CardImage,
}

export const Default: CardImageStory = {
  render: (args) => (
    <Card>
      <CardImage {...args} />
    </Card>
  ),
  args: {
    src: 'https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Card image',
  },
}

export default meta
