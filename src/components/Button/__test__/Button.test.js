import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Button from '../Button'
import { AlertIcon } from '../../../assets'

expect.extend(matchers)

describe('Button', () => {
    describe('Rendering and props', () => {
        afterEach(cleanup)

        it('should render a Button component', () => {
            const component = render(<Button><p>Example</p></Button>)

            expect(component.getByTestId('button-data-testid')).toBeTruthy()
        })

        it('should render a string for the label if passed to the label prop', () => {
            const component = render(<Button label='Label' />)
            const button = component.getByTestId('button-data-testid')

            expect(button).toHaveAttribute('label', 'Label')
        })

        it('should render a child component for the label if passed to the children prop', () => {
            const component = render(<Button><p>Button</p></Button>)
            const button = component.getByTestId('button-data-testid')

            expect(button).not.toHaveAttribute('label', 'Label')
        })

        it('should render a string for the label if children are passed for the label and a string is passed to the label prop', () => {
            const component = render(<Button label="Label"><p>Button</p></Button>)
            const button = component.getByTestId('button-data-testid')

            expect(button).toHaveAttribute('label', 'Label')
        })

        it('should render a primary styled button when "primary" is passed to variant prop', () => {
            const component = render(<Button label='Label' variant='primary' />)
            const button = component.getByTestId('button-data-testid')

            expect(button).toHaveStyleRule('background', '#002D62')
            expect(button).toHaveStyleRule('color', '#F2F2F2')
            expect(button).toHaveStyleRule('border', 'none')
            expect(button).toHaveStyleRule('box-shadow', '0px 6px 8px 0px rgba(13, 13, 13, 0.30)')
        })

        it('should render a secondary styled button when "secondary" is passed to variant prop', () => {
            const component = render(<Button label='Label' variant='secondary' />)
            const button = component.getByTestId('button-data-testid')

            expect(button).toHaveStyleRule('background', 'none')
            expect(button).toHaveStyleRule('color', '#002D62')
            expect(button).toHaveStyleRule('border', '2px solid #002D62')
            expect(button).toHaveStyleRule('box-shadow', 'none')
        })

        it('should render a text styled button when "text" is passed to variant prop', () => {
            const component = render(<Button label='Label' variant='text' />)
            const button = component.getByTestId('button-data-testid')

            expect(button).toHaveStyleRule('background', 'none')
            expect(button).toHaveStyleRule('color', '#002D62')
            expect(button).toHaveStyleRule('border', 'none')
            expect(button).toHaveStyleRule('box-shadow', 'none')
        })
    })

    it('should render a disabled primary button', () => {
        const component = render(<Button variant='primary' disabled />)
        const button = component.getByTestId('button-data-testid')

        expect(button).toHaveStyleRule('background', '#D9D9D9')
        expect(button).toHaveStyleRule('color', '#808080')
        expect(button).toHaveStyleRule('border', 'none')
        expect(button).toHaveStyleRule('box-shadow', 'none')
    })

    it('should render a disabled secondary button', () => {
        const component = render(<Button variant='secondary' disabled />)
        const button = component.getByTestId('button-data-testid')

        expect(button).toHaveStyleRule('background', 'none')
        expect(button).toHaveStyleRule('color', '#808080')
        expect(button).toHaveStyleRule('border', '2px solid #808080')
        expect(button).toHaveStyleRule('box-shadow', 'none')
    })

    it('should render a disabled text button', () => {
        const component = render(<Button variant='text' disabled />)
        const button = component.getByTestId('button-data-testid')

        expect(button).toHaveStyleRule('background', 'none')
        expect(button).toHaveStyleRule('color', '#808080')
        expect(button).toHaveStyleRule('border', 'none')
        expect(button).toHaveStyleRule('box-shadow', 'none')
    })

    it('should render a left icon', () => {
        const component = render(<Button shouldIncludeLeftIcon={<AlertIcon data-testid="testid-button-left-icon" />} />)
        const leftIcon = component.getByTestId('testid-button-left-icon')

        expect(leftIcon).toBeTruthy()
    })

    it('should render a right icon', () => {
        const component = render(<Button shouldIncludeRightIcon={<AlertIcon data-testid="testid-button-right-icon" />} />)
        const rightIcon = component.getByTestId('testid-button-right-icon')

        expect(rightIcon).toBeTruthy()
    })

    describe('disabled prop', () => {
        afterEach(cleanup)

        it('should render a button without a disabled attribute', () => {
            const component = render(<Button />)
            const button = component.getByTestId('button-data-testid')

            expect(button).not.toHaveAttribute('disabled')
        })

        it('should render a button with a disabled attribute', () => {
            const component = render(<Button disabled />)
            const button = component.getByTestId('button-data-testid')

            expect(button).toHaveAttribute('disabled')
        })

        it('should override the onClick if button is disabled', () => {
            const mockOnClick = jest.fn(() => console.log('Mock onClick function fired'))
            const component = render(<Button disabled onClick={mockOnClick}  />)
            const button = component.getByTestId('button-data-testid')

            fireEvent.click(button)

            expect(mockOnClick).not.toHaveBeenCalled()
        })

        describe('onClick prop', () => {
            afterEach(cleanup)

            it('should pass an onClick to the button', () => {
                const mockOnClick = jest.fn(() => console.log('Mock function fired'))
                const component = render(<Button onClick={mockOnClick} />)
                const button = component.getByTestId('button-data-testid')

                fireEvent.click(button)

                expect(mockOnClick).toHaveBeenCalled()
            })
        })
    })
})