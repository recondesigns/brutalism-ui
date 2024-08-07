import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown from '../Dropdown'

const longOptionsList = [
  {
    name: 'Ford',
    value: 'ford',
    disabled: false,
  },
  {
    name: 'Dodge',
    value: 'dodge',
    disabled: true,
  },
  {
    name: 'Chevy',
    value: 'chevy',
    disabled: false,
  },
  {
    name: 'GMC',
    value: 'gmc',
    disabled: false,
  },
  {
    name: 'Toyota',
    value: 'toyota',
    disabled: false,
  },
  {
    name: 'Honda',
    value: 'honda',
    disabled: false,
  },
  {
    name: 'Mazda',
    value: 'mazda',
    disabled: false,
  },
  {
    name: 'Chrysler',
    value: 'chrysler',
    disabled: false,
  },
  {
    name: 'BMW',
    value: 'bmw',
    disabled: false,
  },
  {
    name: 'Buick',
    value: 'buick',
    disabled: false,
  },
  {
    name: 'Cadillac',
    value: 'cadillac',
    disabled: false,
  },
  {
    name: 'Audi',
    value: 'audi',
    disabled: false,
  },
]

expect.extend(matchers)

describe('Props', () => {
  afterEach(cleanup)

  it('should render a Dropdown component', () => {
    render(<Dropdown options={longOptionsList} />)
    const DropdownComponent = screen.getByText('Choose an option...')

    expect(DropdownComponent).toBeInTheDocument()
  })

  it('should open the DropdownFlyout when DropdownMenu is clicked', async () => {
    const user = userEvent.setup()
    render(<Dropdown options={longOptionsList} />)

    const dropdownMenu = screen.getByText('Choose an option...')

    await user.click(dropdownMenu)

    const dropdownFlyout = screen.queryByRole('listbox')
    expect(dropdownFlyout).toBeInTheDocument()
  })

  it('should render not open flyout when disabled prop is used', async () => {
    const user = userEvent.setup()
    render(<Dropdown options={longOptionsList} disabled />)

    const dropdownMenu = screen.getByText('Choose an option...')

    await user.click(dropdownMenu)

    const dropdownFlyout = screen.queryByRole('listbox')
    expect(dropdownFlyout).not.toBeInTheDocument()
  })

  it('should close flyout when escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<Dropdown options={longOptionsList} />)

    const dropdownMenu = screen.getByText('Choose an option...')

    await user.click(dropdownMenu)

    const dropdownFlyout = screen.queryByRole('listbox')

    await user.keyboard('{Escape}')

    expect(dropdownFlyout).not.toBeInTheDocument()
  })

  it('should close flyout when menu is clicked again', async () => {
    const user = userEvent.setup()
    render(<Dropdown options={longOptionsList} />)

    const dropdownMenu = screen.getByText('Choose an option...')

    await user.click(dropdownMenu)

    const dropdownFlyout = screen.queryByRole('listbox')

    await user.click(dropdownMenu)

    expect(dropdownFlyout).not.toBeInTheDocument()
  })

  it('should render helper text of \'helper text\'', () => {
    render(<Dropdown options={longOptionsList} helperText="helper text" />)

    const helperText = screen.getByText('helper text')

    expect(helperText).toBeInTheDocument()
  })

  it('should render label of \'label\'', () => {
    render(<Dropdown options={longOptionsList} label="label" />)

    const label = screen.getByText('label')

    expect(label).toBeInTheDocument()
  })

  it('should render open flyout when isOpen is true', () => {
    render(<Dropdown options={longOptionsList} isOpen />)

    const flyout = screen.queryByRole('listbox')

    expect(flyout).toBeInTheDocument()
  })

  it('should render a flyout with max-height of 300px', async () => {
    const user = userEvent.setup()
    render(<Dropdown options={longOptionsList} flyoutMaxHeight="300px" />)

    const dropdownMenu = screen.getByText('Choose an option...')
    await user.click(dropdownMenu)

    const flyout = screen.queryByRole('listbox')
    expect(flyout).toHaveStyleRule('max-height', '300px')
  })
})
