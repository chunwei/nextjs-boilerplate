import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export const CohereIcon: React.FC<IconProps> = ({size = 16, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <mask id="mask0_174_2406" x="0" y="0" width="17" height="18"><path d="M17 0.5H0V17.5H17V0.5Z" fill="white" /></mask>
<g ><path fillRule="evenodd" clipRule="evenodd" d="M5.50773 10.6219C5.9653 10.6219 6.8755 10.5968 8.13362 10.0788C9.59973 9.47518 12.5166 8.37942 14.6208 7.2539C16.0924 6.46668 16.7375 5.42553 16.7375 4.02344C16.7375 2.07751 15.16 0.5 13.2141 0.5H5.06095C2.26586 0.5 0 2.76586 0 5.56095C0 8.35604 2.12151 10.6219 5.50773 10.6219Z" fill="#39594D" /><path fillRule="evenodd" clipRule="evenodd" d="M6.88672 14.107C6.88672 12.7369 7.71155 11.5016 8.97699 10.9764L11.5446 9.9108C14.1417 8.83294 17.0003 10.7415 17.0003 13.5535C17.0003 15.732 15.2339 17.4979 13.0553 17.4973L10.2754 17.4966C8.40372 17.4961 6.88672 15.9787 6.88672 14.107Z" fill="#D18EE2" /><path d="M2.91749 11.2891C1.30623 11.2891 0 12.5952 0 14.2065V14.5844C0 16.1956 1.30618 17.5018 2.91744 17.5018C4.5287 17.5018 5.83493 16.1956 5.83493 14.5844V14.2065C5.83493 12.5952 4.52875 11.2891 2.91749 11.2891Z" fill="#FF7759" /></g>
  </svg>
);