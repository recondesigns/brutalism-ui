import { Meta, StoryObj } from "@storybook/react"
import styled from "@emotion/styled"
import Card from "../Card"
import CardImage from "../CardImage"
import CardContent from "../CardContent"
import CardActions from "../CardActions"
import Button from "../../Button"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
}

type CardStory = StoryObj<typeof Card>

const CardTitle = styled("h4")`
  margin: 0px;
  padding: 0px 0px 24px 0px;
  font-size: 32px;
  line-height: 32px;
  font-family: sans-serif;
`

const CardSubtitle = styled("p")`
  margin: 0px;
  padding: 0px 0px 8px 0px;
  font-size: 16px;
  line-height: 24px;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.7);
`

const CardParagraph = styled("p")`
  margin: 0px;
  padding: 0px 0px 0px 0px;
  font-size: 16px;
  line-height: 20px;
  font-family: sans-serif;
`

const clickFunc = (el: string) => alert(`${el} has been clicked.`)

export const Default: CardStory = {
  render: (args) => <Card {...args} />,
  args: {
    isClickable: false,
    disabled: false,
    children: (
      <>
        <CardImage
          src="https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
        />
        <CardContent>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph style={{ paddingBottom: "12px" }}>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </CardContent>
        <CardActions>
          <Button onClick={() => clickFunc("Button")}>Button</Button>
        </CardActions>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ["children", "onClick"],
    },
  },
}

export const IsClickable: CardStory = {
  ...Default,
  args: {
    isClickable: true,
    children: (
      <>
        <CardImage
          src="https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
        />
        <CardContent>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </CardContent>
      </>
    ),
    onClick: () => clickFunc("Card"),
  },
  parameters: {
    controls: {
      exclude: ["children", "onClick", "disabled"],
    },
  },
}

export const Disabled: CardStory = {
  ...Default,
  args: {
    disabled: true,
    children: (
      <>
        <CardImage
          src="https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
        />
        <CardContent>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </CardContent>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ["isClickable", "children", "onClick"],
    },
  },
}

export default meta
