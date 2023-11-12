import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { createButtonLabel } from './utils'

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonType = 'button' | 'submit' | 'reset';

type Props = {
  /**
   * Copy for `variant` prop description.
   */
  variant?: ButtonVariant;
  /**
   * Applies a text string as a label for the Button.
   *
   * **Note**: The label prop will override the children prop if both are used.
   */
  label?: string;
  /**
   * Allows for custom CSS styles by applying a string as a classname to the button element.
   */
  className?: string;
  /**
   * Child components can be passed to be used as the "label" of the Button.
   *
   * **Note**: The label prop will override the children prop if both are used.
   */
  children?: React.ReactNode | React.ReactElement | JSX.Element;
  /**
   * Copy for type prop.
   */
  type?: ButtonType;
  /**
   * Copy for type prop.
   */
  disabled?: boolean;
  /**
   * Copy for `data-testid` prop.
   */
  'data-testid'?: string;
  /**
   * Copy for `shouldIncludeLeftIcon` prop.
   */
  shouldIncludeLeftIcon?: React.ReactElement;
  /**
   * Copy for `shouldIncludeRightIcon` prop.
   */
  shouldIncludeRightIcon?: React.ReactElement;
};

export type ButtonProps = Props & HTMLAttributes<HTMLButtonElement>;

const ButtonComponent = styled.button<ButtonProps>(
    {
        boxSizing: 'border-box',
        padding: '8px',
        fontFamily: '\'Helvetica Neue\', \'Sans-serif\'',
        fontWeight: 'bold',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    ({ variant, disabled }) => {
        switch (variant) {
        case 'primary':
            return {
                background: 'red',
                color: !disabled ? '#F2F2F2' : '#808080',
                border: 'none',
                boxShadow: !disabled
                    ? '0px 6px 8px 0px rgba(13, 13, 13, 0.30)'
                    : 'none',
                cursor: !disabled ? 'pointer' : 'not-allowed',
                '&:hover': {
                    boxShadow: !disabled
                        ? '0px 4px 8px 0px rgba(13, 13, 13, 0.30)'
                        : 'none',
                },
                '&:active': {
                    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.14)',
                },
            }
        case 'secondary':
            return {
                background: !disabled ? 'none' : 'none',
                color: !disabled ? '#002D62' : '#808080',
                border: `2px solid ${!disabled ? '#002D62' : '#808080'}`,
                cursor: !disabled ? 'pointer' : 'not-allowed',
                boxShadow: 'none',
                '&:hover': {
                    background: !disabled ? 'rgba(212, 228, 247, 0.7)' : 'none',
                },
                '&:active': {
                    background: !disabled ? 'rgba(181, 202, 227, 1)' : 'none',
                },
            }
        case 'text':
            return {
                background: !disabled ? 'none' : 'none',
                color: !disabled ? '#002D62' : '#808080',
                border: 'none',
                cursor: !disabled ? 'pointer' : 'not-allowed',
                boxShadow: 'none',
                '&:hover': {
                    background: !disabled ? 'rgba(212, 228, 247, 0.7)' : 'none',
                },
                '&:active': {
                    background: !disabled ? 'rgba(181, 202, 227, 1)' : 'none',
                },
            }
        }
    }
)

function Button({
    variant = 'primary',
    label,
    type,
    className,
    children,
    disabled,
    shouldIncludeLeftIcon,
    shouldIncludeRightIcon,
    ...otherProps
}: ButtonProps) {
    const buttonLabel = createButtonLabel(label, children)

    if (shouldIncludeLeftIcon && shouldIncludeRightIcon) {
        console.warn(
            'The button component cannot have two icons. Both props will be ignore if shouldIncludeLeftIcon and shouldIncludeRightIcon, both, are used.'
        )
    }

    return (
        <ButtonComponent
            className={className}
            label={label}
            type={!type ? 'button' : type}
            disabled={disabled}
            data-testid="button-data-testid"
            variant={variant}
            {...otherProps}
        >
            {shouldIncludeLeftIcon && !shouldIncludeRightIcon ? shouldIncludeLeftIcon : null}
            {buttonLabel}
            {shouldIncludeRightIcon && !shouldIncludeLeftIcon ? shouldIncludeRightIcon : null}
        </ButtonComponent>
    )
}

export default Button
