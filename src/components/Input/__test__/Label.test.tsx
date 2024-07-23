import React from "react"
import "@testing-library/jest-dom"
import { matchers } from "@emotion/jest"
import { cleanup, render } from "@testing-library/react"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "../../emotionTheme"
import Input from "../Input"

expect.extend(matchers)

type TestProps = {
  label?: string
  disabled?: boolean
  placeholder?: string
  helperText?: string
  hasError?: boolean
  required?: boolean
}

const TestInput = (testProps: TestProps) => {
  const [inputValue, setInputValue] = React.useState("")

  return (
    <Input
      value={inputValue}
      onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      {...testProps}
    />
  )
}

describe("Label", () => {
  afterEach(cleanup)

  it("should render a label with 'label' prop is used", () => {
    const component = render(<TestInput label="Label" />)
    const labelEl = component.queryByTestId("input-label-test")

    expect(labelEl).toBeInTheDocument()
  })

  it('should not render a label when the "label" prop is not used', () => {
    const component = render(<TestInput />)
    const labelEl = component.queryByTestId("input-label-test")

    expect(labelEl).not.toBeInTheDocument()
  })

  it("should render label color #FF4F58 when an error is present", () => {
    const component = render(
      <ThemeProvider theme={defaultTheme}>
        <TestInput label="Label" hasError={true} />
      </ThemeProvider>
    )
    const label = component.queryByTestId("input-label-test")

    expect(label).toHaveStyleRule("color", "#FF4F58")
  })
})
