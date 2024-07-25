import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import DropdownMenu from './DropdownMenu'
import DropdownFlyout from './DropdownFlyout'
import DropdownListItem from './DropdownListItem'

const DropdownContainer = styled('div')({
  position: 'relative',
})

const LabelText = styled(Text)({
  paddingBottom: '4px',
})

const HelpText = styled(Text)({})

type Option = {
  title: string
  value: string
}

export type DropdownProps = {
  options: Option[]
  label?: string
  helperText?: string
  hasError?: boolean
  disabled?: boolean
  // initialValue?: string | number
  // value?: string | number
  isOpen?: boolean
  onSelect?: (arg1: string) => void
}

export default function Dropdown({
  options,
  label,
  helperText,
  isOpen: controlledIsOpen,
  // onClick,
  // value,
  onSelect,
}: DropdownProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(false)
  const isFlyoutOpen = controlledIsOpen ? controlledIsOpen : uncontrolledIsOpen
  const [value, setValue] = React.useState<string | null>(null)

  const handleOptionClick = (newValue: string) => {
    setValue(newValue)
    onSelect && onSelect(newValue)
    setUncontrolledIsOpen(!uncontrolledIsOpen)
  }

  return (
    <DropdownContainer>
      {label && <LabelText variant="body2">{label}</LabelText>}
      <DropdownMenu
        value={value}
        onClick={() => setUncontrolledIsOpen(!uncontrolledIsOpen)}
      />
      {helperText && <HelpText variant="caption">{helperText}</HelpText>}
      {isFlyoutOpen && (
        <DropdownFlyout>
          {options.map((option) => (
            <DropdownListItem
              key={option.value}
              onClick={() => handleOptionClick(option.title)}
            >
              {option.title}
            </DropdownListItem>
          ))}
        </DropdownFlyout>
      )}
    </DropdownContainer>
  )
}
