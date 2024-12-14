import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export const XaiIcon: React.FC<IconProps> = ({size = 16, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g ><polygon fill="currentColor" points="226.83 411.15 501.31 803.15 623.31 803.15 348.82 411.15 226.83 411.15" /><polygon fill="currentColor" points="348.72 628.87 226.69 803.15 348.77 803.15 409.76 716.05 348.72 628.87" /><polygon fill="currentColor" points="651.23 196.85 440.28 498.12 501.32 585.29 773.31 196.85 651.23 196.85" /><polygon fill="currentColor" points="673.31 383.25 673.31 803.15 773.31 803.15 773.31 240.44 673.31 383.25" /></g>
  </svg>
);