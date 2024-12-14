import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export const MistralIcon: React.FC<IconProps> = ({size = 16, ...props}) => (
  <svg 
    viewBox="0 0 176 162" xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect x="15" y="1" width="32" height="32" fill="#FFCD00" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="143" y="1" width="32" height="32" fill="#FFCD00" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="15" y="33" width="32" height="32" fill="#FFA400" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="47" y="33" width="32" height="32" fill="#FFA400" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="111" y="33" width="32" height="32" fill="#FFA400" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="143" y="33" width="32" height="32" fill="#FFA400" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="15" y="65" width="32" height="32" fill="#FF7100" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="47" y="65" width="32" height="32" fill="#FF7100" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="79" y="65" width="32" height="32" fill="#FF7100" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="111" y="65" width="32" height="32" fill="#FF7100" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="143" y="65" width="32" height="32" fill="#FF7100" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="15" y="97" width="32" height="32" fill="#FF4902" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="79" y="97" width="32" height="32" fill="#FF4902" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="143" y="97" width="32" height="32" fill="#FF4902" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="15" y="129" width="32" height="32" fill="#FF0006" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect x="143" y="129" width="32" height="32" fill="#FF0006" stroke="#636363" strokeOpacity="0.2" strokeWidth="0.5" />
<rect y="1" width="16" height="160" fill="black" />
<rect x="63" y="97" width="16" height="32" fill="black" />
<rect x="95" y="33" width="16" height="32" fill="black" />
<rect x="127" y="1" width="16" height="32" fill="black" />
<rect x="127" y="97" width="16" height="64" fill="black" />
  </svg>
);