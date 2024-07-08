import { Meta, StoryObj } from '@storybook/react'
import CardActions from '../CardActions'
import { Card } from '../Card'
import Button from '../../Button'

type CardActionsStory = StoryObj<typeof CardActions>

const meta: Meta<typeof CardActions> = {
  title: 'UI Components/Card/Building Blocks/Card Actions',
  component: CardActions,
}

export const Default: CardActionsStory = {
  render: (args) => (
    <Card>
      <CardActions {...args} />
    </Card>
  ),
  args: {
    children: (
      <Button onClick={() => alert('Button has been clicked.')}>
        Click me
      </Button>
    ),
  },
}

export default meta
