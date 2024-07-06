import { Meta, StoryObj } from '@storybook/react'
import Card from '../Card'
import CardContent from '../CardContent'

type CardContentStory = StoryObj<typeof CardContent>

const meta: Meta<typeof CardContent> = {
  title: 'Components/Building Blocks/CardContent',
  component: CardContent,
}

export const Default: CardContentStory = {
  render: (args) => (
    <Card>
      <CardContent {...args} />
    </Card>
  ),
  args: {
    children: <p style={{ margin: '0px', padding: '0px' }}>Card content</p>,
  },
}

export default meta
