import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import styled from '@emotion/styled'
import Card from '../Card'
import Button from '../../Button'

const cardImage =
  'https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

type CardStory = StoryObj<typeof Card>

const meta: Meta<typeof Card> = {
  title: 'UI Components/Card',
  component: Card,
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

const clickFunc = (el: string) => alert(`${el} has been clicked.`)

export const Demo: CardStory = {
  render: (args) => <Card {...args} />,
  args: {
    disabled: false,
    children: (
      <>
        <Card.Image src={cardImage} alt="Card image" />
        <Card.Content>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph style={{ paddingBottom: '12px' }}>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </Card.Content>
        <Card.Actions>
          <Button onClick={() => clickFunc('Button')}>Button</Button>
        </Card.Actions>
      </>
    ),
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '360px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Default: CardStory = {
  render: (args) => <Card {...args} />,
  args: {
    disabled: false,
    children: (
      <>
        <Card.Image src={cardImage} alt="Card image" />
        <Card.Content>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph style={{ paddingBottom: '12px' }}>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </Card.Content>
        <Card.Actions>
          <Button onClick={() => clickFunc('Button')}>Button</Button>
        </Card.Actions>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ['children', 'onClick'],
    },
  },
  decorators: [
    (Story) => (
      <div>
        <div style={{ maxWidth: '360px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const IsClickable: CardStory = {
  ...Default,
  args: {
    isClickable: true,
    children: (
      <>
        <Card.Image src={cardImage} alt="Card image" />
        <Card.Content>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </Card.Content>
      </>
    ),
    onClick: () => clickFunc('Card'),
  },
  parameters: {
    controls: {
      exclude: ['children', 'onClick', 'disabled'],
    },
  },
}

export const Disabled: CardStory = {
  ...Default,
  args: {
    disabled: true,
    children: (
      <>
        <Card.Image src={cardImage} alt="Card image" />
        <Card.Content>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </Card.Content>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ['isClickable', 'children', 'onClick'],
    },
  },
}

export default meta
