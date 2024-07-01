import React from "react"
import "@testing-library/jest-dom"
import { matchers } from "@emotion/jest"
import { cleanup, render, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
// import { userEvent } from "@storybook/testing-library"
// import { fireEvent } from "@testing-library/dom"
import Button from "../Button"
import { AlertIcon } from "../../../assets"

expect.extend(matchers)

describe("Props", () => {
  afterEach(cleanup)

  it("should render a Button component", () => {
    const component = render(<Button data-testid="button-test">Button</Button>)
    const button = component.getByTestId("button-test")

    expect(button).toBeInTheDocument()
  })

  it("should render 'Send' as the button text", () => {
    const component = render(<Button data-testid="button-test">Send</Button>)
    const button = component.getByTestId("button-test")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Send")
  })

  it("should render a button with a background color of #E5A6FF", () => {
    const component = render(<Button data-testid="button-test">Send</Button>)
    const button = component.getByTestId("button-test")

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule("background", "#E5A6FF")
  })

  // it("should render a left icon", () => {
  //   const component = render(
  //     <Button
  //       shouldIncludeLeftIcon={
  //         <AlertIcon data-testid="testid-button-left-icon" />
  //       }
  //     />
  //   )
  //   const leftIcon = component.getByTestId("testid-button-left-icon")

  //   expect(leftIcon).toBeTruthy()
  // })
})

describe("Interactions", () => {
  afterEach(cleanup)

  xit("should change background to #DA80FF on hover", async () => {
    function setup(jsx) {
      return {
        user: userEvent.setup(),
        ...render(jsx),
      }
    }

    const user = setup(<Button data-testid="button-test">Send</Button>)
    const button = user.getByTestId("button-test")

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule("background", "#E5A6FF")

    await userEvent.hover(button)

    expect(button).toHaveStyleRule("background", "#DA80FF")

    // fireEvent.mouseEnter(button)

    // expect(button).toHaveStyleRule('background', '#DA80FF')
  })
})

// describe("disabled prop", () => {
//   afterEach(cleanup)

//   it("should render a button without a disabled attribute", () => {
//     const component = render(<Button />)
//     const button = component.getByTestId("button-data-testid")

//     expect(button).not.toHaveAttribute("disabled")
//   })

//   it("should render a button with a disabled attribute", () => {
//     const component = render(<Button disabled />)
//     const button = component.getByTestId("button-data-testid")

//     expect(button).toHaveAttribute("disabled")
//   })

//   it("should override the onClick if button is disabled", () => {
//     const mockOnClick = jest.fn(() =>
//       console.log("Mock onClick function fired")
//     )
//     const component = render(<Button disabled onClick={mockOnClick} />)
//     const button = component.getByTestId("button-data-testid")

//     fireEvent.click(button)

//     expect(mockOnClick).not.toHaveBeenCalled()
//   })

//   describe("onClick prop", () => {
//     afterEach(cleanup)

//     it("should pass an onClick to the button", () => {
//       const mockOnClick = jest.fn(() => console.log("Mock function fired"))
//       const component = render(<Button onClick={mockOnClick} />)
//       const button = component.getByTestId("button-data-testid")

//       fireEvent.click(button)

//       expect(mockOnClick).toHaveBeenCalled()
//     })
//   })
// })
// })
