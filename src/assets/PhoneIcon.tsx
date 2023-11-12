import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.45 4.167c.05.741.175 1.466.375 2.158l-1 1c-.342-1-.558-2.058-.633-3.158H5.45Zm8.217 10.016c.708.2 1.433.325 2.166.375V15.8a12.856 12.856 0 0 1-3.166-.625l1-.992ZM6.25 2.5H3.333a.836.836 0 0 0-.833.833C2.5 11.158 8.842 17.5 16.667 17.5a.836.836 0 0 0 .833-.833v-2.909a.836.836 0 0 0-.833-.833 9.506 9.506 0 0 1-2.975-.475.702.702 0 0 0-.259-.042.854.854 0 0 0-.591.242l-1.834 1.833a12.624 12.624 0 0 1-5.491-5.491L7.35 7.158a.836.836 0 0 0 .208-.85 9.467 9.467 0 0 1-.475-2.975.836.836 0 0 0-.833-.833Z"
    />
  </svg>
)
export default SvgPhoneIcon
