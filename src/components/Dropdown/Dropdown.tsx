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
  hasError?: boolean
  disabled?: boolean
}

const HelpText = styled(Text)<HelpTextProps>(
  ({ theme, hasError, disabled }) => ({
    color: !hasError
      ? theme.palette
        ? theme.palette.common.black
        : defaultTheme.palette.common.black
      : theme.palette
        ? theme.palette.error.main
        : defaultTheme.palette.error.main,
    opacity: disabled ? '50%' : 'initial',
  })
)

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
  closeOnEsc?: boolean
  // initialValue?: string | number
  // value?: string | number
  isOpen?: boolean
  onSelect?: (arg1: Option) => void
}

export default function Dropdown({
  options,
  label,
  helperText,
  hasError = false,
  disabled = false,
  isOpen: controlledIsOpen,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  // onClick,
  // value,
  onSelect,
}: DropdownProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(false)
  const isFlyoutOpen = controlledIsOpen ? controlledIsOpen : uncontrolledIsOpen
  const [highlightedIndex, setHighlightedIndex] = React.useState<number | null>(
    null
  )
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

  const handleEscapeKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setUncontrolledIsOpen(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
    // case 'Enter':
    //   setUncontrolledIsOpen(!uncontrolledIsOpen)
    //   break
    case 'ArrowDown':
      if (!isFlyoutOpen) {
        setUncontrolledIsOpen(true)
      } else {
        setHighlightedIndex((prevIndex) =>
          prevIndex === null ? 0 : (prevIndex + 1) % options.length
        )
      }
      break
    case 'ArrowUp':
      if (isFlyoutOpen) {
        setHighlightedIndex((prevIndex) =>
          prevIndex === null
            ? options.length - 1
            : (prevIndex - 1 + options.length) % options.length
        )
      }
      break
    case 'Escape':
      setUncontrolledIsOpen(false)
      break
      // case 'Tab':
      //   setUncontrolledIsOpen(false)
      //   break
    default:
      break
    }
  }

  React.useEffect(() => {
    if (isFlyoutOpen) {
      if (closeOnOutsideClick) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      if (closeOnEsc) {
        document.addEventListener('keydown', handleEscapeKeydown)
      }
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKeydown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKeydown)
    }
  }, [isFlyoutOpen, closeOnOutsideClick, closeOnEsc])

  React.useEffect(() => {
    if (isFlyoutOpen) {
      setHighlightedIndex(-1)
    } else {
      setHighlightedIndex(null)
    }
  }, [isFlyoutOpen])

  console.log(isFlyoutOpen)

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
        hasError={hasError}
        disabled={disabled}
        onClick={() => setUncontrolledIsOpen(!uncontrolledIsOpen)}
        onKeyDown={handleKeyDown}
      />
      {helperText && (
        <HelpText variant="caption" hasError={hasError} disabled={disabled}>
          {helperText}
        </HelpText>
      )}
      {isFlyoutOpen && (
        <DropdownFlyout ref={flyoutRef}>
          {options.map((option, idx) => {
            return (
              <DropdownListItem
                key={option.value}
                option={option}
                isSelected={value?.value === option.value}
                isHighlighted={highlightedIndex === idx}
                onClick={() => newHandle(option)}
                onMouseEnter={() => setHighlightedIndex(idx)}
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