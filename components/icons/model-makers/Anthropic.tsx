import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export const AnthropicIcon: React.FC<IconProps> = ({size = 16, ...props}) => (
  <svg 
    strokeLinejoin="round" viewBox="0 -3 16 16"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g ><path d="M11.375 0h-2.411L13.352 11.13h2.411L11.375 0ZM4.4 0 0 11.13h2.46l0.9-2.336h4.604l0.9 2.336h2.46L6.924 0H4.4Zm-0.244 6.723 1.506-3.909 1.506 3.909H4.156Z" fill="currentColor" /></g>
  </svg>
);