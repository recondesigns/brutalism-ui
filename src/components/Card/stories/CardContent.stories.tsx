import { Meta, StoryObj } from '@storybook/react'
import styled from '@emotion/styled'
import Card from '../Card'
import CardContent from '../CardContent'

type CardContentStory = StoryObj<typeof CardContent>

const meta: Meta<typeof CardContent> = {
  title: 'Components/Card/Building Blocks/Card Content',
  component: CardContent,
}

const CardTitle = styled('h4')`
  margin: 0px;
  padding: 0px 0px 24px 0px;
  font-size: 32px;
  line-height: 32px;
  font-family: sans-serif;
`

const CardSubtitle = styled('p')`
  margin: 0px;
  padding: 0px 0px 8px 0px;
  font-size: 16px;
  line-height: 24px;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.7);
`

const CardParagraph = styled('p')`
  margin: 0px;
  padding: 0px 0px 0px 0px;
  font-size: 16px;
  line-height: 20px;
  font-family: sans-serif;
`

export const Default: CardContentStory = {
  render: (args) => (
    <Card>
      <CardContent {...args} />
    </Card>
  ),
  args: {
    children: (
      <>
        <CardContent>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph style={{ paddingBottom: '12px' }}>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </CardContent>
      </>
    ),
  },
}

export default meta
