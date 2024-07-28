import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import DropdownMenu from './DropdownMenu'
import DropdownFlyout from './DropdownFlyout'
import DropdownListItem from './DropdownListItem'
import { defaultTheme } from '../emotionTheme'

const DropdownContainer = styled('div')({
  position: 'relative',
})

type LabelTextProps = {
  disabled?: boolean
}

const LabelText = styled(Text)<LabelTextProps>(
  {
    paddingBottom: '4px',
  },
  ({ theme, disabled }) => ({
    color: theme.palette
      ? theme.palette.common.black
      : defaultTheme.palette.common.black,
    opacity: disabled ? '50%' : 'initial',
  })
)

type HelpTextProps = {
  disabled?: boolean
}

const HelpText = styled(Text)<HelpTextProps>(({ theme, disabled }) => ({
  color: theme.palette
    ? theme.palette.common.black
    : defaultTheme.palette.common.black,
  opacity: disabled ? '50%' : 'initial',
}))

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
  closeOnOutsideClick?: boolean
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
  disabled = false,
  closeOnOutsideClick = true,
  // onClick,
  // value,
  onSelect,
}: DropdownProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(false)
  const isFlyoutOpen = controlledIsOpen ? controlledIsOpen : uncontrolledIsOpen
  const [value, setValue] = React.useState<Option | null>(null)
  const flyoutRef = React.useRef<HTMLDivElement | null>(null)
  const menuRef = React.useRef<HTMLButtonElement | null>(null)

  const newHandle = (selectedOption: Option) => {
    setValue(selectedOption)
    onSelect && onSelect(selectedOption)
    setUncontrolledIsOpen(!uncontrolledIsOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      flyoutRef.current &&
      !flyoutRef.current.contains(event.target as Node) &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setUncontrolledIsOpen(false)
    }
  }

  React.useEffect(() => {
    if (isFlyoutOpen && closeOnOutsideClick) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isFlyoutOpen, closeOnOutsideClick])

  return (
    <DropdownContainer>
      {label && (
        <LabelText variant="body2" disabled={disabled}>
          {label}
        </LabelText>
      )}
      <DropdownMenu
        ref={menuRef}
        value={value}
        isFlyoutOpen={isFlyoutOpen}
        disabled={disabled}
        onClick={() => setUncontrolledIsOpen(!uncontrolledIsOpen)}
      />
      {helperText && (
        <HelpText variant="caption" disabled={disabled}>
          {helperText}
        </HelpText>
      )}
      {isFlyoutOpen && (
        <DropdownFlyout ref={flyoutRef}>
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
