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
  name: string
  value: string
  disabled: boolean
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
  onSelect?: (arg1: Option) => void
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
  const [value, setValue] = React.useState<Option | null>(null)
  // console.log(222, value)

  const newHandle = (selectedOption: Option) => {
    setValue(selectedOption)
    onSelect && onSelect(selectedOption)
    setUncontrolledIsOpen(!uncontrolledIsOpen)
  }

  return (
    <DropdownContainer>
      {label && <LabelText variant="body2">{label}</LabelText>}
      <DropdownMenu
        value={value}
        isFlyoutOpen={isFlyoutOpen}
        onClick={() => setUncontrolledIsOpen(!uncontrolledIsOpen)}
      />
      {helperText && <HelpText variant="caption">{helperText}</HelpText>}
      {isFlyoutOpen && (
        <DropdownFlyout>
          {options.map((option) => {
            if (value && value.value === option.value) {
              return (
                <DropdownListItem
                  key={option.value}
                  option={option}
                  isSelected={true}
                  onClick={() => newHandle(option)}
                >
                  {option.name}
                </DropdownListItem>
              )
            }

            return (
              <DropdownListItem
                key={option.value}
                option={option}
                isSelected={false}
                onClick={() => newHandle(option)}
              >
                {option.name}
              </DropdownListItem>
            )
          })}
        </DropdownFlyout>
      )}
    </DropdownContainer>
  )
}
